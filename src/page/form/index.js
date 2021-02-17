import React, { Component } from 'react'
import Form1 from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import "../style.css"
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            username: "",
            email: "",
            address: { city: "" },
            company: { name: "" },
            users: [],
            usersData: {},
            album: [],
            idAlbum: "",
            photo: [],
            isLoaded: false,
            act: 0,
            index: "",
        }
    }
    setValue = el => {
        console.log(el.target.value);
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then(results => results.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    users: json
                })
            })
            .catch(error => console.error("Eror : ", error))

    }
    hapus = (idx) => {
        let newUser = this.state.users;
        let id = idx - 1;
        newUser.splice(id, 1);
        this.setState({
            users: newUser
        });
        console.log(this.state.users)
        alert("Berhasil Menghapus Data !!");
    }
    album = id => {
        console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
            .then(results => results.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    album: json
                })
                console.log("album :", this.state.album)
            })
            .catch(error => console.error("Eror : ", error))

        fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
            .then(results => results.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    photo: json
                })
                console.log("photo :", this.state.photo)
            })
            .catch(error => console.error("Eror : ", error))

    }
    photo = id => {
        console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
            .then(results => results.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    photo: json
                })
                console.log("photo :", this.state.photo)
            })
            .catch(error => console.error("Eror : ", error))

    }
    
    edit = (idx) => {
        let id = idx - 1;
        let newUsers = this.state.users[id];

        this.setState({
            usersData: newUsers,
            act: 1,
            index: id
        })
        console.log("index : ", id);
        console.log("act : ", this.state.act);
        console.log("userData : ", this.state.usersData);
    }

    simpan = () => {
        console.log("Simpan")
        console.log("name :", this.state.name);
        console.log("username :", this.state.username);
        console.log("username :", this.state.address.city);

        let newUsers = this.state.users;

        if (this.state.act == 0) {
            if (this.state.name !== "") {
                newUsers.push({
                    name: this.state.name,
                    username: this.state.username,
                    email: this.state.email,
                    address: {
                        city: this.state.address.city
                    },
                    company: {
                        name: this.state.company.name
                    }
                })
                this.setState({
                    users: newUsers
                })
                alert("Simpan Data")
                this.clear();
                console.log("hasil Simpan :", this.state.users)
            } else {
                alert("Nama harus di isi !")
            }
        } else {
            let i = this.state.index;
            console.log("index", i)
            console.log("new USers : ", newUsers)
            newUsers[i].name = this.state.name;
            newUsers[i].username = this.state.username;
            newUsers[i].email = this.state.email;
            newUsers[i].address.city = this.state.address.city;
            newUsers[i].company.name = this.state.company.name;

            console.log("address edit :", newUsers[i].address.city)
            this.setState({
                users: newUsers,
                act: 0
            })
            alert("Data Success Has been update !");
            this.clear();
        }
    }
    clear = () => {
        this.setState({
            name: "",
            username: "",
            email: "",
            address: { city: "" },
            company: { name: "" }
        })
    }
    reset = () => {
        this.setState({
            usersData: {}
        })
    }
    render() {
        // console.log(isLoaded)

        console.log("userData : ", this.state.usersData);
        if ("username" in this.state.usersData) {
            this.setState({
                name: this.state.usersData.name,
                username: this.state.usersData.username,
                email: this.state.usersData.email,
                address: { city: this.state.usersData.address.city },
                company: { name: this.state.usersData.company.name }
            })
            this.reset();
        }

        // const { name, username, email, address:{city}, company:{name} } = this.state
        let {
            isLoaded,
        } = this.state
        console.log(!isLoaded)
        if (!isLoaded) {
            console.log(!isLoaded)
            return <div className="loader">Loading...</div>
        } else {


            return (
                <>
                    <div className="container">
                        <h3>Aplikasi Pengolahan Data User API</h3>
                        <hr />
                        <Form1 className="form">
                            <Form1.Group controlId="formBasicEmail">
                                <Form1.Label>Name</Form1.Label>
                                <Form1.Control type="text" name="name" value={this.state.name} onChange={this.setValue} placeholder="Enter name..." />
                            </Form1.Group>
                            <Form1.Group controlId="formBasicEmail">
                                <Form1.Label>Username</Form1.Label>
                                <Form1.Control type="text" name="username" value={this.state.username} onChange={this.setValue} placeholder="Enter username..." />
                            </Form1.Group>
                            <Form1.Group controlId="formBasicEmail">
                                <Form1.Label>Email</Form1.Label>
                                <Form1.Control type="email" name="email" value={this.state.email} onChange={this.setValue} placeholder="Enter email..." />
                            </Form1.Group>
                            <Form1.Group controlId="formBasicEmail">
                                <Form1.Label>Address</Form1.Label>
                                <Form1.Control type="text" name="address" value={this.state.address.city} onChange={this.setValue} placeholder="Enter address..." />
                            </Form1.Group>
                            <Form1.Group controlId="formBasicEmail">
                                <Form1.Label>Company name</Form1.Label>
                                <Form1.Control type="text" name="company" value={this.state.company.name} onChange={this.setValue} placeholder="Enter company name..." />
                            </Form1.Group>
                            <Button variant="primary mt-3" onClick={() => this.simpan()}>
                                Submit
                        </Button>
                        </Form1>
                        <table className="table mt-3" border="1" >
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address City</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map((item, key) => (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address.city}</td>
                                            <td>{item.company.name}</td>
                                            <td>
                                                <Button variant="primary" onClick={() => { this.edit(item.id) }}>
                                                    Edit
                                            </Button>
                                                <Button variant="danger ml-3" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.hapus(item.id) } }}>
                                                    Delete
                                            </Button>
                                                <button type="button" class="btn btn-warning mt-3" onClick={() => { this.album(item.id) }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Show Album
                                            </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Album User</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    
                                        <table className="table mt-3" border="1" >
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID Users</th>
                                                    <th scope="col">ID Album</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Lihat Photo</th>
                                                </tr>
                                                {
                                                this.state.album.map((item, key) => (

                                                    <tr key={key}>
                                                        <td valign="top">{item.userId}</td>
                                                        <td valign="top">{item.id}</td>
                                                        <td valign="top">{item.title}</td>
                                                        <td valign="top">
                                                        <button type="button" class="btn btn-warning mt-3" onClick={() => { this.photo(item.id) }} data-bs-toggle="modal" data-bs-target="#exampleModalphoto">
                                                        Show Photo
                                                        </button>
                                                        </td>
                                                    </tr>

                                                ))
                                            }
                                            </thead>
                                        </table>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModalphoto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Photo Album</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <table className="table mt-3" border="1" >
                                        <thead>
                                            <tr>
                                                <td>No</td>
                                                <td>Id Album</td>
                                                <td>Title</td>
                                                <td>Photo</td>
                                                
                                            </tr>
                                            {
                                                this.state.photo.map((item, key) => (

                                                    <tr key={key}>
                                                        <td valign="top">{key + 1}</td>
                                                        <td valign="top">{item.albumId}</td>
                                                        <td valign="top">{item.title}</td>
                                                        <td valign="top"><img src={item.thumbnailUrl}></img></td>
                                                    </tr>

                                                ))
                                            }
                                        </thead>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Form;