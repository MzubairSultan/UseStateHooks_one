import React, { useState } from 'react'

function UseState_one() {
    // hooks function ko sb sy pehly apny yaha likhna hy ya iska rule hy isky elwa kahi or nahi likhna sb sy top py likhna hy 
    const[name , setName]=useState("Muhammad zubair"); 
     let Change = ()=>{
        setName("Muhammad sultan");
     }         
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={Change}>Update</button>
    </div>
  )
}

export default UseState_one

