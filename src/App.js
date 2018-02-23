import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import CodeContainer from './components/CodeContainer'
import { Route, Switch } from 'react-router-dom'
import userAdapter from './adapter/user_adapter'
import './App.css'


class App extends Component {
  state = {
    auth: {
      loggedIn: false,
      token: null
    }
  }
  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token) {
      console.log('LOGGED IN');
      userAdapter.currentUser()
      .then(response => response.json())
      .then(console.log)

      // this.setState({
      //   auth: {loggedIn: true, token: token}
      // })
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/code" component={CodeContainer} />

        </Switch>
      </div>
    );
  }
}

export default App;
