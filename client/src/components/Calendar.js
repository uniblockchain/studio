import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../events';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import {Container} from 'reactstrap';
import Dashboard from '../pages/Dashboard'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

export default class Calendar extends React.Component {

  render(){
    return(
      <div>
        <Dashboard/>
        <BigCalendar
          {...this.props}
          events={events}
          views={allViews}
          defaultDate={new Date(2017, 7, 18)}/>
      </div>
    )
  }
}
