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

              <div className='section'>
                <div className="section-text">
                  <h4>Write Code</h4>
                  <p>Write and run code using the text editor</p>
                  <p>Save and mange your code</p>
                </div>

                <div className='section-img'>
                  <img src="https://www.usnews.com/dims4/USNEWS/f462862/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fea%2F1a%2F48eb43bf4e708c1e55d6de41dfc1%2F141212-computer-submitted.jpg"/>
                </div>
              </div>

              <div className='section2'>
                <div className='section2-img'>
                  <img src="https://www.usnews.com/dims4/USNEWS/f462862/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fea%2F1a%2F48eb43bf4e708c1e55d6de41dfc1%2F141212-computer-submitted.jpg"/>
                </div>

                <div className="section2-text">
                  <h4>Challenges</h4>
                  <p>Take on challenges from our community</p>
                  <p>Build customs challenges and put others to the test</p>
                </div>
              </div>

              <div className='section'>
                <div className="section-text">
                  <h4>Third thing</h4>
                  <p>Can't think of anything yet</p>
                  <p>It will be awesome when I do</p>
                </div>

                <div className='section-img'>
                  <img src="https://www.usnews.com/dims4/USNEWS/f462862/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fea%2F1a%2F48eb43bf4e708c1e55d6de41dfc1%2F141212-computer-submitted.jpg"/>
                </div>
              </div>

            </div>

          )
        }}/>
        <Route path="/code" component={CodeContainer2} />
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
