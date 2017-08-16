import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class UpcomingLessons extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem disabled tag="a" href="#">2012-04-23T18:25:43.511Z</ListGroupItem>
        <ListGroupItem tag="a" href="#">2012-04-23T18:25:43.511Z</ListGroupItem>
        <ListGroupItem tag="a" href="#">2012-04-23T18:25:43.511Z</ListGroupItem>
        <ListGroupItem tag="a" href="#">2012-04-23T18:25:43.511Z</ListGroupItem>
        <ListGroupItem tag="a" href="#">2012-04-23T18:25:43.511Z</ListGroupItem>
      </ListGroup>
    );
  }
}
