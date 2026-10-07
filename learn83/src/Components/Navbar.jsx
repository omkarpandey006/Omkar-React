import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'


const Navbar = () => {

   
const [Theme, setTheme] = useContext(ThemeDataContext)




  return (
    <div className='nav'>
     <h1>Navbar </h1>
     <h2>{Theme}</h2>
     <button onClick={()=>{
        setTheme('dark')
     }}>Change Theme</button>
    </div>
  )
}

export default Navbar
