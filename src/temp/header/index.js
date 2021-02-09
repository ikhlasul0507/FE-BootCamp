import React, { Component } from 'react'

import Form from "../form";
import Table from "../table";
import Pagination from "../pagination";
import "../css/style.css";
// import Js from "../../component/lib";
// import "./control";
class Header extends Component {
    state = { 
       judul : "SIMULASI INPUT DATA DENGAN JAVASCRIPT",
       list : [],
       
     }

     hitungUmur =(value) =>{
        var today = new Date();
        var birthday = new Date(value);
        var year = 0;
        if (today.getMonth() < birthday.getMonth()) {
            year = 1;
        } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
            year = 1;
        }
        var age = today.getFullYear() - birthday.getFullYear() - year;
    
        if (age < 0) {
            age = 0;
        }
        return age;
     }

     save = user => {
       
        const { nama, tempat, ttl,jenisKelamin, hobi, agama, alamat}= user

        console.log(hobi)
        if(nama !== ""){
            if(tempat !== ""){
                if(ttl !== ""){
                    if(jenisKelamin !== ""){
                        if(hobi.length > 0){
                            if(agama !== ""){
                                if(alamat !== ""){
                                    //inisialisasi to array list of state
                                    let newList = this.state.list
                                    newList.push({
                                        nama,tempat,ttl,jenisKelamin,hobi,agama,alamat,umur:this.hitungUmur(ttl)
                                    })
                                    //save list to new list
                                    this.setState({
                                        list : newList
                                    })
                                    console.log(newList);
                                    alert("Data Berhasil Di Simpan !");
                                }else{
                                    alert("Masukan Alamat")
                                }
                            }else{
                                alert("Pilih Agama")
                            }
                        }else{
                            alert("Pilih Hobi")
                        }
                    }else{
                        alert("Pilih Jenis Kelamin")
                    }
                }else{
                    alert("Pilih Tanggal")
                }
            }else{
                alert("Masukan Tempat Lahir")
            }
        }else{
            alert("Masukan Nama")
        }
      }

    render() { 
        return ( 
            <>
            <body className="body">
	        <div className="container">
            <h2>{this.state.judul}</h2>
            <hr></hr>
            <Form save={this.save}/>
            <Table list={this.state.list}></Table>
            <Pagination/>
            </div>
            </body>
            </>
         );
    }
}
 
export default Header;