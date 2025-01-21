import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Lamp from "./Lamp";

//create your first component
const Home = () => {
	const [lamp, setLamp]= useState(1)
	
	
	return (
		<div className="text-center bg-dark  mx-4 d-flex flex-column justify-content-end" style={{width:"200px",height:"500px",marginTop:"150px",borderRadius:"15px",position:""}} >
	

	        <Lamp initialColor="bg-danger" 
			isSelected={lamp ===1}
			onClick={()=>setLamp(1)}
			/>
            <Lamp initialColor="bg-warning"
				isSelected={lamp ===2}
				onClick={()=>setLamp(2)}
			 />
            <Lamp initialColor="bg-success" 
				isSelected={lamp ===3}
				onClick={()=>setLamp(3)}
			/>
		
		
		
		 
		</div>
	);
};

export default Home;
