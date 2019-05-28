
import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Users from './components/Users'
import SingleUser from './components/SingleUser'

export default class App extends Component {
  render () {
    return (
       
        <div>
          <Switch>
            <Route exact path="/" component={Users}/>
            <Route path="/:id" component={SingleUser}/>
          </Switch>
        </div>
    )
  }
}

