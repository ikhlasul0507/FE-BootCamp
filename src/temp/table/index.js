import React, { Component } from 'react'

import "../css/style.css";
import Th from '../../component/th';
import Form from '../form';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listData : {}
         }
    }
    
    
   

    render() { 
        return ( 
            
            <>
            
            <div className="table-container">
            <table cellpadding="5" cellspacing="0" border="1" className="table">
                <Th/>
                <tbody id="bodyTable">   
                { 
                this.props.list.map(
                    (Item, idx) => 
                    <tr key={idx}>
                        <td>{idx+1}</td>
                        <td>{Item.nama}</td>
                        <td>{Item.tempat},{Item.ttl}</td>
                        <td>{Item.umur}</td>
                        <td>{Item.agama}</td>
                        <td>{Item.jenisKelamin}</td>
                        <td>{Item.hobi}</td>
                        <td>{Item.alamat}</td>
                        <td>
                            <button onClick={() =>this.props.edit(idx)}>Edit</button>
                            <button onClick={() => this.props.hapus(idx)} >Hapus</button>
                        </td>
                    </tr>
                )
                }
                
                </tbody>
            </table>
            </div>
            
            </>
         );
    }
}
 
export default Table;