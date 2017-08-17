import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginPage extends Component {

  constructor(){
    super()
    this.state = {
      data: [],
      inputValue: ""
    }
  }

  render(){
    return(
      <Container>
        <h2>Login</h2>
      <Form>
        <FormGroup>
          <div><Label for="loginEmail">Email</Label></div>
          <div><Input type="email" name="email"/></div>
          <div><Label for="loginPassword">Password</Label></div>
          <div><Input type="text" name="instrument"  /></div>
        </FormGroup>
        <div><button type="submit">Submit</button></div>
      </Form>
      </Container>
    )

    // inputUpdate = (e) => {
    //
    // }
    //
    // sendLoginCredentials = (e) => {
    //   e.preventDefault();
    //   this. =
    // }

  }
}

export default LoginPage;
