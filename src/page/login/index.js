import React, { Component } from 'react'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            akses : ""
        }
    }
    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
        console.log(el.target.value)
    }
    render() {


        const { email, password, akses} = this.state;
        return (
            <>
                <hr />
                <div className="form">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Masukan Email</label>
                        <input type="text" class="form-control" name="email" placeholder="Masukan Email" onChange={this.setValue} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Masukan Password</label>
                        <input type="password" class="form-control" name="password" placeholder="Masukan Password" onChange={this.setValue} />
                    </div>
                    <div class="mb-3">
                        <label for="disabledSelect" class="form-label">Pilih Akses</label>
                        <select class="form-control" aria-label="Default select example" name="akses" onChange={this.setValue} >
                            <option selected>--Pilih Akses--</option>
                            <option value="1">Sales</option>
                            <option value="2">Pimpinan</option>
                        </select>
                    </div>
                    <button class="btn btn-primary" onClick={() => this.props.doLogin(email, password, akses)}>Masuk Aplikasi</button>
                </div>
            </>
        );
    }
}

export default Login;