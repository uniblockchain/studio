import React, { Component } from 'react';
import App from './App.js';

class RegisterPage extends Component {
  render(){
  return(
    <div>
      <h2>Register</h2>
        <div><input type="text" placeholder="name" /></div>
        <div><input type="text" placeholder="instrument" /></div>
        <div><input type="text" placeholder="username" /></div>
        <div><select>
          <option value="select">Select one...</option>
          <option value="student">Student</option>
          <option value="parent" >Parent</option>
          <option value="teacher" >Teacher</option>
        </select></div>
        <div><input type="password" placeholder="password" /></div>
        <div><input type="password" placeholder="confirm password" /></div>
    </div>
  )}
}

export default RegisterPage;
