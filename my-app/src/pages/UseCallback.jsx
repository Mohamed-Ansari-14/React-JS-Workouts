import React, { useCallback, useState } from 'react'
import Header from '../components/Header';

function UseCallback() {

  const [count, setCount] = useState(0);

  const newFun = useCallback(()=> {},[])    //[] => Dependency(if the dependency value changed means it will execute again, if dependency value remains same means it will not execute again)

  return (
    <div style={{textAlign:"center", marginTop:"200px"}}>

      <h1>useCallback Hook Example:</h1>

      <Header newFun={newFun}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount((prev => prev+1))}>Click Here</button>
    </div>
  )
}

export default UseCallback
