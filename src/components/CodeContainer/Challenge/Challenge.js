import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadChallenge } from '../../../actions/challenge'

class Challenge extends Component {
  getDate = () => {
    let date = this.props.updated_at.slice(0,10).replace(/-/g, " ")
    return date
  }

  startChallenge = event => {
    this.props.loadChallenge(this.props)
    this.props.changeTab('output')
  }

  render(){
    return(
      <div className="challenge-container">
        <h3 className="challenge-title">{this.props.title}</h3>
        <p>{this.props.description}</p>
        <button className="challenge-start" onClick={this.startChallenge}>
          <h4>Start Challenge</h4>
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
