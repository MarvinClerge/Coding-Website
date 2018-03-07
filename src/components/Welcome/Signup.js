import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signup } from '../../actions/auth'

class Signup extends Component {
  state = {
    username: '',
    password: '',
    passwordConfirmation: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.signup(this.state)
  }

  render(){
    return(
      <div className='signup'>
        <h2 className="signup-title">Signup</h2>
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
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirmation"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            className="signup-text"
          /><br/><br/>

          <input
            type="submit"
            value="Signup"
            className="signup-submit"
          />
        </form>

        <a
          href=''
          onClick={this.props.change}
          className="auth-change"
        ><p>
          or login
        </p></a>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signup: signup
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup)
