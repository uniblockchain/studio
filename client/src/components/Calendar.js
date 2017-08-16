import React from 'react';
import BigCalendar from 'react-big-calendar';
import globalize from 'globalize';

BigCalendar.setLocalizer(
  BigCalendar.globalizeLocalizer(globalize)
);

export default class Calendar extends React.Component {

  render(){
    return(
      <BigCalendar />
    )
  }
}
