import React from 'react'
import Navbar from '../common/Navbar'
import '../common/Navbar.js'

 function Movimientos() {
    return (
        <div>
            <div className="container">
            <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" href="/">BTC</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/eth">ETH</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">EOS</a>
  </li>
  
</ul>
            </div>

        <div className="container"  >
            <div className="row">
            <div className="column">

                

            </div>
            </div>


            <div className="row">
            <div className="column">


            <ul className="list-group">
  <li className="list-group-item">Compra ETH</li>
  <li className="list-group-item">Venta BTC</li>
  <li className="list-group-item">Venta EOS</li>
  <li className="list-group-item">Compra ETH</li>
  <li className="list-group-item">Venta EOS</li>
</ul>
            </div>

            
        </div>
        </div>
        </div>
        
    )
}

export default Movimientos
