import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, signup } from '../actions/auth'

class Main extends Component {
  state = {
    signup: {
      username: '',
      password: '',
      passwordConfirmation: ''
    },
    login: {
      username: '',
      password: ''
    }
  }

  onLoginChange = event => {
    this.setState({
      login: {
        ...this.state.login,
        [event.target.name]: event.target.value
      }
    })
  }

  onSignupChange = event => {
    this.setState({
      signup: {
        ...this.state.signup,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSignup = event => {
    event.preventDefault()
    this.props.signup(this.state.signup)
    this.setState({
      signup: {
        username: '',
        password: '',
        passwordConfirmation: ''
      }
    })
  }

  handleLogin = event => {
    event.preventDefault()
    this.props.login(this.state.login)
    this.setState({
      login: {
        username: '',
        password: ''
      }
    })
  }

  render(){
    console.log(this.props.loggedIn);
    return(
      <div className="main">
        <div>intro / start coding</div>

        <form onSubmit={this.handleSignup}>

          <h3>Create a new account</h3>

          <label>Username: </label>
          <input type="text" name="username" onChange={this.onSignupChange} value={this.state.signup.username}/><br />

          <label>Password: </label>
          <input type="password" name="password" onChange={this.onSignupChange} value={this.state.signup.password}/><br />

          <label>Confirm Password: </label>
          <input type="password" name="passwordConfirmation" onChange={this.onSignupChange} value={this.state.signup.passwordConfirmation}/><br />

          <input type="submit" value="Submit" />
        </form>


        <form onSubmit={this.handleLogin}>
          <h3>Login</h3>

          <label>Username: </label>
          <input type="text" name="username" onChange={this.onLoginChange} value={this.state.login.username}/><br />

          <label>Password: </label>
          <input type="password" name="password" onChange={this.onLoginChange} value={this.state.login.password}/><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    token: state.auth.token,
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login: login,
    signup: signup
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
