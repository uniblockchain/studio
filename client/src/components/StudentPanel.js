import React from 'react';
import {
  Container,
  Button,
  ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class StudentPanel extends React.Component {

  render(){
    return(
      <Container>
        <ButtonGroup>
          <Link to='/Calendar'><Button>Calendar</Button></Link>
          <Link to='/ScheduleLesson'><Button>Schedule a Lesson</Button></Link>
          <Link to='/ContactForm'><Button>Contact Teacher</Button></Link>
          <Link to='/Lessons'><Button>View Lessons</Button></Link>
          <Link to='/PaymentHistory'><Button>Payment History</Button></Link>
          <hr/>
        </ButtonGroup>
      </Container>
    )
  }
}
