import React, { Component } from 'react'

class Penjualan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            penjualan :[],
            namaMobil:"",
            namaMerk: "",
            namaType: "",
            harga: "",
            tanggal: ""
        }
    }
    setValue = el => {
        console.log(el.target.value);
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        console.log("edit",this.props.editDataPenjualan)
        if("namaMobil" in this.props.editDataPenjualan){
            this.setState({
                namaMobil : this.props.editDataPenjualan.namaMobil,
                namaMerk : this.props.editDataPenjualan.namaMerk,
                namaType : this.props.editDataPenjualan.namaType,
                harga : this.props.editDataPenjualan.harga,
                tanggal : this.props.editDataPenjualan.tanggal
            })
        this.props.resetPenjualan();
        }
        const { namaMobil, namaMerk, namaType, harga, tanggal } = this.state
        return (
            <>
                <hr />
                <div className="form">
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nama Mobil</label>
                        <input type="text" class="form-control" name="namaMobil" value={namaMobil} placeholder="Masukan Nama Mobil" onChange={this.setValue} />
                    </div>
                    <div class="mb-3">
                        <label for="disabledSelect" class="form-label">Pilih Merk Mobil</label>
                        <select class="form-control" aria-label="Default select example" name="namaMerk" value={namaMerk} onChange={this.setValue} >
                            <option selected>--Pilih Merk Mobil</option>
                            {
                                this.props.merk.map(
                                    (Item, idx) =>
                                    <option value={Item.nama}>{Item.nama}</option>
                                )
                            }
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="disabledSelect" class="form-label">Pilih Type Mobil</label>
                        <select class="form-control" aria-label="Default select example" name="namaType" value={namaType} onChange={this.setValue}>
                            <option selected>--Pilih Type Mobil</option>
                            {
                                this.props.type.map(
                                    (Item, idx) =>
                                    <option value={Item.namaType}>{Item.namaType}</option>
                                )
                            }
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Harga Mobil</label>
                        <input type="number" class="form-control" name="harga" value={harga} placeholder="Masukan Harga Mobil" onChange={this.setValue} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Tanggal Penjualan</label>
                        <input type="date" class="form-control" name="tanggal" value={tanggal} onChange={this.setValue} />
                    </div>
                    <button class="btn btn-primary" onClick={() => this.props.savePenjualan({ namaMobil, namaMerk, namaType, harga, tanggal })}>Simpan</button>
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
                            <th scope="col">Aksi</th>
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
                                        <td>
                                            <button onClick={() => this.props.editPenjualan(idx)}>Edit</button>
                                            <button onClick={() => this.props.hapusPenjualan(idx)} >Hapus</button>
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

export default Penjualan;
