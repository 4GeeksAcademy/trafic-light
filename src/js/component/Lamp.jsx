import React, { useState } from "react"
import "../../styles/index.css"


const Lamp =({initialColor,onClick,isSelected})=>{
    
    return(
        <div>

        <button onClick={onClick} className= {`border border-1 border-dark rounded-circle mt-2 ${initialColor} ${isSelected ? "selected":""}` }  style={{width:"100px",height:"100px"}}>
        </button >
      
       


        </div>
    )

}


export default Lamp