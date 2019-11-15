import React from 'react';

import axios from 'axios';

export default class PrecioNEO extends React.Component {
  state = {
    precio: ""
  }

  componentDidMount() {
    axios.get("https://api.bitso.com/v3/order_book/?book=xrp_mxn")
      .then(res => {
        const precio = res.data.payload.bids[0].price;
        console.log(res.data.payload.bids[0].price)
        this.setState({ precio });
      })
  }

  render() {
    return (
        <>
        <div className="text-center">
        <h2>Precio</h2>
      <h5>
        { this.state.precio}
      </h5>
        </div>
        
      </>
    )
  }
}