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
      <LessonPlanner/>

    )
  }

  createLesson = (lesson) => {
    console.log('reached create')
    this.state.data.push(lesson);
    console.log(this.state)
  }

}
