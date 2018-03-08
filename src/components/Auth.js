import React, { Component } from 'react'

import Login from './Welcome/Login'
import Signup from './Welcome/Signup'

import { connect } from 'react-redux'

class Auth extends Component {
  state = {
    signup: true
  }

  changeAuth = event => {
    event.preventDefault()
    this.setState({
      signup: !this.state.signup
    })
  }

  handleRender = () => {
    if (!this.props.loggedIn) {
      if (this.state.signup) {
        return <Signup change={this.changeAuth}/>
      } else {
        return <Login change={this.changeAuth}/>
      }
    }
  }

  render(){
    return(
      <div className="auth">
        {this.handleRender()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, null)(Auth)
