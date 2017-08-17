import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row } from 'reactstrap';
import HomeBanner from '../HomeBanner';

export default class LandingPage extends React.Component {

  render(){
    return(
      <Container>
        <Row>
          <Link style={{margin: "25px"}} to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
        </Row>
        <HomeBanner />
      </Container>
    )
  }
}
