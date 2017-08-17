import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap';

export default class RepertoireForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      repertoire: ""
    };

    this.updateRepertoire = this.updateRepertoire.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>

      <FormGroup>
          <Label>Repertoire</Label>
          <Input type="text" value={this.state.repertoire} onChange={this.updateRepertoire} /><br/>
      </FormGroup>
      <Button>Submit Repertoire</Button>

      </Form>
    )
  }

  handleSubmit(e){
    e.preventDefault();
    let item = this.state.repertoire;
    this.props.onRepertoireSubmit(item);

    let updatedState = this.state;
    updatedState.repertoire = "";
    this.setState(updatedState);
  }

  updateRepertoire(e) {
    let updatedState = this.state;
    updatedState.repertoire = e.target.value;
    this.setState(updatedState);
  }
}
