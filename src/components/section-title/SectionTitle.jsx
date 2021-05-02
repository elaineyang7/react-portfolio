import React from 'react';

import './SectionTitle.scss';

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="underline"></div>
    </div>
  );
}

export default SectionTitle;