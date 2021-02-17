import React, { Component } from 'react'
import {Form, Home} from '../../page'
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            buah : []
         }
    }
    validasiAll = (buah) => {
        const{namaBuah, stokBuah, hargaBuah} = buah
        if (namaBuah.length > 0) {
            if (stokBuah.length > 0) {
                if (hargaBuah.length > 0) {
                    if (hargaBuah < 0) {
                        alert("Harga Buah Tidak Boleh Minus !")
                    } else {
                        //berhasil
                        if (stokBuah< 0) {
                            alert("Stok Buah Tidak Boleh Minus  !")
                        } else {
                            this.simpan({namaBuah,stokBuah,hargaBuah});
                        }
                    }
                } else {
                    alert("Harga Buah Harus Di Isi")
                }
            } else {
                alert("stok Buah Harus Di Isi")
                //stok kosong
            }
        } else {
            alert("Nama Harus Di Isi")
        }
    }

    clear =()=>{
        this.props.clear()
    }

    simpan = (buah) =>{
        const{namaBuah, stokBuah, hargaBuah} = buah

        var cariBuah = this.state.buah.findIndex(function (data1) {
            return data1.namaBuah === namaBuah;
        });
        console.log(cariBuah);
        if (!cariBuah) {
            alert("Masukan Buah Yang Berbeda !")
        } else {
        console.log("nberhas")
        let newBuah = this.state.buah

        newBuah.push({
            namaBuah,
            stokBuah,
            hargaBuah
        })
        this.setState({
            buah : newBuah
        })
        console.log(buah)
        alert("Data Berhasil Di Simpan !")
    }
    }
    render() { 
        return ( 
            <>
            <Form
            simpanBuah = {this.validasiAll}
            buah = {this.state.buah}
            />
            <Home/>
            </>
         );
    }
}
 
export default Body;