import React ,{useState} from 'react'
import axios from 'axios'
const [alluser, setalluser] = useState([])

const App = () => {
 const getdata = async ()=>{
 const respon =  await axios.get('https://jsonplaceholder.typicode.com/todos/1')

console.log(respon.data)

setaAlluser(respon.data)


 }



  return (
    <div>
     <button onClick={getdata}>Get Data</button>
     {alluser.map(function(elem,idx){

      console.log(elem);       //its not working properly so you watch again video 77 for learning ....
      
      
      // return <h1 key = {idx}>{elem.name} {idx+1} </h1>
     })}




    </div>

  )
}

export default App

