"use client"
import React from 'react'
import Image from 'next/image'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
const AboutPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <hr />
      <div
        className="h-screen w-[100%] flex justify-evenly  items-center max-md:h-full max-md:flex-col-reverse"
      >
        <div
          className="h-3/5 w-2/6 flex justify-center items-center max-md:mb-5"
        >
          <Image
            width={300}
            height={300}
            src="/my.jpg"
            className="object-contain"
            alt="Yogesh"
            style={{ borderRadius: "50px", backgroundColor: "transparent" }}
          />
        </div>
        <div className="h-3/4 w-2/5 bg-transparent flex flex-col justify-center max-md:w-4/5 max-md:text-center max-md:mt-4">
          <p className="text-black font-black font-Roboto text-3xl my-2.5 max-md:text-2xl bg-transparent">
           {` I'm Yogesh Negi, a Software Developer`}.
          </p>
          <p className="text-black text-justify max-md:text-center bg-transparent font-Teko">
           {` Hello, I'm a proficient Software Developer specializing in JavaScript,`}
            React, and Next.js. With a keen eye for detail and a passion for
            crafting efficient solutions, I thrive in the dynamic world of web
            development, constantly pushing boundaries and delivering exceptional
            results.
          </p>
          <br />
          <hr />
          <br />
          <p className="text-black font-semibold bg-transparent font-Teko">
            <span className="font-black text-black bg-transparent">Experience :</span> 1.5 years +
          </p>
          <p className="text-black font-semibold max-md:mb-2 bg-transparent font-Teko">
            <span className="font-black text-black bg-transparent">Location :</span> New Delhi,
            India.
          </p>
          <p className="text-black font-medium bg-transparent font-Teko">
            <span className="font-semibold text-black bg-transparent">
              If you want to know more about me then download my CV which is
              above.
            </span>
          </p>
        </div>
      </div>
    <Footer/>
    
    </>
  )
}

export default AboutPage
