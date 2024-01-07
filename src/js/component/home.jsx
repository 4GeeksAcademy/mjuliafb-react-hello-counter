import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



//create your first component
const Home = () => {
	return (
		<div className="counter d-flex justify-content-center">
			<div className="clock"><FontAwesomeIcon icon="fa-regular fa-clock" /></div>
			<div className="seventh">0</div>
			<div className="sixth">0</div>
			<div className="fifth">0</div>
			<div className="fourth">0</div>
			<div className="third">0</div>
			<div className="second" >0</div>
			<div className="first" >0</div>
		</div>
	);
};

export default Home;
