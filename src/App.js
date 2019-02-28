import React, { Component } from 'react';
import './App.css';
import Crypto from './crypto.js';
import CryptoForm from './cryptoForm.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prices : [],
      tickerInput : "",
      symbols: []
    }
  }

  getPrices = () => {
    fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${this.state.ticker.toUpperCase()}&tsyms=USD`)
      .then(res => res.json())
      .then((result) => {
        let tickerHolder = this.state.ticker.toUpperCase().split(",");
        let priceHolder = [];
        for (let i = 0; i < tickerHolder.length; i++) {
          priceHolder.push(result[tickerHolder[i]].USD)
          //js bracket notation
        }
        this.setState({
          prices : priceHolder,
          symbols : tickerHolder
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
          <button onClick={this.getPrices}>Get Prices</button>
          <Crypto currency = {this.state.prices} tickerSymbols = {this.state.symbols} />
        </header>
      </div>
    );
  }
}

export default App;
