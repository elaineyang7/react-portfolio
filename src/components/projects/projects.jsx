import React from 'react';

import { projects } from './projects.json';

import SectionTitle from '../section-title/SectionTitle';
import ProjectCard from '../project-card/ProjectCard';

import './projects.scss';

const Projects = () => {
  let coreProjects = [];
  let otherProjects = [];
  for (let i = 0; i < 3; i++) {
    coreProjects.push(<ProjectCard key={i} classname={`project`} project={projects[i]} />)
  }
  for (let i = 3; i < projects.length; i++) {
    otherProjects.push(<ProjectCard key={i} classname={`project-sm`} project={projects[i]} />)
  }


  return(
    <section className="projects" id="projects">
      <SectionTitle title={`Projects`} />
      <div className="project__container">
        {coreProjects}
      </div>
      <div className="projects-sm">
        {otherProjects}
      </div>
    </section>
  );
}

export default Projects;