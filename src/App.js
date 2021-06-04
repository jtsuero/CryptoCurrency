import React, {Component} from 'react';
import './App.css';
import Crypto from './crypto.js';
import CryptoForm from './cryptoForm.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prices: [],
      tickerInput: '',
      symbols: [],
    };
  }

  getPrices = () => {
    fetch(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${this.state.tickerInput.toUpperCase()}&tsyms=USD`,
    )
      .then(res => res.json())
      .then(result => {
        let tickerHolder = this.state.tickerInput.toUpperCase().split(',');
        let priceHolder = [];
        for (let i = 0; i < tickerHolder.length; i++) {
          priceHolder.push(result[tickerHolder[i]].USD);
          //js bracket notation
        }
        this.setState({
          prices: priceHolder,
          symbols: tickerHolder,
        });
      });
  };

  getTicker = event => {
    this.setState({tickerInput: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <div className="app-logo">cryptocheck</div>
          <input
            type="text"
            onChange={e => this.getTicker(e)}
            className="input-box"
          />
          <button onClick={this.getPrices}>Get Prices</button>
          <Crypto
            currency={this.state.prices}
            tickerSymbols={this.state.symbols}
          />
        </div>
      </div>
    );
  }
}

export default App;
