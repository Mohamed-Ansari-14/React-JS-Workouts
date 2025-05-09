import React from 'react'
import ProductDetails from './ProductDetails'

const ProductItem = ( {product} ) => {

    // let {product} = props;   //

  return (
    <div>
        <h1>Displaying Product Item's</h1>
        <ProductDetails 
            deepName = { product.name }
            deepPrice = { product.price }
            deepDescription = { product.description }
        />
    </div>
  )
}

export default ProductItem