import React from 'react';

export default class BackgroundImage extends React.Component {
  render(){

    const pageStyle = {
      background: 'url(http://www.michaeloysterpianostudio.com/wp-content/uploads/2015/10/piano_1100px.jpg) noRepeat center fixed',
      height: '100vh',
      backgroundSize: 'cover',
      fontFamily: 'Spectral'
    };

    return(
      <div style={pageStyle}></div>
    )
  }
}
