import React from 'react';
import {
  Button,
  ButtonGroup } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';


export default class TeacherPanel extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <ButtonGroup>
        <Link to='/Students'><Button>Teacher Dashboard</Button></Link>
        <Link to='/ContactForm'><Button>Student Dashboard</Button></Link>
        <Link to='/Calendar'><Button>Calendar</Button></Link>
        <Link to='/Planner'><Button>Calendar</Button></Link>
        <Link to='/Lessons'><Button>Calendar</Button></Link>
        <Link to='/PaymentHistory'><Button>Payment History</Button></Link>

        <hr/>
      </ButtonGroup>
    )
  }
}
