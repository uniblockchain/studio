import React from 'react';
import {
  ListGroupItem,
  ListGroup,
  Container } from 'reactstrap';
import Dashboard from './Dashboard';

class StudentsRoster extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [{name: "Sam"}]
    }
  }

  render(){
    return(
      <Container>
        <Dashboard />
        <ListGroup>
          <ListGroupItem>{this.state.data.name}</ListGroupItem>
        </ListGroup>

      </Container>
    )
  }
}
export default StudentsRoster;
