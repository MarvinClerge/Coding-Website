import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveCode } from '../actions/code'
import Interpreter from 'js-interpreter'

class Navbar extends Component {
  buttonClick = () => {
    this.props.saveCode({
      input: this.props.input,
      codeId: this.props.codeId,
      userId: this.props.currentUser.id,
      codes: this.props.codes
    })
  }

  challengeClick = event => {
    // const myInterpreter = new Interpreter(this.props.input);
    // myInterpreter.run()
    // debugger

    try {
      const myInterpreter = new Interpreter(this.props.input);
      myInterpreter.run()

      let title = myInterpreter.value.properties.title.data
      let description = myInterpreter.value.properties.description.data
      let testDescription = myInterpreter.value.properties.test.properties.description.data
      let testValue = myInterpreter.value.properties.test.properties.value.data
      let testExpected = myInterpreter.value.properties.test.properties.expected.data

      let challenge;
      this.props.input.split('}').forEach(x => {
        if (x.includes("function challenge(value){")) {
          challenge = "function challenge(value){" + x.split('function challenge(value){')[1] + "}"
        }
      })

      let final = {
        title: title,
        description: description,
        testDescription: testDescription,
        testValue: testValue,
        testExpected: testExpected,
        challenge: challenge
      }

      let builtFunction = `
        ${final.challenge}
        if (challenge(${final.testValue}) === ${final.testExpected}) {
          return "SUCCESS: ${final.testDescription}\nchallenge(${final.testValue}) === ${final.testExpected}"
        } else {
          return "FAILURE: ${final.testDescription}\nchallenge(${final.testValue}) === ${final.testExpected}"
        }
        `

      console.log(final);
      console.log(builtFunction);

    } catch (error) {
      console.log(error);
    }
  }

  renderButton = () => {
    if (this.props.status === 'code') {
      return <button onClick={this.buttonClick}>Save Code</button>
    } else if (this.props.status === 'create-challenge') {
      return <button onClick={this.challengeClick}>Create Challenge</button>
    }
  }

  render(){
    return(
      <div className="navbar">
        {this.props.loggedIn ? 'logged' : 'not logged in'}
        navbar
        <Link to="/">Home</Link>
        <Link to="/code">Code</Link>
        {this.renderButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    loggedIn: state.auth.loggedIn,
    currentUser: state.auth.currentUser,
    input: state.code.input,
    codeId: state.code.currentId,
    codes: state.code.codes
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    saveCode: saveCode
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
