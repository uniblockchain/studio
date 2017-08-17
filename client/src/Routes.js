import React from 'react';
import { Route } from 'react-router-dom';
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
import ContactForm from './components/ContactForm';
import Calendar from './components/Calendar';
// import LessonPlanner from './components/LessonPlanner';
import LessonPage from './pages/LessonPage';
import LandingPage from './pages/LandingPage';

class Routes extends React.Component {

  render(){
    return(
      <div>
        {/* <Route path="/LessonPlanner" component={LessonPlanner}/> */}
        <Route path="/Dashboard" component={Dashboard}/>
        <Route path="/Login" component={LoginPage}/>
        <Route path="/Register" component={RegisterPage}/>
        <Route path="/" component={Home}/>
        <Route path="/HomeBanner" component={HomeBanner}/>
        <Route path="/Calendar" component={Calendar}/>
        <Route path="/StudentPortfolio" component={StudentPortfolio}/>
        <Route path="/Students" component={StudentsRoster}/>
        <Route path="/StudentDashboard" component={StudentDashboard}/>
        <Route path="/TeacherProfile" component={TeacherProfile}/>
        <Route path="/TeachersRoster" component={TeachersRoster}/>
        <Route path="/TeacherDashboard" component={TeacherDashboard}/>
        <Route path="/ContactForm" component={ContactForm}/>
        <Route path="/LessonPage" component={LessonPage}/>
        <Route path="/LandingPage" component={LandingPage}/>
      </div>
    )
  }
}

export default Routes;
