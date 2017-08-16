import React from 'react';
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  Col} from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import StudentPortfolio from './components/StudentPortfolio';



class Dashboard extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <Container>
        <Row>
          <Col/>
          <Col>
            <ButtonGroup>
              <Link to='/StudentsRoster'><Button>Students Roster</Button></Link>
              <Link to='/TeacherProfile'><Button>Teacher Profile</Button></Link>
              <Link to='/TeachersRoster'><Button>Teachers Roster</Button></Link>
              <Link to='/Calendar'><Button>Calendar</Button></Link>
            </ButtonGroup>
            <hr/>
          </Col>
          <Col/>
        </Row>
      </Container>
    )
  }
}
export default Dashboard;
