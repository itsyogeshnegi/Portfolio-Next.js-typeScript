"use client"
import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
const HomePage : React.FC = () => {
  return (
    <>
    <NavBar/>
    <hr/>
    <div className='h-screen w-full px-10 flex flex-col justify-center items-start font-Roboto text-7xl font-semibold'>
     <span>Hi There !</span> 
     <span>I am {`<Developer/>`}</span> 
     <span>I make the complex simple...😊</span> 
     <button className='border-2 border-black text-2xl rounded-lg p-2 my-3 font-Roboto shadow-md hover:shadow-2xl'>
      <a href='/YogeshNegi-CV.pdf' download >Download CV</a>
      </button>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage