import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap';

export default class StudyForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      study: ""
    };

    this.updateStudy = this.updateStudy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>

      <FormGroup>
          <Label>Study</Label>
          <Input type="text" value={this.state.study} onChange={this.updateStudy} /><br/>
      </FormGroup>
      <Button>Submit Study</Button>

      </Form>
    )
  }

  handleSubmit(e){
    e.preventDefault();
    let item = this.state.study;
    this.props.onStudySubmit(item);

    let updatedState = this.state;
    updatedState.study = "";
    this.setState(updatedState);
  }

  updateStudy(e) {
    let updatedState = this.state;
    updatedState.study = e.target.value;
    this.setState(updatedState);
  }
}
