import React, { Component } from 'react'
import { connect } from 'react-redux'
import CodeCard from './CodeCard'
import '../css/user-container.css'

class UserContainer extends Component {
  state = {
    active: true,
  }

  toggleActive = event => {
    this.setState({
      active: !this.state.active
    })
  }

  renderCodes = () => {
    console.log(this.props);
    return this.props.codes.slice().map(code => {
      return <CodeCard key={code.id} {...code} />
    })
  }

  renderUser = () => {
    if (this.props.currentUser) {
      return(
        <div>
          <div className="user-info">

            <h1>{this.props.currentUser.username}</h1>
          </div>

          {this.renderCodes()}
        </div>
      )
    } else {
      return(
        <h1>LOGIN</h1>
      )
    }
  }

  render(){
    return(
      <div className="right-container">
        <button onClick={this.toggleActive} className="toggle">{"<"}</button>
        <div className={`user-container ${this.state.active ? "u-active" : "u-unactive"}`}>
          {this.renderUser()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    codes: state.code.codes,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(UserContainer)
