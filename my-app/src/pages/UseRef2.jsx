import React, { useRef } from 'react'

function UseRef2() {    
                        //Accessing the DOM Element using useRef()
    const inputElement = useRef();

    const btnClicked = () => {
        console.log(inputElement.current);
        inputElement.current.style.background = "blue";
    }
  return (
    <div style={{textAlign:"center", marginTop:"200px"}}>

        <h1>useRef Hook Example 2:</h1>
        
        <input type='text' ref={inputElement} />
        <br /><br /><br />
        <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default UseRef2
