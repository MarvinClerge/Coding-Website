import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createChallenge } from '../../../actions/challenge'

class CreateChallenge extends Component {
  state = {
    active: true,
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

  onChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit = event => {
    event.preventDefault()

    let form = {
      ...this.state.form,
      content: "// Enter code here"
    }

    this.props.createChallenge({
      form: form,
      user: this.props.user
    })
  }

  renderForm = () => {
    if (this.state.active) {
      return(
        <div>
          <form onSubmit={this.onSubmit}>
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
    if (this.props.loggedIn) {
      return(
        <div>
          <button onClick={this.toggleActive}>
            <h1>Create New Challenge</h1>
          </button>

          {this.renderForm()}
        </div>
      )
    } else {
      return(
        <div>
          <p>You must be logged in to create a challenge</p>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    createChallenge: createChallenge
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateChallenge)
