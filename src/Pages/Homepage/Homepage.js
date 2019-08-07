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
			<Header homepage/>
			<InfinityGauntlet snap={snap}>
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
			 <CustomButton  onClick={() => window.open(``, '_blank') } >Resume</CustomButton>
			 <CustomButton  onClick={() => window.open(`https://bit.ly/shivam_linkedin`, '_blank') }>Linkedin</CustomButton>
			 <CustomButton  onClick={() => window.open(`https://bit.ly/shivam_github`, '_blank') } >Github</CustomButton>
			 </div>
			 </div>
			 </div>
			 </InfinityGauntlet>



			 <Thanos  className="thanos"
					  onSnap={() => setSnap(!snap) }
					  onSnapReverse={() => setSnap(!snap) }
					/>		
			 
			 <div className="text">
			 			 
				    <h1 className="made">Copyright©2019, React is</h1>
				    <i class="fa fa-heart-o heart-off" aria-hidden="true"></i>
			</div>
	
			</div>
			);
}

export default Homepage;