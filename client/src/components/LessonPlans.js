import React from 'react';

export default class LessonPlans extends React.Component {
  render(){
    return(
      <LessonPlanner onLessonSubmit={this.showLesson}/>
    )

    showLesson = (lesson) => {
      this.data = lesson
    }

  }
}
