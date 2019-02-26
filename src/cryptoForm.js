import React, {Component} from 'react';

class CryptoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoList: []
    }
  }

  makeList = (ticker) => {
    let tempCryptoList = [];
  }

  render() {
    return(
      <div>
      <input type="checkbox" />
      <label>BTC</label>
      <br />
      <input type="checkbox" />
      <label>ETH</label>
      </div>
    );
  }
}

export default CryptoForm;
