import React from 'react';
import './StarWars.scss';
import starwars from './starwars.mp3';

const StarWars = () => {
	return ( 
		<div className="starwars">
		<div className="galaxy">
			<div className="logo">
			<img src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png/revision/latest?cb=20141129122237" />
			</div>
			<div className="fall">
				<div className="away">
				<p>A long time ago in a galaxy far, far away...</p>
				</div>
			<p>
			<i>EPISODE IV A NEW HOPE</i>
			It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. 

		Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy….</p>	
			</div>
		</div>
		<audio preload="auto" autoPlay>
		  <source src={starwars} type="audio/mpeg" />
		</audio>
		</div>
  			
	)
}
export default StarWars;