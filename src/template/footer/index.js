import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div class="card">
                <div class="card-header">
                    Copyright@IkhlasulAmal
                </div>
                <div class="card-body" style={{backgroundColor: "darkcyan"}}>
                    <h5 class="card-title text-light">Ujian React Js</h5>
                </div>
                </div>
            </>
         );
    }
}
 
export default Footer;