import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import Home from './Home';
import HomeBanner from './HomeBanner';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './Dashboard';
import StudentPortfolio from './components/StudentPortfolio';
import StudentsRoster from './components/StudentsRoster';
import TeacherProfile from './components/TeacherProfile';
import TeachersRoster from './components/TeachersRoster';

class Routes extends React.Component {

  render(){
    return(
      <div>
        <Route path="/Dashboard" component={Dashboard}/>
        <Route path="/Login" component={LoginPage}/>
        <Route path="/Register" component={RegisterPage}/>
        <Route path="/" component={Home}/>
        <Route path="/HomeBanner" component={HomeBanner}/>
        <Route path="/StudentPortfolio" component={StudentPortfolio}/>
        <Route path="/StudentsRoster" component={StudentsRoster}/>
        <Route path="/TeacherProfile" component={TeacherProfile}/>
        <Route path="/TeachersRoster" component={TeachersRoster}/>
      </div>
    )
  }
}

export default Routes;
