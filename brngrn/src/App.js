import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
// CSS
import './App.css';
//Components
// import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'


import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (

      <React.Fragment> 
        {/* <LandingPage/>        */}
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route path='/details' component={Details}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/login' component={Login}/>
          <Route component={Default}/>          
        </Switch> 
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;

