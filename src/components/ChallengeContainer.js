import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeCodeValue } from '../actions/code'
import { changeStatus } from '../actions/index'
import { v1 } from './challenge-structure'
import Challenge from './Challenge'
import '../css/lesson-container.css'

class ChallengeContainer extends Component {
  state = {
    active: false
  }

  toggleActive = event => {
    this.setState({
      active: !this.state.active
    })
  }

  renderUserActions = () => {
    if (this.props.loggedIn) {
      return (
        <div>
          <button onClick={this.initChallenge}>
            Create New Challenge
          </button>
        </div>
      )
    }
  }

  initChallenge = () => {
    let output = v1
    this.props.changeCodeValue({
      type: 'input',
      value: v1
    })
    this.props.changeStatus('create-challenge')

  }

  render(){
    return(
      <div className="left-container">
        <div className={`lesson-container ${this.state.active ? "l-active" : "l-unactive"}`}>
          {this.renderUserActions()}
        </div>
        <button
          onClick={this.toggleActive}
          className="toggle"
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    loggedIn: state.auth.loggedIn,
    currentId: state.challenge.currentId,
    challenges: state.challenge.challenges
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeCodeValue: changeCodeValue,
    changeStatus: changeStatus
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer)
