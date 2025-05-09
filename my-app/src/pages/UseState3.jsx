import React, { useState } from 'react'

function UseState3() {

    const [count, setCount] = useState(0);

    const increaseCount = ()=> {
        setCount( prev => prev + 1);    //1
        setCount( prev => prev + 1);    //2
        setCount( prev => prev + 1);    //3
        setCount( prev => prev + 1);    //4
        setCount( prev => prev + 1);    //5
    }

  return (
    <div style={{textAlign:"center", marginTop:"200px"}}>

      <h1>useState Hook Example 3:</h1>

      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase by 5</button>
    </div>
  )
}

export default UseState3
