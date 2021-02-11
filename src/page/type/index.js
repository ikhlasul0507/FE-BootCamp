import React, { Component } from 'react'

class Type extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            type: [],
            namaType:""
         }
    }
    setValue = el => {
        console.log(el.target.value);
        this.setState({
            [el.target.name]: el.target.value
        })
    }
    render() { 
        if("namaType" in this.props.editDataType){
            this.setState({
                namaType : this.props.editDataType.namaType
            })
        this.props.resetType();
        }
        const { namaType } = this.state

        return ( 
            <>
             <hr />
                <div className="form">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nama Type</label>
                        <input type="text" class="form-control" name="namaType" placeholder="Nama Type Mobil" value={namaType} onChange={this.setValue} />
                    </div>
                    <button onClick={() => this.props.saveType({ namaType })} class="btn btn-primary">Simpan</button>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama Type</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.type.map(
                                (Item, idx) =>
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{Item.namaType}</td>
                                        <td>
                                            <button onClick={() => this.props.editType(idx)}>Edit</button>
                                            <button onClick={() => this.props.hapusType(idx)} >Hapus</button>
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
 
export default Type;