import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AceEditor from 'react-ace'
import Interpreter from 'js-interpreter'
import '../css/code.css'

import 'brace/mode/javascript'
import 'brace/theme/monokai'

import { changeCodeValue } from '../actions/code'


class Code extends Component {

  handleEditorChange = code => {
    this.props.changeCodeValue({
      type: 'input',
      value: code
    })
  }

  handleCodeEvaluation = event => {
    console.log(this.props.status);
    if (this.props.status === 'code') { // regular coding
      try {
        const myInterpreter = new Interpreter(this.props.input);
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
    } else if (this.props.status === 'challenge'){ // challenge coding
      let x = this.props.input.split('function challenge(value){')[1]
      let declaration = "function challenge(value){" + x
      let call = `challenge(${this.props.challenge.test_value})`
      let test = `if (${call} === ${this.props.challenge.test_expected}) {
        return \"PASSED: ${this.props.challenge.test_description}\"
      } else {
        return \"FAILED: ${this.props.challenge.test_description}\"
      }`
      console.log(declaration + test);
    }

  }


  render(){
    return(
      <div className="code">

        <AceEditor
          mode="javascript"
          theme="monokai"
          width="100%"
          height="60vh"
          onChange={this.handleEditorChange}
          value={this.props.input}
          focus={true}
          fontSize="15px"
          editorProps={{$blockScrolling: Infinity}}
        />

        <button
          id="run-code"
          onClick={this.handleCodeEvaluation}
        >run code</button>

        <div id="output">
          {this.props.output}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    input: state.code.input,
    output: state.code.output,
    challenge: state.challenge.current
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeCodeValue: changeCodeValue
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Code)
