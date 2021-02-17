import React, { Component } from 'react'
import "../style.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namaBuah: "",
            stokBuah: "",
            hargaBuah: "",
            namaBuahBeli: "",
            stokBuahBeli: ""
        }
    }
    setValue = el => {
        console.log(el.target.value);
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    clear = ()=>{
        this.setState({
            namaBuah: "",
            stokBuah: "",
            hargaBuah: "",
            namaBuahBeli: "",
            stokBuahBeli: ""
        })
    }

    render() {
        const { namaBuah, stokBuah, hargaBuah, namaBuahBeli, stokBuahBeli } = this.state
        return (
            <>
                <div className="container">
                    <div className="judul"><p>Aplikasi Pengolahan Data Buah</p></div>
                    <div className="layout">
                        <div className="form">
                            <h4>Data Buah</h4><hr />
                            <div className="field">
                                <label for="">Nama Buah</label>
                                <input type="text" name="namaBuah" value={namaBuah} onChange={this.setValue} placeholder="Nama Buah ..." />
                            </div>
                            <div className="field">
                                <label for="">Stok Buah</label>
                                <input type="number" name="stokBuah" value={stokBuah} min="0" onChange={this.setValue} placeholder="Stok Buah ..." />
                            </div>
                            <div className="field">
                                <label for="">Harga Buah</label>
                                <input type="number" name="hargaBuah" value={hargaBuah} min="0" onChange={this.setValue} placeholder="Harga Buah ..." />
                            </div>
                            {/* <button onclick={this.simpanBuah()}>save</button> */}
                            <button onClick={() => this.props.simpanBuah({ namaBuah, stokBuah, hargaBuah })}>Simpan</button>
                        </div>
                        <div className="form">
                            <h4>Data Pembelian</h4><hr />
                            <div className="field">
                                <label for="">Nama Buah</label>
                                <select name="namaBuahBeli" value={namaBuahBeli} onChange={this.setValue}>
                                    <option value="0" disabled selected>--Pilih Nama Buah--</option>
                                </select>
                            </div>
                            <div className="field">
                                <label for="">Qty Buah</label>
                                <input type="number" name="stokBuahBeli" min="0" onChange={this.setValue} value={stokBuahBeli} placeholder="Stok Buah ..." />
                            </div>
                            <button id="button" >Beli</button>
                        </div>
                    </div>
                    <div className="table" >
                        <table border="1" cellpadding="5" cellspacing="0">
                            <thead>
                                <td>ID</td>
                                <td>Nama</td>
                                <td>Stok</td>
                                <td>Harga</td>
                                <td>Aksi</td>
                            </thead>
                            <tbody className="data" id="dataBuah">
                            {
                                this.props.buah.map(
                                    (Item, idx) =>
                                        <tr key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>{Item.namaBuah}</td>
                                            <td>{Item.stokBuah}</td>
                                            <td>{Item.hargaBuah}</td>
                                            <td>
                                                <button onClick={() => this.props.editBuah(idx)}>Edit</button>
                                                <button onClick={() => this.props.hapusBuah(idx)} >Hapus</button>
                                            </td>
                                        </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default Form;