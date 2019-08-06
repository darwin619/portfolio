import React from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import ProjectData from './ProjectData';
import './Projects.scss';
import Header from '../../Components/Header/Header';

const Projects = () => {
	return (
		<div className="outer">
		<Header projects />
		<div className="projectcollection">
		{
			ProjectData.map(project => <ProjectCard key={project.id} project={project} />)
		}
		</div>
		</div> 
		);
} 

export default Projects;