import React, { Component } from 'react'

import Form from "../form";
import Table from "../table";
import Pagination from "../pagination";
import "../css/style.css";
// import Js from "../../component/lib";
// import "./control";
class Header extends Component {
    state = {
        judul: "SIMULASI INPUT DATA DENGAN JAVASCRIPT",
        list: [],
        listData: {},
        act: 0,
        index: ""

    }

    hitungUmur = (value) => {
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
    hapusData = (idx) => {
        let newList = this.state.list;
        newList.splice(idx, 1);
        this.setState({
            list: newList
        });
        console.log(this.state.list)
        alert("Berhasil Menghapus Data !!");
    }

    editData = (idx) => {

        let newList = this.state.list[idx];

        this.setState({
            listData: newList,
            act: 1,
            index: idx
        })

        console.log("index : ", idx);

    }

    reset = () => {
        this.setState({
            listData: {}
        })
    }


    save = user => {
        const { nama, tempat, ttl,umur, jenisKelamin, hobi, agama, alamat } = user
        console.log(hobi)

        //inisialisasi to array list of state
        let newList = this.state.list

        if(this.state.act === 0){
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

                                        this.resetForm();
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
        }else{
            let i = this.state.index;
            newList[i].nama = nama;
            newList[i].tempat = tempat;
            newList[i].jenisKelamin = jenisKelamin;
            newList[i].umur = umur;
            newList[i].hobi = hobi;
            newList[i].agama = agama;
            newList[i].alamat = alamat;

            this.setState({
                list : newList,
                act: 0
            })

            alert("Data Berhasil Di Update !")
        }
       

    }

    render() {
        return (
            <>
                <body className="body">
                    <div className="container">
                        <h2>{this.state.judul}</h2>
                        <hr></hr>
                        <Form save={this.save} editData={this.state.listData} reset={this.reset} />
                        <Table list={this.state.list} hapus={this.hapusData} edit={this.editData} ></Table>
                        <Pagination />
                    </div>
                </body>
            </>
        );
    }
}

export default Header;