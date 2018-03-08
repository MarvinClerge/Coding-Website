import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Auth from './Auth'

class Welcome extends Component {
  handleAuthRender = () => {
    if (!this.props.loggedIn) {
      return <Auth />
    }
  }

  render(){
    return(
      <div className="welcome">

        <div className="welcome-message">
          <h2>Welcome to Coding Website</h2>
          <p>It's a website where you code</p>
          <br/>
          <Link to="/code">
            <button className="welcome-button">
              Start Coding
            </button>
          </Link>
        </div>

        {this.handleAuthRender()}

        

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, null)(Welcome)
