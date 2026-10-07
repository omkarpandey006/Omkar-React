import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductDetail from './Pages/ProductDetail';

const App = () => {

// const [productData, setproductData] = useState([])

// const getData = async ()=>{
//   const respons = await axios.get('https://fakestoreapi.com/products')
//   setproductData(respons.data)
  
// }



// useEffect(function(){
// getData()

// },[])


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product/:id' element={<ProductDetail />} />
    </Routes>
  )
}

export default App
