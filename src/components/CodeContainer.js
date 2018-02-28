import React, { Component } from 'react'
import UserContainer from './UserContainer'
import Code from './Code'
import ChallengeContainer from './ChallengeContainer'
import '../css/code-container.css'

class CodeContainer extends Component {


  render(){
    return(
      <div className="code-container">

        <ChallengeContainer />
        <Code />
        <UserContainer />
      </div>
    )
  }
}

export default CodeContainer
