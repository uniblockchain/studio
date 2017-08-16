import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import {
  ListGroupItem,
  ListGroup,
  Container } from 'reactstrap';
import Dashboard from '../Dashboard';
import StudentListItem from './StudentListItem';
import axios from 'axios';

class StudentsRoster extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      inputValue: ""
    }
  }

  componentWillMount(){
    axios.get("http://www.mocky.io/v2/59945c581100002d0272307a").then((response) => {
      let updatedState = this.state;
      updatedState.data = response.data;
      this.setState(updatedState)
    })
  }

  render(){
    return(
      <div>
        <Dashboard/>
        <ListGroup>
          {this.state.data.map((student, index) => {
            return(
              <Link to={'/StudentPortfolio/' + (index + 1)}><StudentListItem name={student.name} key={index}/></Link>
            )
          })}
        </ListGroup>
      </div>
  )}
}

export default StudentsRoster;
