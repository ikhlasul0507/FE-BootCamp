import React, { Component } from 'react'


class Jenis extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {name, onChange} = this.props;
        return ( 
            <>
            <div className="field">
                <label className="label" for="umur">Jenis Kelamin</label>
                <input className="inputJK" type="radio" id="jenisKelamin" onChange={onChange}  name ={name} value="L" /><p className="textJK">Laki-laki</p>
                <input className="inputJK" type="radio" id="jenisKelamin" onChange={onChange}  name ={name} value="P" /><p className="textJK">Perempuan</p>
            </div>
            </>
         );
    }
}
 
export default Jenis;