import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Interpreter from 'js-interpreter'
import { changeCodeValue } from '../../../actions/code'
import { saveCode } from '../../../actions/code'

class Output extends Component {
  codeEvaluation = event => {
    try {
      let input = this.props.input ? this.props.input : "\"...\""
      const myInterpreter = new Interpreter(input);
      myInterpreter.run()
      this.props.changeCodeValue({
        type: 'output',
        value: myInterpreter.value.toString()
      })
    } catch (error) {
      this.props.changeCodeValue({
        type: 'output',
        value: error.toString()
      })
    }
  }

  convertValue = (data) => {
    let value;
    switch (data.type) {
      case "string":
        value = `'${data.value}'`
        return value
      case "number":
        value = parseInt(data.value)
        return value
      case "boolean":
        value = (data.value == 'true')
        return value
      default:
    }
  }

  testEvaluation = event => {
    try {
      let value = this.convertValue({
        type: this.props.challenge.test_value_type,
        value: this.props.challenge.test_value
      })

      let expected = this.convertValue({
        type: this.props.challenge.test_expected_type,
        value: this.props.challenge.test_expected
      })

      let call = `challenge(${value})`
      let comparison = `${call} === ${expected}`

      const myInterpreter = new Interpreter(this.props.input + comparison)
      myInterpreter.run()

      if (myInterpreter.value.data) {
        this.props.changeCodeValue({
          type: 'output',
          value: `
            PASSED:
            ${this.props.challenge.test_description}`
        })
      } else {

        const myInterpreter = new Interpreter(this.props.input + call)
        myInterpreter.run()

        this.props.changeCodeValue({
          type: 'output',
          value: `
          FAILED:
          ${this.props.challenge.test_description}

          RECEIVED:
          ${myInterpreter.value.toString()}

          EXPECTED:
          ${expected}`
        })
      }

    } catch (error) {
      this.props.changeCodeValue({
        type: 'output',
        value: error.toString()
      })
    }
  }

  saveCode = event => {
    if (this.props.loggedIn) {
      this.props.saveCode({
        input: this.props.input,
        codeId: this.props.codeId,
        userId: this.props.currentUser.id,
        codes: this.props.codes
      })
    } else {
      alert("You must be logged in to save code")
    }
  }

  renderCodeButtons = () => {
    if (this.props.status === 'code') {
      return(
        <div className="output-controls">
          <button className="output-button run" onClick={this.codeEvaluation}>
            Run Code
          </button>

          <button className="output-button save" onClick={this.saveCode}>
            Save Code
          </button>
        </div>
      )
    }
  }


  renderChallengeButton = () => {
    if (this.props.status === 'challenge') {
      return(
        <div className="output-controls">
          <button className="output-button run-test" onClick={this.testEvaluation}>
            Run Tests
          </button>
        </div>
      )
    }
  }

  render(){
    return(
      <div className="output">
        <div className="output-controls">
          {this.renderCodeButtons()}
          {this.renderChallengeButton()}
        </div>

        <div className="output-result">
          {this.props.output ? this.props.output : "Result will appear here"}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    output: state.code.output,
    input: state.code.input,
    loggedIn: state.auth.loggedIn,
    challenge: state.challenge.current,
    codeId: state.code.currentId,
    currentUser: state.auth.currentUser,
    codes: state.code.codes
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeCodeValue: changeCodeValue,
    saveCode: saveCode
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Output)
