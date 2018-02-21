import React, { Component } from 'react'
import Lesson from './Lesson'

class LessonContainer extends Component {
  handleLessons = () => {
    this.props.lessons.map(lesson => {
      return <Lesson />
    })
  }

  render(){
    return(
      <div className="lesson-container">
        lesson container
      </div>
    )
  }
}

export default LessonContainer
