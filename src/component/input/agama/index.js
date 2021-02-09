import React, { Component } from 'react'

class Agama extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { name, onChange}= this.props
        return ( 
            <>
            <div className="field">
                <label className="label" for="name">Agama</label>
                <select name="agama" className="inputAgama" id="agama" name={name} onChange={onChange}>
                    <option selected disabled value="0">--Pilih Agama--</option>
                    <option value="Islam">Islam</option>
                    <option value="Kristen">Kristen</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Protestan">Protestan</option>
                </select>
            </div>
            </>
         );
    }
}
 
export default Agama;