"use client";
import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="h-screen max-md:h-auto bg-[#4831d4] text-[#ccf381] px-10 flex flex-col justify-center items-center font-Roboto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-7xl font-black leading-tight max-md:text-3xl">
              Frontend
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
            <br />
            <a
              href="/YogeshNegi-CV.pdf"
              download
              className="mt-6 px-6 py-3 my-3 border-2 border-[#ccf381] rounded-lg text-xl text-white bg-[#4831d4] font-bold shadow-md hover:bg-[#ccf381] hover:text-[#4831d4] transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 max-md:py-5 flex flex-col items-center mt-10 md:mt-0">
            <div className=" h-60 w-64 flex items-center justify-center">
              <Image
                width={500}
                height={500}
                src="/my.jpg"
                alt="Yogesh"
                className="rounded-md"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
            <div className="flex gap-5 py-5">
              <a
                href="https://www.linkedin.com/in/yogesh-negi-7b8568302/"
                target="_blank"
              >
                <FaLinkedin className="text-[#ccf381] text-2xl" />
              </a>
              <a href="https://github.com/itsyogeshnegi" target="_blank">
                <FaGithub className="text-[#ccf381] text-2xl" />
              </a>
              <a href="https://x.com/itsyogeshnegi" target="_blank">
                <FaSquareTwitter className="text-[#ccf381] text-2xl" />
              </a>
              <a href="mailto:yyogesh.singh.negi@gmail.com" target="_blank">
                <MdOutlineAttachEmail className="text-[#ccf381] text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/itsyogeshnegi/"
                target="_blank"
              >
                <FaSquareInstagram className="text-[#ccf381] text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
