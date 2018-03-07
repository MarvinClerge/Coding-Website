import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveCode } from '../actions/code'
import { logout } from '../actions/auth'
import { changeSideActive } from '../actions/index'
import Interpreter from 'js-interpreter'

class Navbar extends Component {
  buttonClick = () => {
    this.props.saveCode({
      input: this.props.input,
      codeId: this.props.codeId,
      userId: this.props.currentUser.id,
      codes: this.props.codes
    })
  }

  renderMenuButton = () => {
    // window.location.pathname === '/code'
    if (true) {
      return(
        <button id="menu-button" onClick={this.props.changeSideActive}>
          ≡
        </button>
      )
    }
  }

  renderLogoutButton = () => {
    if (this.props.loggedIn) {
      return(
        <button id="logout-button" onClick={this.props.logout}>
          logout
        </button>
      )
    }
  }

  render(){
    return(
      <div className="navbar">
        <div>
          <Link to="/" className="navbar-title">
            <h1 id="title">Site Name</h1>
          </Link>
        </div>

        <div className="navbar-controls">
          {this.renderMenuButton()}
          {this.renderLogoutButton()}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    loggedIn: state.auth.loggedIn,
    currentUser: state.auth.currentUser,
    input: state.code.input,
    codeId: state.code.currentId,
    codes: state.code.codes
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    saveCode: saveCode,
    logout: logout,
    changeSideActive: changeSideActive
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
