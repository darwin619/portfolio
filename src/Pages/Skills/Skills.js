import React from 'react';
import './Skills.scss';
import SkillData from './SkillData';
import SkillCard from '../../Components/SkillCard/SkillCard';
import Navigation from '../../Components/Navigation/Navigation';

const Skills = () => {
	return (
		<div className="skill-page">
			<div className="skills">
				<h1 className="title">My Skills</h1>
			<div className="container">
			{
				SkillData.map(item => <SkillCard key={item.id} item={item} />)
			}
			</div>
    	    </div>
    	    <Navigation skill />
    	</div>
		);
}

export default Skills;