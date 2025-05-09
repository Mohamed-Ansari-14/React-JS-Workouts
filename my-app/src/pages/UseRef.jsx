import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

  const [value, setValue] = useState(0);
  const count = useRef(0);
  
  useEffect(()=>{
    count.current = count.current + 1;  //It will based on how many time rendering
  })

  return (
    <div style={{textAlign:"center", marginTop:"200px"}}>

      <h1>useRef Hook Example 1:</h1>

      <button onClick={()=>{setValue(prev => prev - 1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={()=>{setValue(prev => prev + 1)}}>+1</button>
      <h1>Render Count: {count.current}</h1>
    </div>
  )
}

export default UseRef
