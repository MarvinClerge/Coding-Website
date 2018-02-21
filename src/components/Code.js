import React, { Component } from 'react'
import AceEditor from 'react-ace'
import brace from 'brace'

import 'brace/mode/javascript'
import 'brace/theme/monokai'

class Code extends Component {

  render(){
    return(
      <div className="code">
        <AceEditor
          mode="javascript"
          theme="monokai"
        />
        <button>run code</button>
        <div>output</div>
      </div>
    )
  }
}

export default Code
