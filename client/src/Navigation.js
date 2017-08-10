import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


class Navigation extends Component {
  render(){

  return(
    <Router>
      <div>
        <div>
          <div style={{display: 'flex'}}>
            <div style={{margin: '1em'}}><Link to="/">Studio</Link></div>
            <div style={{margin: '1em'}}><Link to="/Login">Login</Link></div>
            <div style={{margin: '1em'}}><Link to="/Register">Register</Link></div>
          </div>
        </div>
        <hr/>
        <Route path="/Login" component={LoginPage}/>
        <Route path="/Register" component={RegisterPage}/>
        <Route path="/" component={Home}/>
      </div>
    </Router>
  )}

}

export default Navigation;
