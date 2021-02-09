import React, { Component } from 'react'

class Hobi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { hobi, onChange}= this.props
        return (
            <>
             <div className="field">
                <label className="label" for="umur">Hobi</label>
                <input className="inputHobi" type="checkbox" id="hobi" onChange={onChange}  name ={hobi} value="Berenang," /><p className="textJK">Berenang</p>
                <input className="inputHobi" type="checkbox" id="hobi" onChange={onChange}  name ={hobi} value="Jogging," /><p className="textJK">Jogging</p>
                <input className="inputHobi" type="checkbox" id="hobi" onChange={onChange}  name ={hobi} value="Bersepeda," /><p className="textJK">Bersepeda</p>
                <input className="inputHobi" type="checkbox" id="hobi" onChange={onChange}  name ={hobi} value="Futsal" /><p className="textJK" >Futsal</p>
            </div>
            </>
         );
    }
}
 
export default Hobi;