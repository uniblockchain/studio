import React, { Component } from 'react';
import logo from './logo.svg';
import './Student.css';

class Student extends Component {
  render() {
    return (
      <div className="Student">
        <div className="Student-header">
          <img src={logo} className="Student-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Student-intro">
          To get started, edit <code>src/Student.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Student;
