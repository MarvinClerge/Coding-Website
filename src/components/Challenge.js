import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadChallenge } from '../actions/challenge'
import '../css/challenge.css'

class Challenge extends Component {
  getDate = () => {
    let date = this.props.updated_at.slice(0,10)
    return date
  }

  startChallenge = event => {
    this.props.loadChallenge(this.props)
  }

  render(){
    return(
      <div className="challenge-container">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>{this.getDate()}</p>
        <button className="challenge-start" onClick={this.startChallenge}>
          <h3>Start Challenge</h3>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.status
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loadChallenge: loadChallenge
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge)
