import React from 'react';
import { Link } from 'react-router-dom';


class Links extends React.Component {

  render(){
    return(
      <div>
        <div style={{display: 'flex'}}>
          <div style={{margin: '1em'}}><Link to="/LandingPage">Studio</Link></div>
          <div style={{margin: '1em'}}><Link to="/Dashboard">Dashboard</Link></div>
        </div>
      </div>
  )}
}

export default Links;
