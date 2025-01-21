import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Lamp from "./Lamp";

//create your first component
const Home = () => {
	
	return (
		<div className="text-center bg-dark  mx-4 d-flex flex-column justify-content-end" style={{width:"200px",height:"500px",marginTop:"150px",borderRadius:"15px",position:""}} >
	<div className="order border-1 border-white"  style={{width:"100px",height:"100px",position:""}}> </div>

	        <Lamp initialColor="bg-danger" />
            <Lamp initialColor="bg-warning" />
            <Lamp initialColor="bg-success" />
		
		
		
		 
		</div>
	);
};

export default Home;
