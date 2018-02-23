import React, { Component } from 'react'
import userAdapter from '../adapter/user_adapter.js'

class Main extends Component {
  state = {
    signupUsername: '',
    signupPassword: '',
    signupPasswordConfirmation: '',
    loginUsername: '',
    loginPassword: '',
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignup = event => {
    event.preventDefault()
    userAdapter.signup(this.state)
    .then(console.log)
  }

  handleLogin = event => {
    event.preventDefault()
    userAdapter.login(this.state)
    .then(console.log)
  }

  render(){
    return(
      <div className="main">
        <div>intro / start coding</div>

        <form onSubmit={this.handleSignup}>
          <h3>Create a new account</h3>

          <label>Username: </label>
          <input type="text" name="signupUsername" onChange={this.onChange} value={this.state.username}/><br />

          <label>Password: </label>
          <input type="password" name="signupPassword" onChange={this.onChange} value={this.state.password}/><br />

          <label>Confirm Password: </label>
          <input type="password" name="signupPasswordConfirmation" onChange={this.onChange} value={this.state.passwordConfirmation}/><br />

          <input type="submit" value="Submit" />
        </form>


        <form onSubmit={this.handleLogin}>
          <h3>Login</h3>

          <label>Username: </label>
          <input type="text" name="loginUsername" onChange={this.onChange} value={this.state.username}/><br />

          <label>Password: </label>
          <input type="password" name="loginPassword" onChange={this.onChange} value={this.state.password}/><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Main
