import React, { Component } from 'react';
import logo from './logo.svg';
import './Teacher.css';

class Teacher extends Component {
  render() {
    return (
      <div className="Teacher">
        <div className="Teacher-header">
          <img src={logo} className="Teacher-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Teacher-intro">
          To get started, edit <code>src/Teacher.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Teacher;
