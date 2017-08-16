import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import Home from './Home';
import HomeBanner from './HomeBanner';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import StudentPortfolio from './components/StudentPortfolio';
import StudentsRoster from './components/StudentsRoster';
import StudentDashboard from './pages/StudentDashboard';
import TeacherProfile from './components/TeacherProfile';
import TeachersRoster from './components/TeachersRoster';
import TeacherDashboard from './pages/TeacherDashboard';

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
        <Route path="/StudentDashboard" component={StudentDashboard}/>
        <Route path="/TeacherProfile" component={TeacherProfile}/>
        <Route path="/TeachersRoster" component={TeachersRoster}/>
        <Route path="/TeacherDashboard" component={TeacherDashboard}/>
      </div>
    )
  }
}

export default Routes;
