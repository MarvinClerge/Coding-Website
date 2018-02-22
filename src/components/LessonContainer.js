import React, { Component } from 'react'
import Lesson from './Lesson'
import '../css/lesson-container.css'

class LessonContainer extends Component {
  state = {
    active: false
  }

  // handleLessons = () => {
  //   this.props.lessons.map(lesson => {
  //     return <Lesson />
  //   })
  // }

  toggleActive = event => {
    this.setState({
      active: !this.state.active
    })
  }

  render(){
    return(
      <div className="left-container">
        <div className={`lesson-container ${this.state.active ? "l-active" : "l-unactive"}`}>
          lesson container
        </div>
        <button
          onClick={this.toggleActive}
          className="toggle"
        />
      </div>
    )
  }
}

export default LessonContainer
