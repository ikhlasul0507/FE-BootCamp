import React, { Component } from 'react'
import "./style.css"
import Button from "../../component/button"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasil : "",
            nilai1: [],
            nilai1join: "",
            nilai2: [],
            nilai2join: "",
            operator1: "",
            datahitung: [],
            combine: true,
            lanjut: false,
            value:0,
            history : ""
        }
    }

    nilai = (param) => {
        if (this.state.combine) {
            this.state.nilai1.push(param);
            this.state.nilai1join = this.state.nilai1.join('');
            // data.value = nilai1join;
            this.setState({
                value: this.state.nilai1join,
                history: this.state.nilai1join
            })
            console.log("Nilai 1 Join :", this.state.nilai1join);
            this.state.datahitung.push(this.state.nilai1join);
        } else {
            this.state.nilai2.push(param);
            this.state.nilai2join = this.state.nilai2.join('');
            // data.value = nilai2join;
            this.setState({
                value : this.state.nilai2join
            })
            console.log("Nilai 2 Join :", this.state.nilai2join);
            this.state.lanjut = false;
            this.state.datahitung.push(this.state.nilai2join)
        }
    }
    operator = (param) => {
        if (this.state.lanjut) { 
            this.state.operator1 = param;
            this.state.combine = false
            console.log("state operator : ",this.state.operator1)
            this.state.datahitung.push(this.state.operator1)
            // history.innerHTML = nilai1join +""+ operator1 +""+ nilai2join;
        } else {
            // hasil();
            console.log("lanjut")
            this.state.operator1 = param;
            this.state.combine = false
            this.state.datahitung.push(this.state.operator1)
            // history.innerHTML = nilai1join +""+ operator1 +""+ nilai2join;
            console.log(this.state.datahitung)
        }
    }

    hasil = () => {
        let hasil;
        console.log(parseFloat(this.state.nilai1join))
        console.log(parseFloat(this.state.nilai2join))
        switch (this.state.operator1) {
            case '+':
                hasil = parseFloat(this.state.nilai1join) + parseFloat(this.state.nilai2join)
                break;
                console.log(hasil)
            case '-':
                hasil = parseFloat(this.state.nilai1join) - parseFloat(this.state.nilai2join)
                break;
            case '*':
                hasil = parseFloat(this.state.nilai1join) * parseFloat(this.state.nilai2join)
                break;
            case '/':
                hasil = parseFloat(this.state.nilai1join) / parseFloat(this.state.nilai2join)
                break;
        }
        this.state.combine = true;

        this.setState({
            hasil: "="+hasil,
            value: hasil,
            lanjut: true,
            
        })
        // data.value = hasil
        // history.innerHTML = nilai1join + "" + operator1 + "" + nilai2join + "=" + hasil;
        console.log(this.state.hasil)
    }
    kosong =()=>{
        this.setState({
            hasil : "",
            nilai1: [],
            nilai1join: "",
            nilai2: [],
            nilai2join: "",
            operator1: "",
            datahitung: [],
            combine: true,
            lanjut: false,
            value:0,
            history : "",
        })
    }
    render() {
        return (
            <>
                hello world !
                <h1>Kalkulator Ajaib</h1>
                <div>
                    <div className="input">
                        <small id="history">{this.state.nilai1join}{this.state.operator1}{this.state.nilai2join}{this.state.hasil}</small><br />
                        <input type="text" id='data' onChange={()=>{}} value={this.state.value} /><br />
                    </div>

                    <Button onclick={() => this.nilai('7')} className="angka">7</Button>
                    <Button onclick={() => this.nilai('8')} className="angka">8</Button>
                    <Button onclick={() => this.nilai('9')} className="angka">9</Button>
                    <Button onclick={() => this.operator('/')}  className="angka">/</Button>
                    <br />
                    <Button onclick={() => this.nilai('4')} className="angka">4</Button>
                    <Button onclick={() => this.nilai('5')} className="angka">5</Button>
                    <Button onclick={() => this.nilai('6')} className="angka">6</Button>
                    <Button onclick={() => this.operator('*')} className="angka">x</Button>
                    <br />
                    <Button onclick={() => this.nilai('1')}className="angka">1</Button>
                    <Button onclick={() => this.nilai('2')}className="angka">2</Button>
                    <Button onclick={() => this.nilai('3')} className="angka">3</Button>
                    <Button onclick={() => this.operator('-')}  className="angka">-</Button>
                    <br />
                    <Button onclick={() => this.nilai('0')}className="angka">0</Button>
                    <Button onclick={() => this.nilai('.')}className="angka">.</Button>
                    <Button onclick={() => this.kosong()} className="angka">C</Button>
                    <Button onclick={() => this.operator('+')}  className="angka">+</Button>
                    <br />
                    <Button onclick={() => this.hasil()}  className="hasil">=</Button>
                </div>
            </>
        );
    }
}

export default Header;