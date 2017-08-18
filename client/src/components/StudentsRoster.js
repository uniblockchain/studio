import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
import Dashboard from '../pages/Dashboard';
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
    axios.get("http://www.mocky.io/v2/599644e9110000780ccc441c").then((response) => {
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
              <Link onClick={this.getStudent} to={'/StudentPortfolio/' + (index + 1)}><StudentListItem name={student.name} key={index}/></Link>
            )
          })}
        </ListGroup>
      </div>
  )}
}

export default StudentsRoster;
