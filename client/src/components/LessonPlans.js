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
        <WarmupForm onWarmupSubmit={this.showWarmup}/>
          <ul>
            {this.state.data.map((item, index) => {
              return(
                <Warmup warmup={item.warmup} />
              )
            })}
          </ul>
      </div>
    )
  }

    showWarmup = (warmup) => {
      console.log('1 warmup callback: ' + warmup)
      let updatedState = this.state;
      console.log('2 updatedState set: ' + updatedState)
      updatedState.data.push({warmup: warmup});
      console.log('3 state data pushed')
      this.setState(updatedState);
      console.log('4 operation complete, state is: ' + this.state);
    }

  }
