import React from 'react';
import { Link } from 'react-router-dom';


class Links extends React.Component {

  render(){

    let linkStyle = {margin: '1em'}

    return(
      <div>
        <div style={{display: 'flex'}}>
          <div style={linkStyle}><Link to="/LandingPage">Studio</Link></div>
          <div style={linkStyle}><Link to="/Dashboard">Dashboard</Link></div>
        </div>
      </div>
  )}
}

export default Links;
