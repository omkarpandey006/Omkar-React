import React from 'react'
import { useState } from "react";

const TwowayBinding = () => {

const submitHandler = (e) =>{
e.preventDefault()
const newAllUsers = [...alluser]

console.log(newAllUsers)
newAllUsers.push(Name)

setalluser(newAllUsers)

setName('')

}
 const [Name, setName] = useState('')
 const [alluser, setalluser] = useState([])


  return (
    <div>
       <form  onSubmit={(e) =>{
      submitHandler(e)
    }}>
      <input type="text" 
      placeholder='Enter Name'
      value={Name}
      required
      onChange={(e) =>{
        setName(e.target.value)
      }}
      />
      <button> Submit </button> 
    </form>
    </div>
  )
}

export default TwowayBinding
