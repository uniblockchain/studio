import React from 'react';
import { Container } from 'reactstrap';
import Dashboard from '../pages/Dashboard';

class TeachersRoster extends React.Component {
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
export default TeachersRoster;
