import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
// CSS
import './App.css';
//Components
import Navbar from './components/container/Navbar/Navbar.js'
// import ProductList from './components/ProductList'
// import Details from './components/Details'
// import Cart from './components/Cart'
// import Default from './components/Default'
// import Modal from './components/Modal'

import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
    render() {
      return (
        <React.Fragment>        
          <Navbar></Navbar>
        </React.Fragment>
      );
    }
  }
  
  export default App;
