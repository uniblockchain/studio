import React, { Component } from 'react';
import App from './App.js';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class RegisterPage extends Component {

  constructor(){
    super()
    this.state = {
      data: [],
      inputValue: ""
    }
  }

  render(){
  return(

    <div>
      <h2>Register</h2>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <div><Label for="newEmail">Email</Label></div>
          <div><Input type="email" name="email"/></div>
          <div><Label for="newInstrument">Instrument</Label></div>
          <div><Input type="text" name="instrument"  /></div>
          <div><Label for="newUsername">Username</Label></div>
          <div><Input type="text" name="username"  /></div>
        </FormGroup>
        <FormGroup>
          <div><Label for="exampleSelectMulti">Select One</Label></div>
          <div>
            <Input type="select" name="select">
              <option>Student</option>
              <option>Parent</option>
              <option>Teacher</option>
            </Input>
          </div>
        </FormGroup>
        <FormGroup>
          <div><Label for="passwordEntry">Password</Label></div>
          <div><Input type="password" name="password" /></div>
          <div><Label for="passwordConfirm">Confirm Password</Label></div>
          <div><Input type="password" name="password" /></div>
        </FormGroup>
        <div><button>Submit</button></div>
      </Form>
    </div>

  )}

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //
  // }

}

export default RegisterPage;
