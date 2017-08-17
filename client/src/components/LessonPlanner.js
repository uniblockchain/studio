import React from 'react';
import { FormGroup, ListGroup, Form, Button, Label, Input } from 'reactstrap';

export default class LessonPlanner extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      introduction: "",
      warmup: "",
      study: "",
      repertoire: "",
      conclusion: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({introduction: event.target.value});
  }

  handleSubmit(event){
    console.log('introduction was submitted: ' + this.state.introduction);
    console.log('warmup was submitted: ' + this.state.warmup);
    console.log('study was submitted: ' + this.state.study);
    console.log('repertoire was submitted: ' + this.state.repertoire);
    console.log('conclusion was submitted: ' + this.state.conclusion);
    event.preventDefault();
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
      <FormGroup>
          <Label>Introduction</Label>
          <Input type="text" value={this.state.introduction} onChange={this.handleChange} /><br/>
      </FormGroup>
      <hr/>
      <FormGroup>
          <Label>Warm-up</Label>
          <Input type="text" value={this.state.warmup} onChange={this.handleChange} /><br/>
      </FormGroup>
      <hr/>
      <ListGroup>
      </ListGroup>
      <FormGroup>
          <Label>Study</Label>
          <Input type="text" value={this.state.study} onChange={this.handleChange} /><br/>
      </FormGroup>
      <hr/>
      <ListGroup>
      </ListGroup>
      <FormGroup>
          <Label>Repertoire</Label>
          <Input type="text" value={this.state.repertoire} onChange={this.handleChange} /><br/>
      </FormGroup>
      <hr/>
      <FormGroup>
        <Label>Conclusion</Label>
        <Input type="text" value={this.state.conclusion} onChange={this.handleChange} /><br/>
      </FormGroup>
      <hr/>
      <ListGroup>
      </ListGroup>

      <Button>Submit Lesson</Button>

      </Form>
    )
  }


}
