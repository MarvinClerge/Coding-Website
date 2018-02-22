import React, { Component } from 'react'
import '../css/user-container.css'

class UserContainer extends Component {
  state = {
    active: false
  }

  toggleActive = event => {
    this.setState({
      active: !this.state.active
    })
  }

  render(){
    return(
      <div className="right-container">
        <button onClick={this.toggleActive}></button>
        <div className={`user-container ${this.state.active ? "u-active" : "u-unactive"}`}>
          user container
        </div>
      </div>
    )
  }
}

export default UserContainer
