import React from 'react';
import WarmupForm from './WarmupForm';
import Warmup from './Warmup';
import StudyForm from './StudyForm';
import Study from './Study';
import RepertoireForm from './RepertoireForm';
import Repertoire from './Repertoire';

export default class LessonPlans extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [
        {
          warmup: "Scales",
          study: "Anderson Etudes",
          repertoire: "Sancan Sonate"
        },
        {
          warmup: "Long-tones",
          study: "Sousseman Studies",
          repertoire: "Prokofiev Sonata"
        }
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
        <StudyForm onStudySubmit={this.createStudy}/>
        <ul>
          {this.state.data.map((activity, index) => {
            return(
              <Study item={activity.study} key={index}/>
            )
          })}
        </ul>
        <RepertoireForm onRepertoireSubmit={this.createRepertoire}/>
        <ul>
          {this.state.data.map((activity, index) => {
            return(
              <Repertoire item={activity.repertoire} key={index}/>
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

    createStudy = (item) => {
      let updatedState = this.state;
      updatedState.data.push({study: item});
      this.setState(updatedState);
    }

    createRepertoire = (item) => {
      let updatedState = this.state;
      updatedState.data.push({repertoire: item});
      this.setState(updatedState);
    }

  }
