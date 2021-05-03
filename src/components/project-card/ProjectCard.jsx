import React, {useEffect} from 'react';
//import AOS from 'aos';

import SkillButton from '../skill-button/SkillButton';

import './ProjectCard.scss';

const ProjectCard = ({ classname, project }) => {

  /*useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);*/
  
  let span;
  let heading;
  if (classname === 'project') {
    span = <span className="project__num">{project.number}</span>
    heading = <h3>{project.title}</h3>
  } else {
    span = ""
    heading = <h4>{project.title}</h4>
  }
    
  return(
    <div className={classname}>
      <div className={classname + `__imgBox`}>
        <img src={project.image_link} alt={project.title} />
      </div>
      <div className={classname + `__content`}>
        {span}
        {heading}
        <p className={classname + `__desc`}>{project.description}</p>
        <div className="skills">
          {project.skills.map( (skill, index) => (
            <SkillButton key={index} classname={classname + `__skillBtn`} skill={skill} />
          ) )}
        </div>
        <div class="view">
          <a className={classname + `__viewMore`} href={project.view}>View More</a>
          <a className="github" href={project.github}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;