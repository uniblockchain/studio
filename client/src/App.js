import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';


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
