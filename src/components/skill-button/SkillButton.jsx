import React from 'react';

const SkillButton = ({ classname, skill }) => {
  return (
    <button className={classname}>{skill}</button>
  );
}

export default SkillButton;