import React from 'react';
import './SocialIcons.scss';

const SocialIcons = () => {
	return ( 
		<div className="wrapper">
  			<ul>
			    <li className="facebook"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
			    <li className="twitter"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></li>
			    <li className="instagram"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
			    <li className="google"><i className="fa fa-google fa-2x" aria-hidden="true"></i></li>
			    <li className="whatsapp"><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></li>
  			</ul>
		</div>
	)
}
export default SocialIcons;