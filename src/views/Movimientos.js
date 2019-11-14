import React from 'react'
import Navbar from '../common/Navbar'
import '../common/Navbar.js'

 function Movimientos() {
    return (
        <div>
            <div className="container">
            <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="/">BTC</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/eth">ETH</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">EOS</a>
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
