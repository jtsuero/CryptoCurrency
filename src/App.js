import React, {Component} from 'react';
import './App.css';
import Crypto from './crypto.js';
import CryptoForm from './cryptoForm.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prices: [],
      symbols: [],
      tickerInput: '',
      initialCrypto: 'btc,eth',
    };
  }

  componentDidMount() {
    this.getPrices(this.state.initialCrypto);
  }

  getPrices = tickers => {
    fetch(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers}&tsyms=USD`,
    )
      .then(res => res.json())
      .then(result => {
        let tickerHolder = tickers.toUpperCase().split(',');
        let priceHolder = [];
        for (let i = 0; i < tickerHolder.length; i++) {
          priceHolder.push(result[tickerHolder[i]].USD);
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
          <Crypto
            currency={this.state.prices}
            tickerSymbols={this.state.symbols}
          />
          <input
            type="text"
            onChange={e => this.getTicker(e)}
            className="input-box"
          />
          <button onClick={() => this.getPrices(this.state.tickerInput)}>
            Get Prices
          </button>
        </div>
      </div>
    );
  }
}

export default App;
