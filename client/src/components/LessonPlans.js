import React from 'react';
import WarmupForm from './WarmupForm'
import Warmup from './Warmup'

export default class LessonPlans extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [
        {warmup: "Scales"},
        {warmup: "Long-tones"}
    ]}
  }

  render() {

    return(
      <div>
        <WarmupForm onWarmupSubmit={this.createWarmup}/>
          <ul>
            {this.state.data.map((activity, index) => {
              return(
                <Warmup item={activity.warmup} key={index}/>
              )
            })}
          </ul>
      </div>
    )
  }

    createWarmup = (item) => {
      let updatedState = this.state;
      updatedState.data.push({warmup: item});
      this.setState(updatedState);
    }

  }
