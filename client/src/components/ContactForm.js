import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class ContactForm extends React.Component {
  render(){
    return(

      <Form>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email"/>
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <Input type="textarea"/>
        </FormGroup>
      </Form>
    )
  }
}
