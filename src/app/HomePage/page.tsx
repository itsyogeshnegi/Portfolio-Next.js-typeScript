"use client";
import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="h-screen max-md:h-auto bg-[#4831d4] text-[#ccf381] px-10 flex flex-col justify-center items-center font-Roboto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-7xl font-black leading-tight max-md:text-3xl">
              Front-End
              <br />
              <span className="text-8xl max-md:text-4xl">{`Developer.`}</span>
            </h1>
            <p className="text-3xl text-[#ccf381] font-Teko font-extrabold">
              Yogesh Negi
            </p>
            <p className="text-xl font-light text-white">
              I make the complex simple...
            </p>
            <p className="text-lg font-light text-white">
              Crafting solid and scalable frontend products with great user
              experiences is my passion.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 max-md:py-5 flex flex-col items-center mt-10 md:mt-0">
            <div className=" h-60 w-64 flex items-center justify-center border-2 border-[#ccf381] p-2">
              <Image
                width={500}
                height={500}
                src="/my.jpg"
                alt="Yogesh"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
            <a
              href="/YogeshNegi-CV.pdf"
              download
              className="mt-6 px-6 py-3 border-2 border-[#ccf381] rounded-lg text-xl text-white bg-[#4831d4] font-bold shadow-md hover:bg-[#ccf381] hover:text-[#4831d4] transition-all duration-300"
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
