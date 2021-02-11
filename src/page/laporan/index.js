import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import "../style.css";

class Laporan extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    print =() =>{
        window.print()
    }

    render() { 
        console.log("status awal ",this.props.statusLogin)
        console.log("akses awal ",this.props.aksesLogin)
        if((this.props.statusLogin == false) || (this.props.aksesLogin == 1) || (this.props.aksesLogin == 0) ){
            alert("Anda Belum Login Sebagai Pimpinan !")
            return <Redirect to="/login"/>
        }
        return ( 
            <>
            <hr/>
            <button className="keluar" onClick={this.props.keluar}>Keluar</button>
            <div className="form">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Pencarian Data Penjualan Mobil</label>
                        <input type="date" class="form-control" name="nama" placeholder="Nama Merk Mobil" onChange={this.setValue} />
                    </div>
                    <button class="btn btn-danger" onClick={this.print}>Cetak Data</button>
                </div>
                
           <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama Mobil</th>
                            <th scope="col">Merk Mobil</th>
                            <th scope="col">Type Mobil</th>
                            <th scope="col">Harga Mobil</th>
                            <th scope="col">Tanggal Penjualan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.penjualan.map(
                                (Item, idx) =>
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{Item.namaMobil}</td>
                                        <td>{Item.namaMerk}</td>
                                        <td>{Item.namaType}</td>
                                        <td>{Item.harga}</td>
                                        <td>{Item.tanggal}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </>
         );
    }
}
 
export default Laporan;