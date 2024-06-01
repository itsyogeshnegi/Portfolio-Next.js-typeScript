"use client"
import React from 'react';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import Skills from '@/components/Skills/Skills';

const HomePage: React.FC = () => {
  return (
    <>
      <hr />
      <div className='h-screen w-full px-10 text-center flex gap-3 flex-col justify-center items-center  font-Roboto text-6xl font-black'
      >
        <>
        <span className='text-7xl'>Full-Stack<br/>{`<Developer/>`}</span>

        <span className='text-2xl text-slate-500 font-Teko font-extrabold'>Yogesh Negi</span>
        <span className='text-5xl font-light'>I make the complex simple...😊</span>
        </>
        <>
        <Skills/>
        <button className='border-2 border-black text-2xl rounded-lg p-2 flex my-3 font-Roboto shadow-md hover:shadow-2xl flex-row'>
          <a href='/YogeshNegi-CV.pdf' download>Download CV</a>
        </button>
        </>
      </div>
    </>
  );
}

export default HomePage;
