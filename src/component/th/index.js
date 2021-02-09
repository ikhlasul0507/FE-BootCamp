import React, { Component } from 'react'


class Th extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            th : "th"
         }
    }
    render() { 
        return ( 
            <>
             <th className="tNumber">No</th>
                <th className="tText th">Nama</th>
                <th className="tText th">Tempat Tanggal lahir</th> 
                <th className="tNumber th">Umur</th>
                <th className="tNumber th">Agama</th>
                <th className="tNumber th">Jenis Kelamin</th>
                <th className="tNumber th">Hobi</th>
                <th className="tText th">Alamat</th>
                <th className="tText th">Aksi</th>
            </>
         );
    }
}
 
export default Th;