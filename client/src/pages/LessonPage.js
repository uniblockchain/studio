import React from 'react';
import LessonPlanner from '../components/LessonPlanner';

export default class LessonPage extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  render(){
    return(
      <LessonPlanner onLessonSubmit={this.createLesson} />
      
    )
  }

  createLesson = (lesson) => {
    this.state.data.push(lesson);
  }

}
