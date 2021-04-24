import React, { Component } from 'react';

import { jobs } from './experiece.json';

import './ExperienceTab.scss';

class ExperienceTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }

  handleTabClick = (props) => {
    
    this.setState ({
      tabIndex: props
    })
  }

  render(){
    return (
      <div className="tab__container">
        <div className="tab">
          {jobs.map( (job, index) => (
            <button
              key={index}
              //onClick={() => this.setState.tabIndex(index) && this.setState.jobInfo(job.title)}
              onClick={() => this.handleTabClick(index)}
              className={`job-btn ${index === this.state.tabIndex ? 'active-btn' : ''}`}
            >
              {job.company}
            </button>
          ))}
        </div>
        <div className="tab-content__container">
          <h3>{this.state.jobInfo}</h3>
        </div>
      </div>
    );
  }
}

export default ExperienceTab;