import React, { Component } from 'react'

import "../css/style.css";

import Hobi from "../../component/input/hobi";
import Agama from "../../component/input/agama";
import Alamat from "../../component/input/alamat";
import Pencarian from "../../component/input/pencarian";
import Jenis from "../../component/input/jenisKelamin";
import Nama from "../../component/input/nama";
import Th from "../../component/th";
import Tabel from "../table";
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list : [],
            nama : "",
            tempat : "",
            ttl : "",
            umur : "",
            jenisKelamin : "",
            hobi : [],
            agama : "",
            alamat : "",
         }
    }

    setValue = el =>{
        console.log(el.target.value);
        this.setState({
            [el.target.name] : el.target.value
        })
    }

    handleCheckboxChange = event => {
        let newArray = [...this.state.hobi, event.target.value];
        if (this.state.hobi.includes(event.target.value)) {
          newArray = newArray.filter(day => day !== event.target.value);
        } 
        this.setState({
          hobi: newArray
        });
      };
    render() { 
        const { nama, tempat, ttl, umur, jenisKelamin, hobi, agama, alamat}=this.state
        return ( 
            <>
            <div className="form" >
            <Nama className="inputNama" label="Nama" type="text" name="nama" placeholder="Masukan Nama" onChange={this.setValue}/>
            <Nama className="inputTempat" label="Tempat" type="text" name="tempat" placeholder="Masukan Tempat" onChange={this.setValue}/>
			<Nama className="inputUmur" label="Tanggal Lahir" type="date" onfocus="(this.type='date')" name="ttl" placeholder="Masukan Tanggal" onChange={this.setValue}/>
            <Jenis name="jenisKelamin" onChange={this.setValue}/>
            <Hobi name="hobi" onChange={ this.handleCheckboxChange} />
            <Agama name="agama" onChange={this.setValue}/>
            <Alamat name="alamat" onChange={this.setValue}/>
            <button className="button" id="button" onClick={() => this.props.save({ nama, tempat, ttl, umur, jenisKelamin, hobi, agama, alamat})}>Kirim</button>
            </div>
            <Pencarian/>
            </>
         );
    }
}
 
export default Form;