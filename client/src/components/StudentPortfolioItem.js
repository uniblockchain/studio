import React from 'react';
import {
  ListGroupItem,
  Container } from 'reactstrap';

class StudentPortfolioItem extends React.Component {
  render(){
    return(
      <Container>
          <ListGroupItem>
            <div><span>Name: {this.props.name}</span></div>
          </ListGroupItem>
          <ListGroupItem>
            <div><span>Instrument: {this.props.instrument}</span></div>
          </ListGroupItem>
          <ListGroupItem>
            <div><span>Parent: {this.props.parent}</span></div>
          </ListGroupItem>
          <hr/>
      </Container>
    )
  }
}
export default StudentPortfolioItem;
