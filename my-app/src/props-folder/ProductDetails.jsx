import React from 'react'

const ProductDetails = ({ //Getting props by destructring {} & setting default values
    deepName = "Samsung Galaxy Note 10",
    deepPrice = 25000,
    deepDescription = "12 GB Ram 256 Storage" }) => {

  return (
    <div>
        <h3>Mobile Name : { deepName }</h3>
        <p>Price : { deepPrice }</p>
        <p>Description: { deepDescription }</p>
    </div>
  )
}

export default ProductDetails