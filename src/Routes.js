import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import authHOC from './utils/authHOC';
import CompraVenta from './views/CompraVenta';
import Post from './views/Post';
import Update from './views/Update';
import Me from './views/Me';
import ETH from './views/ETH'
import NEO from './views/NEO'
import Wallet from './views/Wallet'
import VentaETH from './views/VentaETH'



import Movimientos from './views/Movimientos'

function Logout (){
    localStorage.removeItem('blogToken');
    console.log('Entre al logout');
    return <Redirect to="/login"/>
}

function Routes() {

    return(
        <>
            <Route exact path="/" component={Home}/>
            <Route exact path="/eth" component={ETH}/>
            <Route exact path="/neo" component={NEO}/>

            <Route exact path="/movimientos" component={Movimientos}/>

            <Route exact path="/login" component={Login}/>
            <Route exact path="/wallet" component={Wallet}/>

            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/compraventa" component={CompraVenta}/>
            <Route exact path="/ventaeth" component={VentaETH}/>

            <Route exact path="//:id" component={Post} />
            <Route exact path="/logout" component={authHOC(Logout)}/>
            <Route exact path="/update/:id" component={Update} />
             <Route exact path="/me" component={Me} />
            
        </>
    );

} 

export default Routes;