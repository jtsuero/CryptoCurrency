import React, { Component } from 'react';
import './App.css';
import Crypto from './crypto.js';
import CryptoForm from './cryptoForm.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items : "",
      ticker : ""
    }
  }

  getInfo = () => {
    let crypto= "BTC";
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${this.state.ticker.toUpperCase()}&tsyms=USD`)
      .then(res => res.json())
      .then((result) => {
        console.log(result.USD)
        console.log(result)
          this.setState({
            items : result.USD
          });
        }
      )
  }

  getTicker = (event) => {
    this.setState({ticker: event.target.value});
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <input type="text" onChange={(e) => this.getTicker(e)} />
      <button onClick={this.getInfo}>Get Prices</button>
      <Crypto currency = {this.state.items} />
      </header>
      </div>
    );
  }
}

export default App;
