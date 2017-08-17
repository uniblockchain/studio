import React from 'react';
import { FormGroup, ListGroup, Form, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

export default class LessonPlanner extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      inputValue: ""
    }
  }

  addLesson = (e) => {
    e.preventDefault()
    let lesson = this.state.inputValue;
    this.props.onLessonSubmit(lesson);

  }

    /* form-control height should be 48px */

  render(){
    return(
      <Form onSubmit={this.addLesson}>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Introduction</InputGroupAddon>
          <Input />
          <InputGroupAddon><Button>Add</Button></InputGroupAddon>
        </InputGroup>
      </FormGroup>
      <hr/>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Warm-up</InputGroupAddon>
          <Input />
          <InputGroupAddon><Button>Add</Button></InputGroupAddon>
        </InputGroup>
      </FormGroup>
      <hr/>
      <ListGroup>
      </ListGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Study</InputGroupAddon>
          <Input />
          <InputGroupAddon><Button>Add</Button></InputGroupAddon>
        </InputGroup>
      </FormGroup>
      <hr/>
      <ListGroup>
      </ListGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Repertoire</InputGroupAddon>
          <Input />
          <InputGroupAddon><Button>Add</Button></InputGroupAddon>
        </InputGroup>
      </FormGroup>
      <hr/>
      <FormGroup>
        <InputGroup>
        <InputGroupAddon>Conclusion</InputGroupAddon>
        <Input />
        <InputGroupAddon><Button>Add</Button></InputGroupAddon>
        </InputGroup>
      </FormGroup>
      <hr/>
      <ListGroup>
      </ListGroup>

      <Button>Submit Lesson</Button>

      </Form>
    )
  }
}
