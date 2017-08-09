import React, { Component } from 'react';
import axios from 'axios';

// import Lesson from 'Lesson';
// import Student from 'Student';
// import Teacher from 'Teacher';
import '../css/App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: {
          teacher: {
            name: "",
            instrument: "",},
          student: {
            name:
          }
        }
      },
      inputValue: ""
    }
  }

  render() {
    return (
      <p>Rendering Test</p>
    )
  }
}

export default App;
