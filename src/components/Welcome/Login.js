import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.login(this.state)
  }

  render(){
    return(
      <div className='signup'>
        <h2 className="signup-title">Login</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.onChange}
            value={this.state.username}
            className="signup-text"
          /><br/><br/>

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
            className="signup-text"
          /><br/><br/>

          <input
            type="submit"
            value="Login"
            className="signup-submit"
          />
        </form>

        <a
          href=''
          onClick={this.props.change}
          className="auth-change"
        ><p>
          or signup
        </p></a>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login: login
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
