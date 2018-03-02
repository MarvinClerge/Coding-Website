import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Output extends Component {
  render(){
    return(
      <div>output {this.props.output}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    output: state.code.output
  }
}

export default connect(mapStateToProps, null)(Output)
