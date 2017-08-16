import React from 'react';
import {
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col } from 'reactstrap';
import Dashboard from '../pages/Dashboard';

class StudentPortfolio extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <Container>
        <Dashboard />

        <ListGroup>
              <ListGroupItem>Student Name</ListGroupItem>
              <ListGroupItem>Student Instrument</ListGroupItem>
              <ListGroupItem>Student's Teacher</ListGroupItem>
              <ListGroupItem>Student's Parent</ListGroupItem>
              <ListGroupItem>Student's Lessons</ListGroupItem>
        </ListGroup>
      </Container>

    )
  }
}
export default StudentPortfolio;
