import React, { Component } from 'react';
import {
  BrowserRouter as Router } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import Links from './Links';
import Routes from './Routes';
import { Container } from 'reactstrap';

class Navigation extends Component {
  constructor(props){
    super(props)

  }
  render(){

  return(
    <Container>
      <Router>
        <div>
          <Links />
          <hr/>
          <Routes />
        </div>
      </Router>
    </Container>
  )}

}

export default Navigation;
