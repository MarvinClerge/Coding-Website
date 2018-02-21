import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import CodeContainer from './components/CodeContainer'
import { Route, Switch } from 'react-router-dom'
import './App.css'


class App extends Component {
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
