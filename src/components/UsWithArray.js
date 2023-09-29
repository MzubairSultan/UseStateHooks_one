import React, { useState } from 'react'

function UsWithArray() {
    let num = [11,22,33,44];
       const[numbers, setNumbers] = useState(num);
       
    //    2) method ager hm chaty hy hmari arry my num add ho
    let change = ()=>{
       
               setNumbers(previouData =>{
                   return[
                     ...previouData,
                     Math.floor(Math.random()*50)
                   ]
               });
           }
    
    
    
    
    
       //    1) ya method to hum tb use kry gy na jb hmny sb element ko update krna hy 
    //    let change = ()=>{
       
    //       setNumbers([66,77,88,55]);
    //    } 
  return (
    <div>
      <ul>
        <h1>hi</h1>
        {numbers.map(  (e, i)=>
            <li> key ={i} value={e}</li> 
        )}
      </ul>
      <button onClick={change}>Change Array </button>
    </div>
  )
}

export default UsWithArray
