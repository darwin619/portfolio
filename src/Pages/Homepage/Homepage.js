import React, { useState } from 'react';
import './Homepage.scss';
import Profile from './Profile.jpg';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import Thanos from "react-thanos";
import InfinityGauntlet from "react-thanos-snap";
import logo from "./HomepageSnap/download.png";


const Homepage = ({history}) => {
	const [snap, setSnap] = useState(false);
		return(

			<div className="homepage">
			<InfinityGauntlet snap={snap}>
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
			 	  
			</InfinityGauntlet>
			 <div className="snapButton">
			 		<button onClick={() => setSnap(!snap)}>
		          <img src={logo} />
		        </button>
					</div>
			</div>
			);
}

export default Homepage;