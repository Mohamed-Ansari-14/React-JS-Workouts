import React, { useState } from 'react'

function UseState2() {

    const [car, setCar] = useState({        //Initializing with Object
        brand: "Audi",
        color: "Black",
        model: "A4",
        year: "2025"
    });

    const changeColor = ()=> {
        setCar((prev)=> {           //Previous
            return {...prev, color: "Red"}      //Getting Previous values via spread operator
        });
    }

  return (
    <div style={{textAlign:"center", marginTop:"200px"}}>

      <h1>useState Hook Example 2:</h1>

      <h1>My Car Brand is {car.brand}</h1>
      <h2>It is a {car.color} Color, {car.model} Model, from {car.year}</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default UseState2;
