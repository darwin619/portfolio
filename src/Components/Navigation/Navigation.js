import React from 'react';
import './Navigation.scss';
import Dropdown from '../Dropdown/Dropdown';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true
		};
	}

	render() {
		const {homepage,project,skill} = this.props;
		
	return ( 
		<div className = {
		`${homepage ? 'navigation' : ''}
		 ${project ? 'navigation-project' : ''} 
		 ${skill ? 'navigation-skill' : ''} 
		 `} onClick={() => this.setState({hidden: !this.state.hidden})} >
  			<ul>
			    <li className="wrapper"><i className="fa fa-bars fa-2x" aria-hidden="true"></i></li>
  			</ul>
  			<div className="drop">
  			{
  				this.state.hidden ? null : <Dropdown them={skill} they={homepage} then={skill} />
  			}
		</div>
		</div>
		
);
}
}
export default Navigation;