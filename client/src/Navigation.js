import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import Home from './Home';
import HomeBanner from './HomeBanner';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Links from './Links';
import Routes from './Routes';
import { Container, Col, Row } from 'reactstrap';

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
