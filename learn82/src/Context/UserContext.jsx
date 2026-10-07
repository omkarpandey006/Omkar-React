import React, { createContext } from 'react'





 export const UserDataContext = createContext()

const UserContext = (props) => {
    const User = "Omkar"
    
  return (
    <UserDataContext.Provider Value = {User}>
        {props.children}
    </UserDataContext.Provider>
  )
}

export default UserContext
