"use client"
import NavBar from '@/components/NavBar/NavBar';
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Page: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xpfbree',
      'template_u5ka9m1',
      e.currentTarget,
      'SZhg1zXz066Q_I7Z4'
    ).then(
      () => {
        toast.success("Email sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setNumber("");
        setMessage("");
      },
      (error) => {
        toast.error("Failed to send email.");
        console.error("Email sending failed:", error);
      }
    );
  };

  return (
    <>
      {/* <NavBar /> */}
      {/* <hr /> */}
      <div className='h-screen w-full'>
        <div className='py-1 w-full flex justify-center items-center font-Teko text-3xl font-medium'>
          <h1>{`Let's make something amazing together...📧`}</h1>
        </div>
        <div className='flex w-full flex-row justify-around items-center'>
          <form className="w-full max-w-lg mt-10" onSubmit={sendEmail}>
            <div className="flex flex-wrap mb-2">
              <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Your Name
                </label>
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  type="text" 
                  placeholder="john"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-1">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Your Email
                </label>
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  type="email" 
                  placeholder="john@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Subject
                </label>
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  
                  type="text" 
                  placeholder="Work..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  name="subject"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Phone Number
                </label>
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  
                  type="text" 
                  placeholder="987654321"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  name="number"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Message
                </label>
                <textarea 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  
                  placeholder="Hello John...."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <button className='bg-green-600 hover:bg-green-800 px-20 py-1 rounded-lg text-white font-Teko text-2xl' type="submit">
                  Send
                </button>
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
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Page;
