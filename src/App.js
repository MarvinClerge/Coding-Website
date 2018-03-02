import './App.css'

import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Home from './components/Home'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import CodeContainer from './components/CodeContainer'
import CodeContainer2 from './components/CodeContainer/CodeContainer2'

import { setUser } from './actions/auth'


class App extends Component {
  componentDidMount(){
    const token = localStorage.getItem('token')
    this.props.setUser(token)
  }

  render() {
    return (
      <div className="app">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/code" component={CodeContainer2} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setUser: setUser
  }, dispatch)
}

export default withRouter( connect(null, mapDispatchToProps)(App) ) ;
