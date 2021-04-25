import React, { Component } from 'react';

import SectionTitle from '../section-title/SectionTitle';
import ExperienceTab from '../experience-tab/ExperienceTab';

import './experience.scss';

class Experience extends Component{
  
  render(){
    return(
      <section className="experience" id="experience">
        <SectionTitle />
        <ExperienceTab onClick={this.click} />
      </section>
    );
  }
}
export default Experience;