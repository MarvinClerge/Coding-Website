import React, { Component } from 'react'
import AceEditor from 'react-ace'
import '../css/code.css'


import 'brace/mode/javascript'
import 'brace/theme/monokai'

class Code extends Component {
  state = {
    input: "",
    output: ""
  }

  handleEditorChange = code => {
    this.setState({
      input: code
    })
  }

  handleCodeEvaluation = event => {
    try {
      let output = eval(this.state.input)
      this.setState({
        output: output
      })
    } catch (error) {
      this.setState({
        output: error.toString()
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
          value={this.state.input}
          focus={true}
          fontSize="15px"
        />
        <button
          id="run-code"
          onClick={this.handleCodeEvaluation}>run code</button>
        <div id="output">{this.state.output}</div>
      </div>
    )
  }
}

export default Code
