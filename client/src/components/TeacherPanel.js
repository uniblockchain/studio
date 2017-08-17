import React from 'react';
import {
  Container,
  Button,
  ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class TeacherPanel extends React.Component {

  render(){
    return(
      <Container>
        <ButtonGroup>
          <Link style={{margin: "25px"}} to='/Students'><Button>Students</Button></Link>
          {/* <Link style={{margin: "25px"}} to='/ContactForm'><Button>Contact Student/Parent</Button></Link> */}
          {/* <Link style={{margin: "25px"}} to='/Calendar'><Button>View Lesson Schedule</Button></Link> */}
          <Link style={{margin: "25px"}} to='/LessonPage'><Button>Plan a Lesson</Button></Link>
          <Link style={{margin: "25px"}} to='/Lessons'><Button>See Lessons</Button></Link>
          <Link to='/PaymentHistory'><Button>Payment History</Button></Link>
          <hr/>
        </ButtonGroup>
      </Container>
    )
  }
}
