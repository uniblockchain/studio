import React, { Component } from 'react';
import App from './App.js';

class LoginPage extends Component {

  render(){
    return(
      <div>
        <h2>Login</h2>
          <div><input type="text" placeholder="username" /></div>
          <div><input type="password" placeholder="password" /></div>
      </div>
    )
  }
}

export default LoginPage;
