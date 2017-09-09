import React from 'react';
import {
  ListGroup,
  Container } from 'reactstrap';
import Dashboard from '../pages/Dashboard';
import StudentPortfolioItem from './StudentPortfolioItem';
import axios from 'axios';

class StudentPortfolio extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [],
      inputValue: ""
    }
  }

  componentWillMount(){
    axios.get('http://www.mocky.io/v2/599644e9110000780ccc441c').then((response) => {
      let updatedState = this.state;
      updatedState.data = response.data;

      this.setState(updatedState)
    })
  }

  render(){
    return(
      <Container>
        <Dashboard />
        <ListGroup>
          {this.state.data.map((student, index)=>{
            return(
              <StudentPortfolioItem
                name={student.name}
                instrument={student.instrument}
                parent={student.parent}
                key={index}/>
            )
          })}
        </ListGroup>
      </Container>

    )
  }
}
export default StudentPortfolio;
