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

        <div className='welcome-header'>
            <h1>JavaScript <br /> Challenges</h1>
            <p>Test your skills on various coding challenges using JavaScript </p>
        
            <Link to="/code">
                <button className="welcome-button">
                    {"</> Start Coding"}
                </button>
            </Link>
        </div>

        <div className='welcome-cards'>
            <div className='welcome-card'>
                <h3>In-Browser IDE</h3>
                <p>Freely write and evaluate Javascript code using an in-browser IDE secured in a sandbox environment.</p>
            </div>
            <div className='welcome-card'>
                <h3>20+ Challenges</h3>
                <p>Take on challenges from our community. Build customs challenges and put others to the test.</p>
            </div>
            <div className='welcome-card'>
                <h3>Save and Share</h3>
                <p>Freely write and evaluate Javascript code using an in-browser IDE secured in a sandbox environment.</p>
            </div>
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
