import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import HomeBanner from './HomeBanner';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import StudentPortfolio from './components/StudentPortfolio';
import StudentsRoster from './components/StudentsRoster';
import Calendar from './components/Calendar';
import LessonPlans from './components/LessonPlans';
import LandingPage from './pages/LandingPage';

class Routes extends React.Component {

  render(){
    return(
      <div>
        <Route path="/Dashboard" component={Dashboard}/>
        <Route path="/Login" component={LoginPage}/>
        <Route path="/Register" component={RegisterPage}/>
        <Route path="/" component={Home}/>
        <Route path="/HomeBanner" component={HomeBanner}/>
        <Route path="/Calendar" component={Calendar}/>
        <Route path="/StudentPortfolio" component={StudentPortfolio}/>
        <Route path="/StudentsRoster" component={StudentsRoster}/>
        <Route path="/LandingPage" component={LandingPage}/>
        <Route path="/LessonPlans" component={LessonPlans}/>
      </div>
    )
  }
}

export default Routes;
