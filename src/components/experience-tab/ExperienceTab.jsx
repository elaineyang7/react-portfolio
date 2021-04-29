import React, { Component } from 'react';

import { jobs } from '../experience/experiece.json';

import './ExperienceTab.scss';

class ExperienceTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      content: jobs[0]
    };
  }

  handleTabClick(props) {
    
    this.setState ({
      tabIndex: props,
      content: jobs[props]
    })
  }

  render(){
    return (
      <div className="tab__container">
        <div className="tab">
          {jobs.map( (job, index) => (
            <button
              key={index}
              onClick={() => this.handleTabClick(index)}
              className={`job-btn ${index === this.state.tabIndex ? 'active-btn' : ''}`}
            >
              {job.company}
            </button>
          ))}
        </div>
        <div className="tab-content__container">
          <div className="tab__content">
            <h4>{this.state.content.company}</h4>
            <h3>{this.state.content.title}</h3>
            <p>{this.state.content.dates}</p>
            <ul>
              {this.state.content.duties.map( (duty, index) => (
                <li 
                  key={index}
                >
                  {duty}
                </li>
              ))}
            </ul>
            {this.state.content.skills.map( (skill, index) => (
              <button
                key={index}
                className="skill__btn"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceTab;