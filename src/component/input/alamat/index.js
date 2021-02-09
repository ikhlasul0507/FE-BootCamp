import React, { Component } from 'react'

class Alamat extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {name, onChange}= this.props
        return ( 
            <>
            <div className="field">
                <label className="label" for="name">Alamat</label>
                <textarea name="alamat" id="alamat" name={name} onChange={onChange} cols="30" rows="10" placeholder="Masukan Alamat...."></textarea>
            </div>
            </>
         );
    }
}
 
export default Alamat;