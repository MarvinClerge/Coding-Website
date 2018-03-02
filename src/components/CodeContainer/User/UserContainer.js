import React, { Component } from 'react'
import { connect } from 'react-redux'
import CodeCard from './CodeCard'

class UserContainer extends Component {

  renderCodes = () => {
    if (this.props.codes.length > 0) {
      return this.props.codes.map(code => {
        return <CodeCard key={code.id} {...code} />
      })
    }
  }

  render(){
    return(
      <div className="user-container">
        {this.renderCodes()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    codes: state.code.codes,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(UserContainer)
