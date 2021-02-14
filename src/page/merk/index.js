import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import axios from 'axios';
import uuid from 'react-uuid';
import { Button } from 'react-bootstrap';
import "../style.css"

class Merk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            merk: [],
            id : "",
            nama: "",
            isUpdate : false
        }
    }

    componentDidMount(){
       this.ambilApi()
    }

    ambilApi =()=>{
        axios.get('http://localhost:8080/sales/merkGetAll/?_sort=namaMerk&_order=asc')
        .then((res)=>{
            console.log("data",res.data)
            this.setState({
                merk : res.data
            })
        })
    }

    hapusApi=(id)=>{
        console.log(id)
        console.log(`http://localhost:8080/sales/merkGetId/${id}`)
        axios.delete(`http://localhost:8080/sales/merkGetId/${id}`)
        
        .then((res)=>{
            alert("Berhasil Di Hapus !")
            this.ambilApi();
        })
    }
    editApi =(data)=>{
        console.log(data.idMerk);
        this.setState({
            id : data.idMerk,
            nama : data.namaMerk,
            isUpdate : true
        })

        console.log("id state",this.state.id)
        
    }
    editToApi =()=>{
        console.log("id state",this.state.id)
        console.log("nama state", this.state.nama)
        axios.put(`http://localhost:8080/sales/merkUpdate/${this.state.id}`,{
            idMerk : this.state.id,
            namaMerk : this.state.nama,
        })
        .then((res)=>{
            this.setState({
                isUpdate: false
            })
            console.log("update ",this.state.isUpdate)
            this.ambilApi();
        })
        
    }
    saveApi =()=>{
        if(this.state.isUpdate){
            alert("Data Berhasil Di Edit !")
            this.editToApi();
            this.clearForm();
        }else{
            this.saveToApi();
            alert("Berhasil Di Simpan !")
            this.clearForm();
        }
        
    }

    saveToApi =()=>{
        axios.post('http://localhost:8080/sales/merk/',{
            idMerk : uuid(),
            namaMerk : this.state.nama 
        })
        .then((res)=>{
            console.log(res)
            this.ambilApi();
        })
    }
    clearForm =()=>{
        this.setState({
            id :"",
            nama : ""
        })
    }
    setValue = el => {
        console.log(el.target.value);
        this.setState({
            [el.target.name]: el.target.value,
        })
    }

    keluar =() =>{
        localStorage.setItem('LoginStatus', false);
        localStorage.setItem('LoginAkses', 0);

        alert("Anda Berhasil Keluar !");
    }
    render() {
        let loginStatus = localStorage.getItem('LoginStatus');
        let loginAkses = localStorage.getItem('LoginAkses');
        console.log("login status",loginStatus);
        console.log("login akses",loginAkses);
        
        if((loginStatus == false) || (loginAkses == 2) || (loginAkses == 0)){
            alert("Anda Belum Login Sebagai Sales !")
            return <Redirect to="/login"/>
        }
        console.log(this.props.editData)
        if("nama" in this.props.editData){
            this.setState({
                nama : this.props.editData.nama
            })
        this.props.reset();
        }
        const { nama } = this.state
        return (
            <>
                <hr />
                <button className="keluar" onClick={this.props.keluar}>Keluar</button>
                <button className="keluar" onClick={this.keluar}>Keluar LS</button>
                <div className="form">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nama Merk</label>
                        <input type="text" class="form-control" name="nama" placeholder="Nama Merk Mobil" value={nama} onChange={this.setValue} />
                    </div>
                    <button onClick={() => this.props.save({ nama })} class="btn btn-primary">Simpan</button>
                    <button onClick={this.saveApi} class="btn btn-primary">Simpan Api</button>
                    <Button variant="danger">Button From React B</Button>{' '}
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama Merk</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.merk.map(
                                (Item, idx) =>
                                    <tr key={idx}>
                                        <td>{Item.idMerk}</td>
                                        <td>{Item.namaMerk}</td>
                                        <td>
                                            <button onClick={() => this.props.edit(idx)}>Edit</button>
                                            <button onClick={() => this.editApi(Item)}>Edit Api</button>
                                            <button onClick={() => this.props.hapus(idx)} >Hapus</button>
                                            <button onClick={() => this.hapusApi(Item.idMerk)} >Hapus Api</button>
                                        </td>
                                    </tr>
                            )
                        }
                        {
                            this.props.merk.map(
                                (Item, idx) =>
                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td>{Item.nama}</td>
                                        <td>
                                            <button onClick={() => this.props.edit(idx)}>Edit</button>
                                            <button onClick={() => this.props.hapus(idx)} >Hapus</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </>
        );
    }
}

export default Merk;