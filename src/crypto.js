import React, {Component} from 'react';

class Crypto extends Component {
  constructor(props) {
    super(props);
  }

  currencyFormatter = (price, symbol) => {
    let currencyHolder = [];
    for (let i = 0; i < price.length; i++) {
      currencyHolder.push(
        <div className="currency">
          <span>
            {' '}
            {symbol[i].toUpperCase()} ${price[i]}
          </span>
          <br />
        </div>,
      );
    }
    return currencyHolder;
  };

  render() {
    let currencyList = this.currencyFormatter(
      this.props.currency,
      this.props.tickerSymbols,
    );
    return <div className="currency-container">{currencyList}</div>;
  }
}

export default Crypto;
