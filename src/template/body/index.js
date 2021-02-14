import React, { Component } from 'react'
import { Switch, Route , Redirect} from "react-router-dom";

import { Home, Merk, Type, Penjualan, Laporan, Login } from "../../page"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            merk: [],
            merkData: {},
            type: [],
            typeData: {},
            penjualan: [],
            penjualanData: {},
            act: 0,
            index: "",
            statusLogin: false,
            akses : 0,
            namaMerk : ""
        }
    }

    doLogin = (email, password, akses) =>{
        
        if((email == "amal@gmail.com") && (password == "12345") && (akses == 1)){
           
            this.setState({
                statusLogin : true,
                akses : akses
            })
            localStorage.setItem("LoginStatus", this.state.statusLogin);
            localStorage.setItem("LoginAkses", this.state.akses);
            alert("Selamat Anda Berhasil Login Sales !");
        }else if((email == "ikhlasul@gmail.com") && (password == "12345") && (akses ==2)){
            this.setState({
                statusLogin: true,
                akses :akses
            })
            // this.props.changeLogin();
            alert("Selamat Anda Berhasil Login Sebagai Pimpinan !");
            return <Redirect to="/laporan"/>
        }else{
            alert("Data Masukan Salah !")
        }
    }
    keluar = () => {
        this.setState({
            statusLogin: false,
            akses :0
        })
        alert("Anda Berhasil Keluar !")
        return <Redirect to="/login"/>
    }

    //crud merk
    save = merk => {
        const { nama } = merk

        let newMerk = this.state.merk

        if (this.state.act == 0) {
            if (nama !== "") {
                newMerk.push({
                    nama
                })
                this.setState({
                    merk: newMerk
                })
                console.log(newMerk);
                alert("Data Berhasil Di Simpan !")
            } else {
                alert("Nama Harus Di Isi !");
            }
        } else {
            let i = this.state.index;
            newMerk[i].nama = nama;

            this.setState({
                merk: newMerk,
                act: 0
            })

            alert("Data Berhasil Di Update !")
        }
    }
    hapusData = (idx) => {
        let newMerk = this.state.merk;
        newMerk.splice(idx, 1);
        this.setState({
            merk: newMerk
        });
        console.log(this.state.merk)
        alert("Berhasil Menghapus Data !!");
    }
    editData = (idx) => {

        let newMerk = this.state.merk[idx];

        this.setState({
            merkData: newMerk,
            act: 1,
            index: idx
        })

        console.log("index : ", idx);

    }
    reset = () => {
        this.setState({
            merkData: {}
        })
    }

    //crud type
    saveType = type => {
        const { namaType } = type

        let newType = this.state.type

        if (this.state.act == 0) {
            if (namaType !== "") {
                newType.push({
                    namaType
                })
                this.setState({
                    type: newType
                })
                console.log(newType);
                alert("Data Berhasil Di Simpan !")
            } else {
                alert("Nama Harus Di Isi !");
            }
        } else {
            let i = this.state.index;
            newType[i].namaType = namaType;

            this.setState({
                type: newType,
                act: 0
            })

            alert("Data Berhasil Di Update !")
        }
    }
    hapusDataType = (idx) => {
        let newType = this.state.type;
        newType.splice(idx, 1);
        this.setState({
            type: newType
        });
        console.log(this.state.type)
        alert("Berhasil Menghapus Data !!");
    }
    editDataType = (idx) => {

        let newType = this.state.type[idx];

        this.setState({
            typeData: newType,
            act: 1,
            index: idx
        })

        console.log("index : ", idx);

    }
    resetType = () => {
        this.setState({
            typeData: {}
        })
    }

    //crud penjualan
    savePenjualan = penjualan => {
        const { namaMobil, namaMerk, namaType, harga, tanggal } = penjualan

        let newPenjualan = this.state.penjualan

        if (this.state.act == 0) {
            if (namaMobil !== "") {
                if(namaMerk !== ""){
                    if(namaType !== ""){
                        if(harga !== ""){
                            if(tanggal !== ""){

                                newPenjualan.push({
                                    namaMobil, namaMerk, namaType, harga, tanggal
                                })
                                this.setState({
                                    penjualan: newPenjualan
                                })
                                console.log(newPenjualan);
                                alert("Data Berhasil Di Simpan !")

                            }else{
                                //tanggal kosong
                                alert("Tanggal Harus Di Isi !")
                            }
                        }else{
                            //harga kosong
                            alert("Harga Harus Di Isi !")
                        }
                    }else{
                        //type kosong
                        alert("Type Harus Di Isi !")
                    }
                }else{
                    //merk kosong
                    alert("Merk Harus Di Isi !")
                }
            } else {
                alert("Nama Harus Di Isi !");
            }
        } else {
            let i = this.state.index;
            newPenjualan[i].namaMobil = namaMobil;
            newPenjualan[i].namaMerk = namaMerk;
            newPenjualan[i].namaType = namaType;
            newPenjualan[i].harga = harga;
            newPenjualan[i].tanggal = tanggal;

            this.setState({
                penjualan: newPenjualan,
                act: 0
            })

            alert("Data Berhasil Di Update !")
        }
    }
    hapusDataPenjualan = (idx) => {
        let newPenjualan = this.state.penjualan;
        newPenjualan.splice(idx, 1);
        this.setState({
            penjualan: newPenjualan
        });
        console.log(this.state.penjualan)
        alert("Berhasil Menghapus Data !!");
    }
    editDataPenjualan = (idx) => {

        let newPenjualan = this.state.penjualan[idx];

        this.setState({
            penjualanData: newPenjualan,
            act: 1,
            index: idx
        })
        alert("Silahkan Data Di Edit !")
    }
    resetPenjualan = () => {
        this.setState({
            penjualanData: {}
        })
    }
    
    
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/merk">
                    <Merk 
                    save={this.save} 
                    hapus={this.hapusData} 
                    edit={this.editData} 
                    editData={this.state.merkData} 
                    merk={this.state.merk}
                    reset={this.reset} 
                    statusLogin ={this.state.statusLogin}
                    aksesLogin = {this.state.akses}
                    keluar = {this.keluar}
                    />
                </Route>
                <Route path="/type">
                    <Type 
                    saveType={this.saveType} 
                    hapusType={this.hapusDataType} 
                    editType={this.editDataType} 
                    editDataType={this.state.typeData} 
                    type={this.state.type} 
                    resetType={this.resetType}
                    statusLogin ={this.state.statusLogin}
                    aksesLogin = {this.state.akses}
                    keluar = {this.keluar}
                    />
                </Route>
                <Route path="/penjualan">
                    <Penjualan 
                    merk={this.state.merk} 
                    type={this.state.type}
                    savePenjualan={this.savePenjualan} 
                    hapusPenjualan={this.hapusDataPenjualan} 
                    editPenjualan={this.editDataPenjualan}
                    editDataPenjualan={this.state.penjualanData}
                    penjualan = {this.state.penjualan}
                    resetPenjualan={this.resetPenjualan}
                    statusLogin={this.state.statusLogin}
                    aksesLogin = {this.state.akses}
                    keluar = {this.keluar}
                    />
                </Route>
                <Route path="/laporan">
                    <Laporan 
                    penjualan = {this.state.penjualan}
                    statusLogin ={this.state.statusLogin}
                    aksesLogin = {this.state.akses}
                    keluar = {this.keluar}
                    />
                </Route>
                <Route path="/login">
                    <Login 
                     statusLogin={this.state.statusLogin}
                     aksesLogin = {this.state.akses}
                     doLogin ={this.doLogin}
                    />
                </Route>
            </Switch>
        );
    }
}

export default Body;