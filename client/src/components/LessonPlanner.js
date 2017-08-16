import React from 'react';
import { ListGroup, ListGroupItem, Form, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

export default class LessonPlanner extends React.Component {

  render(){
    return(
      <Form>
      <InputGroup>
        <InputGroupAddon>Introduction</InputGroupAddon>
        <Input />
        <InputGroupAddon><Button>Add</Button></InputGroupAddon>
      </InputGroup>
      <hr/>
      <InputGroup>
        <InputGroupAddon>Warm-up</InputGroupAddon>
        <Input />
        <InputGroupAddon><Button>Add</Button></InputGroupAddon>
      </InputGroup>
      <hr/>
      <ListGroup>
      </ListGroup>
      <InputGroup>
        <InputGroupAddon>Study</InputGroupAddon>
        <Input />
        <InputGroupAddon><Button>Add</Button></InputGroupAddon>
      </InputGroup>
      <hr/>
      <ListGroup>
      </ListGroup>
      <InputGroup>
        <InputGroupAddon>Repertoire</InputGroupAddon>
        <Input />
        <InputGroupAddon><Button>Add</Button></InputGroupAddon>
      </InputGroup>
      <hr/>
      <InputGroup>
      <InputGroupAddon>Conclusion</InputGroupAddon>
      <Input />
      <InputGroupAddon><Button>Add</Button></InputGroupAddon>
      </InputGroup>
      <hr/>
      <ListGroup>
      </ListGroup>

      <Button>Submit Lesson</Button>

      </Form>
    )
  }
}