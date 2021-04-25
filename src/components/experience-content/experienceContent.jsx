import React from 'react';

import { jobs } from '../experience/experiece.json';

const ExperienceContent = ({tabIndex}) => {
  <div className="tab__content--container">
    <div className="tab__content">
      <h3>{jobs[tabIndex].title}</h3>
    </div>
  </div>
}

export default ExperienceContent;