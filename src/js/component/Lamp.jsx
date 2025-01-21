import React, { useState } from "react"


const Lamp =({initialColor})=>{
    const [color, setColor]= useState(true)
    return(
        <div>

        <button onClick={()=>setColor(!color)} className= {`border border-1 border-dark rounded-circle mt-2 ${color ? initialColor:"bg-dark"}` }  style={{width:"100px",height:"100px"}}>
        </button >
      
       


        </div>
    )

}


export default Lamp