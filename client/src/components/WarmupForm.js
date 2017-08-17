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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({warmup: event.target.value});
  }

  handleSubmit(event){
    console.log('warmup: ' + this.state.warmup);
    event.preventDefault();

    let warmup = this.state.warmup;
    this.props.onWarmupSubmit(warmup);

    let updatedState = this.state;
    updatedState.warmup = "";
    this.setState(updatedState);
    console.log(this.state);
  }

  onWarmupSubmit(warmup){
    
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
