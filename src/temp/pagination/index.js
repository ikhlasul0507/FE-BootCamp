import React, { Component } from 'react'

import "../css/style.css";
class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <center>
                <input type="button" className="pagi"  id="first" onclick="firstPage()" value="first" />
                <input type="button" className="pagi"  id="previous" onclick="previousPage()" value="<=" />
                <input type="button" className="pagi"  id="next" onclick="nextPage()" value="=>" />
                <input type="button" className="pagi"  id="last" onclick="lastPage()" value="last" />
                </center>
            </>
         );
    }
}
 
export default Pagination;