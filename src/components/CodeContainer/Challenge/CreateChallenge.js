import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createChallenge } from '../../../actions/challenge'

class CreateChallenge extends Component {
  state = {
    active: false,
    title: '',
    description: '',
    testDescription: '',
    testValue: {
      value: '',
      type: 'String'
    },
    testExpected: {
      value: '',
      type: 'String'
    }
  }

  toggleActive = event => {
    this.setState({
      active: !this.state.active
    })
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onValueChange = event => {
    this.setState({
      testValue: {
        ...this.state.testValue,
        [event.target.name]: event.target.value
      }
    })
  }

  onExpectedChange = event => {
    this.setState({
      testExpected: {
        ...this.state.testExpected,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.createChallenge({
      ...this.state,
      user_id: this.props.user.id
    })
  }

  renderForm = () => {
    if (this.state.active) {
      return(
        <div className='create-container'>
          <form onSubmit={this.onSubmit}>
            <div className="create-inputs">

              <input type="text" name="title" placeholder="Title"
                value={this.state.title} onChange={this.onChange}/>

              <textarea name="description" placeholder="Description"
                value={this.state.description} onChange={this.onChange}/>

              <input type="text" name="testDescription" placeholder="test description"
                value={this.state.testDescription} onChange={this.onChange}/>

              <div className="test-value">
                <input type="text" name="value" placeholder="expected argument"
                  value={this.state.testValue.value} onChange={this.onValueChange} />
                <select name='type' onChange={this.onValueChange}
                  value={this.state.testValue.type} >
                  <option>String</option>
                  <option>Number</option>
                  <option>Boolean</option>
                </select>
              </div>


              <div className="test-expected">
                <input type="text" name="value" placeholder="expected result"
                  value={this.state.testExpected.value} onChange={this.onExpectedChange} />
                <select name="type" onChange={this.onExpectedChange}
                  value={this.state.testExpected.type}>
                  <option>String</option>
                  <option>Number</option>
                  <option>Boolean</option>
                </select>
              </div>

            </div>

            <br />
            <input type="submit" value="Submit Challenge" id="submit-challenge"/>
          </form>
        </div>
      )
    }
  }

  render(){
    if (this.props.loggedIn) {
      return(
        <div>
          <button onClick={this.toggleActive} id="create-challenge">
            {this.state.active ? "Close" : "Create New Challenge"}
          </button>

          {this.renderForm()}
        </div>
      )
    } else {
      return(
        <div className="create-not-logged">
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
