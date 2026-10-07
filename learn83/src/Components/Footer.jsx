import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Footer = () => {

 const data = useContext(ThemeDataContext)


  return (
    <div className='Footer'>
     <h1> Footer </h1>
     {data}
    </div>
  )
}

export default Footer
