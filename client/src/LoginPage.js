import React, { Component } from 'react';
import App from './App.js';

class LoginPage extends Component {

  constructor(){
    super()
    this.state = {
      data: [],
      inputValue: ""
    }
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        <div>
          <form onSubmit={this.sendLoginCredentials}>
            <div><input type="text" placeholder="username" value={this.inputValue} onChange={this.inputUpdate}/></div>
            <div><input type="password" placeholder="password"/></div>
            <div><button type="submit">Submit</button></div>
          </form>
        </div>
      </div>
    )

    // inputUpdate = (e) => {
    //
    // }
    // 
    // sendLoginCredentials = (e) => {
    //   e.preventDefault();
    //   this. =
    // }

  }
}

export default LoginPage;
