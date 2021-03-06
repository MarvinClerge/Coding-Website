import './App.css'

import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import CodeContainer from './components/CodeContainer/CodeContainer2'

import { setUser } from './actions/auth'
import { loadAllChallenges } from './actions/challenge'


class App extends Component {
  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token) {
      this.props.setUser(token)
    } else {
      this.props.loadAllChallenges()
    }
  }

  render() {
    return (
      <div className="app">
        <Route path="/" component={Navbar} />
        <Route exact path="/" render={routerProps => {
          return(
            <div>
              <Welcome />

              <div className='section d-grey'>
                <div>
                  <h4>Write Code</h4>
                  <p>Write and run code using the text editor</p>
                  <p>Save and manage your code</p>
                </div>
              </div>

              <div className='section l-grey'>
                <div>
                  <h4>Take Challenges</h4>
                  <p>Take on challenges from our community</p>
                  <p>Build customs challenges and put others to the test</p>
                </div>
              </div>

              <div className='section d-grey'>
                <div>
                  <h4>Third thing</h4>
                  <p>Can't think of anything yet</p>
                  <p>It will be awesome when I do</p>
                </div>
              </div>

            </div>

          )
        }}/>
        <Route path="/code" component={CodeContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setUser: setUser,
    loadAllChallenges: loadAllChallenges
  }, dispatch)
}

export default withRouter( connect(null, mapDispatchToProps)(App) ) ;
