import React, { useState } from 'react'

function UsWithObject() {
    const obj = {
        name:"Mohammad ali",
        age:29,
        heigh:5.7,
        color:"white"
    }
   const[person, setPerson]=useState(obj)
//    ya to sunerio  hogy jb hmny pora object ki har value ko change krna hy 
//2) sunerio ya hogya k jb hmny specfic aik ya  2 value ko change krna hy object my usky liye hum aik or method use kry gy  

// Second suneio jb hmny aik ya 2 value ko update krna hy object my sy 
let changfun = ()=>{
    setPerson(previousData =>{
       return{
          ...previousData,
          name:"Muhammad umat sultan"
       }
    })

  // 1st sunerio jb hmny pora object ki value ko update krna hy 
//    let changfun = ()=>{
//      setPerson({
//             name:"Muhammad sultan ali",
//             age:53,
//             heigh:5.8,
//             color:"white"
//      })
         


   }
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.heigh}</h1>
      <h1>{person.color}</h1>
      <button onClick={changfun}>Change Property</button>
    </div>
  )
}

export default UsWithObject
