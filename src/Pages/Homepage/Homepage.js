import React from 'react';
import './Homepage.scss';
import Profile from './Profile.jpg';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';


const Homepage = ({history}) => {
		return(
			<div className="homepage">
			<Header homepage/>
			<div className="homepage-container">
				<div>
					<img src={Profile} alt="profile" className="profileimage"/>
				</div>
			<div className="text-box">
				<h1 className="title">Hi, I'm Shivam Aima.</h1>
			  	<span className="subtitle">A Frontend Developer</span>
			 </div>
			 <div className="buttons-container">
			 <div className="buttons">
			 <CustomButton onClick={() => history.push('/skills')} >My Skills</CustomButton>
			 <CustomButton onClick={() => history.push('/projects')} >Portfolio</CustomButton>
			 <CustomButton>Resume</CustomButton>
			 <CustomButton>Linkedin</CustomButton>
			 <CustomButton>Github</CustomButton>
			 </div>
			 </div>
			 </div>
			</div>
			);
}

export default Homepage;