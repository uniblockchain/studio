import React from 'react';
import { Container } from 'reactstrap';
import Dashboard from '../Dashboard';

class TeacherProfile extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <Container>
        <Dashboard />

      </Container>
    )
  }
}
export default TeacherProfile;