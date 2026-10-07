import React, { createContext } from 'react'
import  { useEffect,useState } from 'react'
import axios from 'axios';



  export  const ProductDataContext = createContext()

const ProductContext = (props) => {
    const [productData, setproductData] = useState([])

const getData = async ()=>{
  const respons = await axios.get('https://fakestoreapi.com/products')
  setproductData(respons.data)
  
}



useEffect(function(){
getData()

},[])




  return (
    <div>
      <ProductDataContext.Provider value={productData}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext
