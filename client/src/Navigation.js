import React, { Component } from 'react';
import {
  BrowserRouter as Router } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import Links from './Links';
import Routes from './Routes';
import { Container } from 'reactstrap';

class Navigation extends Component {
  render(){

  return(
    <Container>
      <Router>
        <div>
          <Links />
          <hr/>
          <Routes>
            <RegisterPage onSubmitDo={this.postUser}/>
          </Routes>
        </div>
      </Router>
    </Container>
  )}

  // postUser = () => {
  //   let newUser =
  // }

}

export default Navigation;
