import React, { useMemo, useState } from 'react'

function UseMemo() {

    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function cubeNumber(num){
        console.log("Calculation Done!!!");
        return Math.pow(num, 3);
    }

    //useMemo is used to avoid multiple time rendering the whole thing.
    // const result1 = cubeNumber(number);  
    const result = useMemo(()=> cubeNumber(number), [number]);

  return (
    <div style={{textAlign:"center", marginTop:"200px"}}>

      <h1>useMemo Hook Example:</h1>

      <input type='number' value={number} onChange={(e)=> {setNumber(e.target.value)}} />
      <h1>Cube of the number is: {result}</h1>
      <button onClick={()=> {setCounter(counter + 1)}}>Counter++</button>
      <h1>Counter: {counter}</h1>
    </div>
  )
}

export default UseMemo
