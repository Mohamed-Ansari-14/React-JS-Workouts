import React, { useState } from 'react'

const ConditionalRendering = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState("Loading");
  const [code, setCode] = useState(0);

  const handleIncrease = ()=> {
    setCount( (prev) => prev+1);
  }

  const resetCount = ()=> {
    setCount(0);
  }

  let message;
  let remainingCount = 10 - count;

  if(count < 10){
    message = (
        <div>
            <h2>You Clicked {count} times</h2>
            <h2>Still {remainingCount} more times to reach a 10% discount.</h2>
        </div>
    )
  }else if(count === 10){
    message = (
        <div>
            <h2>You Clicked {count} times</h2>
            <h2>Congrates You Unlocked a 10% discount.</h2>
        </div>
    )
  }else{
    message = (
        <div>
            <h2>You Clicked {count} times</h2>
            <h2>You're Click Master!!!</h2>
        </div>
    )
  }

  //Switch Case:

  let displayComponent = ()=> {
    switch(data){
        case "Loading" : return <LoadingComponent/>

        case "Success" : return <SuccessComponent/>

        default : return <ErrorComponent/>
    }
  }
  
  const checkCode = ()=> {
    if(code === 1410){
        setData("Success");
    }else{
        setData("");
    }
  }

  return (
    <div style={{textAlign:"center", marginTop:"200px"}}>
        <h1>Click to Unlock Rewards 🎁 {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        {/* using of Ternary Operator */}
        {count >= 10 ? (<p>You Unlocked a 10% Discount</p>) : (<p> Click 10 Times to Unlock Reward</p>)}

        {/* using of && */}
        { count >=15 && <p> You're a Click Master </p> }
        <br/>
        {/* using of IF-Else */}
        { message }
        {count >= 25 && <button onClick={resetCount}>Reset Count</button>}<br/><br/>

        <label htmlFor='code'>Enter Code Here:</label>
        <input type='text' maxLength="4" value={code} onChange={(e)=>setCode(Number(e.target.value))} name='code' />
        <button onClick={checkCode}>Submit</button>

        { displayComponent() }
    </div>
  )
}

export default ConditionalRendering

function LoadingComponent(){
    return(
        <h3>Loading...🐱‍🏍</h3>
    )
}

function SuccessComponent(){
    return(
        <h3>Success...👍</h3>
    )
}

function ErrorComponent(){
    return(
        <h3>Failure...👎</h3>
    )
}