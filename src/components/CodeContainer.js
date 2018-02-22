import React, { Component } from 'react'
import UserContainer from './UserContainer'
import Code from './Code'
import LessonContainer from './LessonContainer'
import '../css/code-container.css'

class CodeContainer extends Component {


  render(){
    return(
      <div className="code-container">
        <LessonContainer />
        <Code />
        <UserContainer />
      </div>
    )
  }
}

export default CodeContainer
