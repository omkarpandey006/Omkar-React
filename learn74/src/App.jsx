import React from 'react'
import Binding from './TwowayBinding'

const App = () => {
const submitHandler = (e)=>{
  e.preventDefault()
  console.log('Form submitted')
}


  return (
    <div>
     <form  onSubmit={(e) =>{
      submitHandler(e)
    }}>
      <input type="text" placeholder='Enter Name' />
      <button> Submit </button> 
    </form>
    < Binding />
    </div>
 )
}

export default App

