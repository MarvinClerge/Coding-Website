import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Tab from './Tab'

import UserContainer from './User/UserContainer'
import Output from './Output/Output'


class Side extends Component {
  state = {
    tab: 'output'
  }

  handleClassName = () => {
    if (this.props.active) {
      return "side side-active"
    } else {
      return "side side-inactive"
    }
  }

  changeTab = tab => {
    this.setState({
      tab: tab
    })
  }

  renderTab = () => {
    switch (this.state.tab) {
      case 'output':
        return <Output />
      case 'challenge':
        return <div>CHALLENGES</div>
      case 'user':
        return <UserContainer/>
      default:
    }
  }

  renderUser = () => {
    if (this.props.loggedIn) {
      return(
        <Tab
          active={this.state.tab}
          title="MY CODE"
          type="user"
          click={this.changeTab}/>
      )
    }
  }


  render(){
    return(
      <div className={this.handleClassName()}>
        <div className="tab-container">
          <Tab
            active={this.state.tab}
            title="OUTPUT"
            type="output"
            click={this.changeTab}/>
          <Tab
            active={this.state.tab}
            title="CHALLENGES"
            type="challenge"
            click={this.changeTab}/>
          {this.renderUser()}
        </div>
        {this.renderTab()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    active: state.sideActive,
    loggedIn: state.auth.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, null)(Side);
