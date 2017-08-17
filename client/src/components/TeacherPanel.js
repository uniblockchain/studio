import React from 'react';
import {
  Container,
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
      <Container>
        <ButtonGroup>
          <Link to='/Students'><Button>Students</Button></Link>
          <Link to='/ContactForm'><Button>Contact Student/Parent</Button></Link>
          <Link to='/Calendar'><Button>View Lesson Schedule</Button></Link>
          <Link to='/LessonPage'><Button>Plan a Lesson</Button></Link>
          <Link to='/Lessons'><Button>See Lessons</Button></Link>
          <Link to='/PaymentHistory'><Button>Payment History</Button></Link>
          <hr/>
        </ButtonGroup>
      </Container>
    )
  }
}
