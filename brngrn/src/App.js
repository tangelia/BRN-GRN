import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
// CSS
import './App.css';
//Components
import Navbar from './components/container/Navbar/Navbar'


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
