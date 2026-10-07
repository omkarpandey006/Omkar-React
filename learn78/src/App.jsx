
import React ,{useEffect, useState} from 'react'

const App = () => {

const [user, setuser] = useState(0)
const [user1, setuser1] = useState(0)
const [user2, setuser2] = useState(0)


useEffect(function(){
  console.log("useEffect are runinng");
  
},[user])  //ye hi side stack  (useEffect) ko dikha raha hai ......


  return (
    <div>
     <h1>{user}</h1>
     <button onClick={()=>{
      setuser(Math.floor(Math.random()*10))
     }}>change user</button>

     <br /> <br />
      <h1>{user1}</h1>
     <button onClick={()=>{
      setuser1(Math.floor(Math.random()*10))
     }}>change user1</button>
     <br /> <br />
      <h1>{user2}</h1>
     <button onClick={()=>{
      setuser2(Math.floor(Math.random()*10))
     }}>change user2</button>
    </div>
  )
}

export default App
