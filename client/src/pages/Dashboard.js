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
        <Link style={{margin: "25px"}} to='/TeacherDashboard'><Button>Teacher Dashboard</Button></Link>
        <Link to='/StudentDashboard'><Button>Student Dashboard</Button></Link>
        <hr/>
      </ButtonGroup>
    )
  }
}
export default Dashboard;
