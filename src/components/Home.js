import React, { Component } from 'react'
import Main from './Main'
import Info from './Info'

class Home extends Component {


  render(){
    return(
      <div className="home">
        <Main />
        <Info />
      </div>
    )
  }
}

export default Home
