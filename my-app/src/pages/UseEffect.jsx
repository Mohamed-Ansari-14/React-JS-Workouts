import React, { useEffect, useState } from 'react'

function UseEffect() {

  const [count, setCount] = useState(0);

  useEffect( ()=> {
    setTimeout( ()=> {
      setCount( prev => prev+1 );
    }, 2000)  //[] dependency
  }, [])  //If we use [count] it will execute when the count is modified

  return (
    <div style={{textAlign:"center", marginTop:"200px"}}>

      <h1>useEffect Hook Example:</h1>

      <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default UseEffect
