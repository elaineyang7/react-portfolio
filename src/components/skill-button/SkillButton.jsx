import React from 'react';

import './SkillButton.scss';

const SkillButton = ({ classname, skill }) => {
  return (
    <button className={classname}>{skill}</button>
  );
}

export default SkillButton;