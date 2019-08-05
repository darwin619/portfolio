import React from 'react';
import './Header.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
import Navigation from '../Navigation/Navigation';
import DropDown from '../DropDown/DropDown';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true
		};
	}

	render() {
		const {homepage, projects, skills} = this.props;
		return (
			<div className="header">
			    {
  				this.state.hidden ? null : <DropDown />
			    }
					<div className="home" onClick={() => this.setState({hidden: !this.state.hidden})}>
					<Navigation />
					</div>

					{
						homepage 
						? (<div className="social"> <SocialIcons /></div>)
						: ""
					}
					{
						skills
						? (<div className="header-title">My Skills</div>)
						: ""
					}
					{
						projects
						? (<div className="header-title">My Projects</div>)
						: ""
					}
					
			</div>
			
			);
	}
}

export default Header;