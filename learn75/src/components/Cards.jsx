import React from 'react'

const Cards = () => {
  return (
    <div className='w-[20vw]  rounded-xl py-8 px-8 flex items-center flex-col object-cover text-center  bg-white text-black'>
      <img className='h-20 w-20 rounded-full' src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <h1 className='text-xl m-2 font-semibold'> Omkar Pandey </h1>
      <h5 className='text-lg text-blue-500 font-semibold my-3'>Developer</h5>
      <p className='text-sm font-medium leading-tight'>Lorem ipsum dolor sit amet about of your life.</p>
      <button className='px-4 py-2 rounded bg-red-600 text-white font-semibold mx-3 text-sm cursor-pointer  active:scale-95'>Remove</button>

    </div>
  )
}

export default Cards
