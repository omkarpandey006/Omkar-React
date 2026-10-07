import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <div className='bg-green-700 flex justify-around  mb-10 px-4 py-10'>
      <h1 className='text-6xl'> Navbar </h1>
      <Link  to = '/' >Home Page</Link>
       <Link  to = '/about' >About Page</Link>
        <Link  to = '/product' >product Page</Link>   

        {/* here also use  "a" tag but   we want to smooth routing so that we use "Link"  */}


     </div>
     </div>
  )
}

export default Navbar

