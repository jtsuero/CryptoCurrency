import React, {Component} from 'react';

class Crypto extends Component {
  constructor(props) {
    super(props);
  }
  currencyFormatter = (item) => {
    return <span>${this.props.currency}</span>
  }


  render() {
    let currencyList = this.currencyFormatter(this.props.currency);
    return (
      <div>
        {currencyList}
      </div>
    );

  }
}


export default Crypto;
