import React, { Component } from 'react'
import {Redirect} from "react-router-dom"

import "../style.css"

class Merk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            merk: [],
            nama: ""
        }
    }

    setValue = el => {
        console.log(el.target.value);
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        if((this.props.statusLogin == false) || (this.props.aksesLogin == 2) || (this.props.aksesLogin == 0) ){
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
                <div className="form">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nama Merk</label>
                        <input type="text" class="form-control" name="nama" placeholder="Nama Merk Mobil" value={nama} onChange={this.setValue} />
                    </div>
                    <button onClick={() => this.props.save({ nama })} class="btn btn-primary">Simpan</button>
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
                            this.props.merk.map(
                                (Item, idx) =>
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
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