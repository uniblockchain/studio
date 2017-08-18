import React from 'react';
import {
  ListGroupItem,
  Container } from 'reactstrap';

class StudentListItem extends React.Component {
  render(){
    return(
      <Container>
          <ListGroupItem>
            <div><span>{this.props.name}</span></div>
          </ListGroupItem>
      </Container>
    )
  }
}
export default StudentListItem;
