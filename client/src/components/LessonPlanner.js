import React from 'react';
import { FormGroup, ListGroup, Form, Button, Label, Input } from 'reactstrap';

export default class LessonPlanner extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    console.log('value: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
        <Form onSubmit={this.handleSubmit}>

        <FormGroup>
            <Label>Warm-up</Label>
            <Input type="text" value={this.state.warmup} onChange={this.handleChange} /><br/>
        </FormGroup>
        <Button>Submit Warm-up</Button>

        </Form>
    )
  }


}
