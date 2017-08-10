import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [],
      inputValue: ""
    }
  }

  render() {

    return (
      <Navigation />
    )
  }

}

export default App;
