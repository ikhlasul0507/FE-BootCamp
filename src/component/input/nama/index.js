import React, { Component } from 'react'

class Nama extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { className, label, type, name, onChange, placeholder } = this.props
        return ( 
            <>
            <div className="field">
				<label className="label" for="name">{label}</label>
				<input className={className} type={type} id="nama" name={name} onChange={onChange} placeholder={placeholder}/>
            </div>
            </>
         );
    }
}
 
export default Nama;