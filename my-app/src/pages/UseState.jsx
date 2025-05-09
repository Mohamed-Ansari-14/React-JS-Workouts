import React, { useState } from 'react'

function UseState() {

  const [color, setColor] = useState("Red");  //Basic useState Example

  let changeColor = ()=> {
    setColor('Blue');
  }

  return (
    <div>
      <div style={{textAlign:"center", marginTop:"200px"}}>

      <h1>useState Hook Example 1:</h1>

      <h1>My Favorite Color is {color} !!!</h1>
      <button onClick={changeColor}>Blue</button>
    </div>
    </div>
  )
}

export default UseState
