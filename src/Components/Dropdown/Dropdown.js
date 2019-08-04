import React from 'react';
import './Dropdown.scss';
import { Link } from 'react-router-dom';

const Dropdown = ({them}) => {
	return ( 
		<div className = {`${them ? 'side-down' : 'navdown'} `} >
		<div className="exit">
			<ul>
			    <li className="exitmenu"><i className="fa fa-times fa-2x" aria-hidden="true"></i></li>
  			</ul>
		</div>
		 <div className = {`${them ? 'side-skill' : 'sidenav'}`}  >
		 		<Link to='/' >Home</Link>
				<Link to='/skills' >Skills</Link>
				<Link to='/projects' >Portfolio</Link>
				<a href="google.com">Resume</a>
				<a href="google.com">Linkedin</a>
				<a href="google.com">Github</a>	
		 </div>
		 </div>
	)
}
export default Dropdown;