import React, { Component } from 'react';
import Navigation from './Navigation';


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
