import React, { Component } from 'react'

class Pencarian extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="pencarian">
            <div className="field">
                <label className="label" for="name">Pencarian</label>
                <select className="cBer" id="selectPencarianData">
                    <option selected disabled value="">--Pilih--</option>
                    <option value="nama">Nama</option>
                    <option value="alamat">Alamat</option>
                    <option value="hobby">Hobby</option>
                </select>
                <input className="inputCari" type="text" id="pencarianData" placeholder="Masukan Nama, Alamat, Hobby..."></input>
            </div>
        </div>
          );
    }
}
 
export default Pencarian;