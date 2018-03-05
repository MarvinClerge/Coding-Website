import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Interpreter from 'js-interpreter'
import { changeCodeValue } from '../../../actions/code'

class Output extends Component {
  codeEvaluation = event => {
    try {
      let input = this.props.input ? this.props.input : "\"...\""
      const myInterpreter = new Interpreter(input);
      myInterpreter.run()
      this.props.changeCodeValue({
        type: 'output',
        value: myInterpreter.value.data
      })
    } catch (error) {
      this.props.changeCodeValue({
        type: 'output',
        value: error.toString()
      })
    }
  }

  saveCode = event => {
    if (this.props.loggedIn) {
      console.log('save the code');
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

  renderChallengeButtons = () => {
    if (this.props.status === 'challenge') {
      return(
        <div className="output-controls">
          <button className="output-button run" onClick={this.codeEvaluation}>
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
          {this.renderChallengeButtons()}
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
    loggedIn: state.auth.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeCodeValue: changeCodeValue
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Output)
