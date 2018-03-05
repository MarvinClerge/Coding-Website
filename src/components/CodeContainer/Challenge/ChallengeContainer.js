import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Challenge from './Challenge'

class ChallengeContainer extends Component {
  state = {
    creating: true,
    form: {
      title: '',
      description: '',
      testDescription: '',
      testValue: '',
      testExpected: ''
    }
  }

  changeCreating = () => {
    this.setState({
      creating: !this.state.creating
    })
  }

  onChange = event => {
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
          <button onClick={this.changeCreating} className="challenge-create">
            <h1>Create New Challenge</h1>
          </button>
          {this.renderForm()}
        </div>
      )
    }
  }

  renderChallenges = () => {
    return this.props.challenges.map(challenge => {
      return <Challenge key={challenge.id} {...challenge}/>
    })
  }

  renderForm = () => {
    if (this.state.creating) {
      return(
        <div>
          <form>
            <input type="text" name="title" placeholder="Title"  value={this.state.title} onChange={this.onChange}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.onChange}/>
            <input type="text" name="testDescription" placeholder="Test Description" value={this.state.testDescription} onChange={this.onChange}/>
            <input type="text" name="testValue" placeholder="Test Value" value={this.state.testValue} onChange={this.onChange}/>
            <input type="text" name="testExpected" placeholder="Test Expected" value={this.state.testExpected} onChange={this.onChange}/>
            <br />
            <input type="submit" value="Submit Challenge" />
          </form>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        {this.renderUserActions()}
        {this.renderChallenges()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    input: state.code.input,
    challenges: state.challenge.challenges,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, null)(ChallengeContainer)
