import React from 'react';
import {
  Button,
  ButtonGroup,
  } from 'reactstrap';
import { Link } from 'react-router-dom';



class Dashboard extends React.Component {

  render(){
    return(
      <ButtonGroup>
        <Link style={{margin: "25px"}} to='/LessonPlanner'><Button>Lesson Planner</Button></Link>
        <Link to='/LessonPlans'><Button>Lesson Plans</Button></Link>
        <hr/>
      </ButtonGroup>
    )
  }
}
export default Dashboard;
