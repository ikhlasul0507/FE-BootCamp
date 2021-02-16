
import './App.css';
import React, { Component } from 'react'
import Test from "./modules";

import Button from "./component/button";
import {Header} from "./temp"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no: 0
    }
  }

  
  onClick = (param) => {
    console.log("Operator", param)
    switch (param) {
      case "+":
        console.log("Plus")
        this.setState({
          no : this.state.no + 1
        })
        break;
      case "-":
        console.log("Minus")
        this.setState({
          no : this.state.no - 1
        })
        break;
    }
  }
  render() {
    // let a = new Test();
    // a.doTest();
    return (

        <Header/>
      // <div className="App">
      //   <header className="App-header">
      //     <Button onClick={this.onClick("+")}>+</Button>
      //     {this.state.no}
      //     <Button onClick={this.onClick("-")}>-</Button>

      //     <input type="text" onChange={(el)=>this.setState({no:el.target.value})}/>
      //   </header>
      // </div>
    );
  }
}

export default App;
