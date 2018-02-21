import React, { Component } from 'react'
import User from './User'
import Code from './Code'
import LessonContainer from './LessonContainer'

class CodeContainer extends Component {


  render(){
    return(
      <div className="code-container">
        <LessonContainer />
        <Code />
        <User />
      </div>
    )
  }
}

export default CodeContainer
