import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Trafficlight from "./trafficlight.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			
			<Trafficlight />
			<p>
				Made by Breno in {" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
