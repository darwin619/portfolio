import React from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import ProjectData from './ProjectData';
import './Projects.scss';
import Navigation from '../../Components/Navigation/Navigation';

const Projects = () => {
	return (
		<div className="outer">
		<div className="projects">
		<h1 className="title">My Projects</h1>
		<div className="projectcollection">
		{
			ProjectData.map(project => <ProjectCard key={project.id} project={project} />)
		}
		</div>
		</div> 
		<Navigation project />
		</div>
		);
} 

export default Projects;