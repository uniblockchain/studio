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
        <Link style={{margin: "25px"}} to='/LessonPlans'><Button>Lesson Planner</Button></Link>
        <Link style={{margin: "25px"}} to='/StudentPortfolio'><Button>Student Roster</Button></Link>
        <Link style={{margin: "25px"}} to='/Calendar'><Button>Calendar</Button></Link>
        <hr/>
      </ButtonGroup>
    )
  }
}
export default Dashboard;
