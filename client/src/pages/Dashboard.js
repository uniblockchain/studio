import React from 'react';
import {
  Button,
  ButtonGroup,
  } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import StudentPortfolio from '../components/StudentPortfolio';



class Dashboard extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <ButtonGroup>
        <Link to='/TeacherDashboard'><Button>Teacher Dashboard</Button></Link>
        <Link to='/StudentDashboard'><Button>Student Dashboard</Button></Link>
        <hr/>
      </ButtonGroup>
    )
  }
}
export default Dashboard;
