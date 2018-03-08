import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateChallenge from './CreateChallenge'
import Challenge from './Challenge'

class ChallengeContainer extends Component {
  renderChallenges = () => {
    return this.props.challenges.map(challenge => {
      return <Challenge key={challenge.id} {...challenge} changeTab={this.props.changeTab}/>
    })
  }

  render(){
    return(
      <div>
        <CreateChallenge />
        {this.renderChallenges()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    challenges: state.challenge.challenges
  }
}

export default connect(mapStateToProps, null)(ChallengeContainer)
