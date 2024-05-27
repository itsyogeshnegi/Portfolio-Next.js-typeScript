"use client"
import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import Image from 'next/image'
const page:React.FC = () => {
  return (
    <>
    <NavBar/>
    <hr/>
    <div className='h-screen w-full'>
      <div className='py-1 w-full flex justify-center items-center font-Teko text-3xl font-medium'>
      <h1>{`Let's make something amazing together...📧`}</h1>
      </div>
      <div className='flex w-full flex-row justify-around items-center'>
        <form className="w-full max-w-lg mt-10">
          <div className="flex flex-wrap  mb-2">
            <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Your Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="john" />
            </div>
            <div className="w-full md:w-1/2 px-1">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Your Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="john@gmail.com" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Subject
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Hello John...." />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Phone Number
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Hello John...." />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Message
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Hello John...." />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <button className='bg-green-600 hover:bg-green-800 px-20 py-1 rounded-lg text-white font-Teko text-2xl'>Send</button>
            </div>
          </div>
  
        </form>
        <div>
        <Image
            width={300}
            height={300}
            src="/mail.png"
            className="object-contain"
            alt="mail"
            style={{ borderRadius: "50px", backgroundColor: "transparent" }}
          />
        </div>


      </div>
    </div>
    </>
  )
}

export default page