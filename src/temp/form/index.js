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
            update:false
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

        if("nama" in this.props.editData){
            this.setState({
                nama : this.props.editData.nama,
                tempat : this.props.editData.tempat,
                ttl : this.props.editData.ttl,
                jenisKelamin : this.props.editData.jenisKelamin,
                hobi : this.props.editData.hobi,
                umur : this.props.editData.umur,
                agama : this.props.editData.agama,
                alamat : this.props.editData.alamat,

            })
            this.props.reset();
        }

        const { nama, tempat, ttl, umur, jenisKelamin, hobi, agama, alamat}=this.state
        console.log("Data Dari tabel : ",this.props.editData);
        return ( 
            
            <>
            <div className="form">
            <Nama className="inputNama" label="Nama" type="text" name="nama" value={nama} placeholder="Masukan Nama" onChange={this.setValue}/>
            <Nama className="inputTempat" label="Tempat" type="text" name="tempat" value={tempat} placeholder="Masukan Tempat" onChange={this.setValue}/>
			<Nama className="inputUmur" label="Tanggal Lahir" type="date" value={ttl} onfocus="(this.type='date')" name="ttl" placeholder="Masukan Tanggal" onChange={this.setValue}/>
            <Jenis name="jenisKelamin" value={jenisKelamin} onChange={this.setValue}/>
            <Hobi name="hobi" value={hobi} onChange={ this.handleCheckboxChange} />
            <Agama name="agama" value={agama} onChange={this.setValue}/>
            <Alamat name="alamat" value={alamat} onChange={this.setValue}/>
            <button className="button" id="button" onClick={() => this.props.save({ nama, tempat, ttl, umur, jenisKelamin, hobi, agama, alamat})}>Kirim</button>
            </div>
            <Pencarian/>
            </>
         );
    }
}
 
export default Form;