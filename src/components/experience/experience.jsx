import React from 'react';

import SectionTitle from '../section-title/SectionTitle';
import ExperienceTab from '../experience-tab/ExperienceTab';

import './experience.scss';

const Experience = () => {
  return(
    <section className="experience" id="experience">
      <SectionTitle title={`Experience`} />
      <ExperienceTab />
    </section>
  );
}
export default Experience;