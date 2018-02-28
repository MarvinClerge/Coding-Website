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
    input: state.code.input,
    output: state.code.output
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeCodeValue: changeCodeValue
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Code)
