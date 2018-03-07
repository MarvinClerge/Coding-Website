import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadCode, deleteCode } from '../../../actions/code'

class CodeCard extends Component {
  getDate = () => {
    let date = this.props.updated_at.slice(0,10)
    let time = this.props.updated_at.slice(11,16)
    return `${date} at ${time}`
  }

  handleLoad = event => {
    this.props.loadCode(this.props)
  }

  handleDelete = event => {
    this.props.deleteCode(this.props)
  }

  render(){
    return(
      <div className="card-container">
        <div className="card-time">
          <small>{this.getDate()}</small>
        </div>

        <div className="card-main">
          {this.props.content}
        </div>

        <div className="code-manage">
          <button className="load" onClick={this.handleLoad}>Load</button>
          <button className="delete" onClick={this.handleDelete}>X</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loadCode: loadCode,
    deleteCode: deleteCode
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(CodeCard)
