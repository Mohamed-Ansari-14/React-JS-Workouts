import React, { useState } from 'react'
import ProductItem from './ProductItem'

const Shop = () => {

    let [product, setProduct] = useState({
        name: "Realme GT 6T",
        price: 28000,
        description: "8GB Ram 256 GB Storage"
    })

  return (
    <div style={{textAlign:"center", marginTop:"200px"}}>
        <h1>Welcome to My Shop</h1>
        <ProductItem product = {product}/>
    </div>
  )
}

export default Shop