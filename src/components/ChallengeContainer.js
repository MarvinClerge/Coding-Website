import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeCodeValue } from '../actions/code'
import { changeStatus } from '../actions/index'
import { createChallenge } from '../actions/challenge'
import { v1 } from './challenge-structure'
import Challenge from './Challenge'
import '../css/lesson-container.css'

class ChallengeContainer extends Component {
  state = {
    active: true,
    creating: false,
    form: {
      title: '',
      description: '',
      testDescription: '',
      testValue: '',
      testExpected: ''
    }
  }

  toggleActive = event => {
    this.setState({
      active: !this.state.active
    })
  }

  renderCreateChallenge = () => {
    return(
      <div className="create-challenge-container">
        <form onSubmit={this.handlecChallengeSubmit} >
          <input type="text" name="title" placeholder="Title"  value={this.state.title} onChange={this.onFormChange}/>
          <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.onFormChange}/>
          <input type="text" name="testDescription" placeholder="Test Description" value={this.state.testDescription} onChange={this.onFormChange}/>
          <input type="text" name="testValue" placeholder="Test Value" value={this.state.testValue} onChange={this.onFormChange}/>
          <input type="text" name="testExpected" placeholder="Test Expected" value={this.state.testExpected} onChange={this.onFormChange}/>
          <br />
          <input type="submit" value="Submit Challenge" />
        </form>
      </div>
    )
  }

  onFormChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  handlecChallengeSubmit = event => {
    event.preventDefault()
    let form = {
      ...this.state.form,
      content: this.props.input
    }


    this.props.createChallenge({
      form: form,
      user: this.props.user
    })
  }

  renderUserActions = () => {
    if (this.props.loggedIn) {
      return (
        <div>
          <button onClick={this.initChallenge} className="challenge-create">
            <h1>Create New Challenge</h1>
          </button>
          {this.state.creating ? this.renderCreateChallenge() : null}
        </div>
      )
    }
  }

  initChallenge = () => {
    if (!this.state.creating) {
      this.props.changeCodeValue({
        type: 'input',
        value: v1
      })
    } else {
      this.props.changeCodeValue({
        type: 'input',
        value: ''
      })
    }
    this.props.changeStatus('create-challenge')
    this.setState({
      creating: !this.state.creating
    })

  }

  renderChallenges = () => {
    return this.props.challenges.map(challenge => {
      return <Challenge key={challenge.id} {...challenge}/>
    })
  }

  render(){
    return(
      <div className="left-container">
        <div className={`lesson-container ${this.state.active ? "l-active" : "l-unactive"}`}>
          {this.renderUserActions()}
          {this.renderChallenges()}
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
    input: state.code.input,
    status: state.status,
    loggedIn: state.auth.loggedIn,
    currentId: state.challenge.currentId,
    challenges: state.challenge.challenges,
    user: state.auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeCodeValue: changeCodeValue,
    changeStatus: changeStatus,
    createChallenge: createChallenge
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer)
