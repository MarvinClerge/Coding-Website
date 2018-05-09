import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveCode } from '../actions/code'
import { logout } from '../actions/auth'
import { changeSideActive } from '../actions/index'

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
    if (this.props.location.pathname === '/code') {
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
          <i className="material-icons">exit_to_app</i><p>Logout</p>
        </button>
      )
    }
  }

  render(){
    return(
      <div className="navbar">
        <div>
          <h1 id="title">
            <Link to="/" className="navbar-title">
              Coding Website
            </Link>
          </h1>
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
