import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import {Header, Navigation, Body, Footer} from "./template"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage : "login"
     }
  }

  goToPage = page =>{
    this.setState({
      currentPage:page
    })
  }
  render() { 
    return ( 
      <Router>
        <Header/>
        <Navigation page={this.state.currentPage} changePage ={this.goToPage}/>
        <Body page={this.state.currentPage}/>
        <Footer/>
      </Router>
     );
  }
}
 
export default App;
