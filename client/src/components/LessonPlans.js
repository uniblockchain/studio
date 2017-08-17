import React from 'react';
import WarmupForm from './WarmupForm'
import Warmup from './Warmup'

export default class LessonPlans extends React.Component {
  constructor(){
    super()
    this.state = {
      warmup: []
    }
  }

  render(){
    return(
      <div>
        <WarmupForm onWarmupSubmit={this.showWarmup}/>
          <ul>
            {this.state.warmup.map((warmup, index) => {
              return(
                <Warmup data={{warmup: warmup}}/>
              )
            })}
          </ul>
      </div>

    )

    const showWarmup = (warmup) => {
      let updatedState = this.state;
      updatedState.data.push({warmup: warmup});
      this.setState(updatedState);
    }

  }
}
