import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveCode } from '../actions/code'

class Navbar extends Component {
  buttonClick = () => {
    this.props.saveCode({
      input: this.props.input,
      codeId: this.props.codeId,
      userId: this.props.currentUser.id,
      codes: this.props.codes
    })
  }

  render(){
    return(
      <div className="navbar">
        {this.props.loggedIn ? 'logged' : 'not logged in'}
        navbar
        <Link to="/">Home</Link>
        <Link to="/code">Code</Link>
        <button onClick={this.buttonClick}>Save Code</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    currentUser: state.auth.currentUser,
    input: state.code.input,
    codeId: state.code.currentId,
    codes: state.code.codes
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    saveCode: saveCode
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
