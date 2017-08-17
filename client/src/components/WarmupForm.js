import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap';

export default class WarmupForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      warmup: ""
    };

    this.updateWarmup = this.updateWarmup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>

      <FormGroup>
          <Label>Warm-up</Label>
          <Input type="text" value={this.state.warmup} onChange={this.updateWarmup} /><br/>
      </FormGroup>
      <Button>Submit Warm-up</Button>

      </Form>
    )
  }

  handleSubmit(e){
    e.preventDefault();
    let item = this.state.warmup;
    this.props.onWarmupSubmit(item);

    let updatedState = this.state;
    updatedState.warmup = "";
    this.setState(updatedState);
  }

  updateWarmup(e) {
    let updatedState = this.state;
    updatedState.warmup = e.target.value;
    this.setState(updatedState);
  }
}
