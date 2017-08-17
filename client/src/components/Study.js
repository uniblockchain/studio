import React, { Component } from 'react';

export default class Study extends Component {

  render(){
    return(
      <li>
        <span>{this.props.item}</span>
      </li>
    )
  }

}
