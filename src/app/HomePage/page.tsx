"use client";
import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="h-screen bg-[#4831d4] text-[#ccf381] px-10 flex flex-col justify-center items-center font-Roboto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-7xl font-black leading-tight">
              Front-End
              <br />
              <span className="text-8xl">{`<Developer/>`}</span>
            </h1>
            <p className="text-3xl text-[#ccf381] font-Teko font-extrabold">
              Yogesh Negi
            </p>
            <p className="text-xl font-light">I make the complex simple...</p>
            <p className="text-lg font-light">
              Crafting solid and scalable frontend products with great user
              experiences is my passion.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
            <div className=" h-64 w-64 flex items-center justify-center border-4 border-[#ccf381] rounded-3xl p-4">
              <Image
                width={500}
                height={500}
                src="/my.jpg"
                alt="Yogesh"
                className="rounded-3xl"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
            <a
              href="/YogeshNegi-CV.pdf"
              download
              className="mt-6 px-6 py-3 border-2 border-[#ccf381] rounded-lg text-xl text-[#ccf381] bg-[#4831d4] font-bold shadow-md hover:bg-[#ccf381] hover:text-[#4831d4] transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
