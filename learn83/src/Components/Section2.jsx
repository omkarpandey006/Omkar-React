import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Section2 = () => {
  const data = useContext(ThemeDataContext)
  return (
    <div>
      <h2>section2 </h2>
      {data}
    </div>
  )
}

export default Section2
