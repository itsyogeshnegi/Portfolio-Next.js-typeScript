"use client"
import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
const HomePage : React.FC = () => {
  return (
    <>
    <NavBar/>
    <div className='h-screen w-full px-10 flex flex-col justify-center items-start font-Roboto text-7xl font-medium'>
     <span>Hi There !</span> 
     <span>I am {`<Developer/>`}</span> 
     <span>I make the complex simple...😊</span> 
     <button className='border-2 border-black text-2xl rounded-lg p-2 my-3 font-Roboto shadow-md hover:shadow-2xl'>Download CV</button>
    </div>
    </>
  )
}

export default HomePage