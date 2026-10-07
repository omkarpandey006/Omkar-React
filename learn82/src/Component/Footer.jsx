import React, { useContext } from 'react'
import { UserDataContext } from '../Context/UserContext'

const Footer = () => {
const user = useContext(UserDataContext)
console.log(user); // this is not working ,it show on the console undifined......


  return (
    <div>
     <h1 className='bg-green-600 text-3xl font-semibold bottom-0 absolute  h-10 w-screen'> this is Footer</h1>
    </div>
  )
}

export default Footer
