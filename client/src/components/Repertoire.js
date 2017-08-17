import React, { Component } from 'react';

export default class Repertoire extends Component {

  render(){
    return(
      <li>
        <span>{this.props.item}</span>
      </li>
    )
  }

}
