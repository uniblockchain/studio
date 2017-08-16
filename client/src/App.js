import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


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
      <div>
        <Navigation />
      </div>
    )
  }

}

export default App;
