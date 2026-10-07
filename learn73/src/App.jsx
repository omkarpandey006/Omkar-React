
import React ,{useState} from 'react'

const App = () => {
    
    const [First, setFirst] = useState(0)


  return (
    <div>
      <h1>{First}</h1>
      <button  onClick = {() => {
        setFirst(First +1)
      }}>
        increase</button>

        <button onClick = {() => {
        setFirst(First -1)
      }}>
       decrease</button>

        <button onClick = {() => {
        setFirst(First +5)
      }}>
        jump by 5</button>
    </div>
  )
}





export default App
