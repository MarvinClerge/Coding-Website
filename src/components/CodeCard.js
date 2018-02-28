import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadCode, deleteCode } from '../actions/code'
import '../css/code-card.css'

class CodeCard extends Component {
  getDate = () => {
    let date = this.props.updated_at.slice(0,10)
    let time = this.props.updated_at.slice(11,19)
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
      <div className="code-card-container">
        <div className="code-main">
          <small>{this.getDate()}</small>
          <br/>
          {this.props.content}

        </div>

        <div className="code-manage">
          <button className="load" onClick={this.handleLoad}>Load</button>
          <button className="delete" onClick={this.handleDelete}>Delete</button>
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
