
import React ,{useState} from 'react'


const App = () => {

const [userName, setuserName] = useState('')
const [userRole, setuserRole] = useState('')
const [imageURL, setimageURL] = useState('')
const [userDesc, setuserDesc] = useState('')

const localdata = JSON.parse(localStorage.getItem('all-users')) || []
const [allUsers, setallUsers] = useState(localStorage)

const submitHandler = (e)=>{
  e.preventDefault()
  const oldUsers = [...allUsers]
  oldUsers.push({userName,userRole,userDesc,imageURL})
//  console.log(oldUsers);
 

  setallUsers(oldUsers)
  localStorage.setItem('all-users',JSON.stringify(oldUsers))   //nhi chal  rah hai code somthing get wrong 

 setuserName('')
 setuserRole('')
 setuserDesc('')
 setimageURL('')

}

const deletehandler = (idx)=>{
  const copyuser =[...allUsers]
  copyuser.splice(idx,1)

  setallUsers(copyuser)
  localStorage.setItem('all-users',JSON.stringify(copyusers))
  
}


  return (
    <div className='h-screen bg-black text-white'>
 <form  onSubmit= {(e)=>{
  submitHandler(e)
 }}className='flex flex-wrap px-2 py-10'>
<input 
value={userName}
onChange={(e)=>{
  setuserName(e.target.value)
  
}}
className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
 type="text" 
 placeholder='Enter Name ' />
<input 
value={imageURL}
onChange={(e)=>{
 setimageURL(e.target.value)
}}
className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
type="text" 
placeholder='imgURL' />
<input 
value={userRole}
onChange={(e)=>{
 setuserRole(e.target.value)
}}
className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
type="text" 
placeholder='Enter Role'/>
<input 
value={userDesc}
onChange={(e)=>{
 setuserDesc(e.target.value)
}}
className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
 type="text" 
 placeholder='Enetr Description' />



<button className='px-5 py-2 active:scale-95 cursor-pointer bg-emerald-700 rounded m-2 w-[97%]'> Create USER </button>

 </form>
 <div className='flex flex-wrap gap-7 px-5 py-10'>

  {allUsers.map(function(elem,idx){
    return <div key = {idx} className='w-[20vw]  rounded-xl py-8 px-8 flex items-center flex-col object-cover text-center  bg-white text-black'>
      <img className='h-20 w-20 rounded-full' src={elem.imageURL} alt="" />
      <h1 className='text-xl m-2 font-semibold'> {elem.userName} </h1>
      <h5 className='text-lg text-blue-500 font-semibold my-3'>{elem.userRole}</h5>
      <p className='text-sm font-medium leading-tight'>{elem.userDesc}</p>
      <button onClick={() =>{
        deletehandler(idx)
      }} className='px-4 py-2 rounded bg-red-600 text-white font-semibold mx-3 text-sm cursor-pointer  active:scale-95'>Remove</button>

    </div>
  })}
 

 </div>

    </div>
  )
}

export default App
