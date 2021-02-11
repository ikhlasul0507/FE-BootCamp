import React, { Component } from 'react';
import { Link} from "react-router-dom"

import { Menu } from "../../component"

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log("nav:", this.props.page);
        const { changePage } = this.props

        return ( 
            <>
            <div>
                <Link to="/">
                    <Menu redirect={() => changePage("home")}>Home</Menu>
                </Link>
                <Link to="/penjualan">
                    <Menu redirect={() => changePage("penjualan")}>Penjualan</Menu>
                </Link>
                <Link to="/merk">
                    <Menu redirect={() => changePage("merk")}>Merk</Menu>
                </Link>
                <Link to="/type">
                    <Menu redirect={() => changePage("type")}>Type</Menu>
                </Link>
                <Link to="/laporan">
                    <Menu redirect={() => changePage("laporan")}>Laporan</Menu>
                </Link>
                <Link to="/login">
                    <Menu redirect={() => changePage("login")}>Login</Menu>
                </Link>
            </div>
            </>
         );
    }
}
 
export default Navigation;