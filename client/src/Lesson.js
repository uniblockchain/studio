import React, { Component } from 'react';
import logo from './logo.svg';
import './Lesson.css';

class Lesson extends Component {
  render() {
    return (
      <div className="Lesson">
        <div className="Lesson-header">
          <img src={logo} className="Lesson-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Lesson-intro">
          To get started, edit <code>src/Lesson.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Lesson;
