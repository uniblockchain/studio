import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import Home from './Home';
import HomeBanner from './HomeBanner';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';



class Links extends React.Component {

  render(){
    return(
      <div>
        <div style={{display: 'flex'}}>
          <div style={{margin: '1em'}}><Link to="/HomeBanner">Studio</Link></div>
          <div style={{margin: '1em'}}><Link to="/Login">Login</Link></div>
          <div style={{margin: '1em'}}><Link to="/Register">Register</Link></div>
          <div style={{margin: '1em'}}><Link to="/Dashboard">Dashboard</Link></div>
        </div>
      </div>
  )}
}

export default Links;
