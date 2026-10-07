import React, { useContext } from 'react'
import { ProductDataContext } from '../Context/ProductContext'
import { Link } from 'react-router-dom'

const Product = () => {
 const ProductData = useContext(ProductDataContext)

  return (
   <div className='allproduct'>
   
 { ProductData.map(function(elem,idx){
  return <Link target = '_blank' className='product' key={idx} to = {`/product/${elem.idx}`} >
    <div>
      <img src={elem.image} alt="" />
      <h2>{elem.title}</h2>
    </div>
  </Link>
 })}

    </div>
  )
}

export default Product
