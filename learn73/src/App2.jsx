import React from 'react'


const [marks, setmarks] = useState([60,55,89,12,29])

function graceStudent(){
 const newMarks = marks.map(function(elem){
    if(elem>95){
        return elem
    }else {
        return elem + 5
    }
})

setmarks(newMarks)
// console.log(newMarks)

}
const App2 = () => {
  return (
    <div>
    {marks.map(function(elem,idx){
        return <h1 key = {idx}> Student {idx+1} = {elem} ({elem >33?'pass':'fail'}) </h1>
    })}
      <button onClick={graceStudent}> Give them grace </button>
    </div>
  )
}

export default App2
