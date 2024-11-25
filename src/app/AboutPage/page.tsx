"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

    const calculateExperience = () => {
      const startDate = new Date(2022, 7);
      const currentDate = new Date();

      const totalMonths =
        (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
        currentDate.getMonth() -
        startDate.getMonth();

      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      return { years, months };
    };

    const { years, months } = calculateExperience();

  return (
    <>
      <div className="w-full flex justify-center items-center py-10">
        <h1 className="text-5xl font-bold text-[#4831d4] font-Teko tracking-wide">
          About Me
        </h1>
      </div>

      <div className="flex flex-col items-center justify-start px-6 md:px-16 lg:px-32 py-12 bg-white">
        {/* Text Section */}
        <div
          className="flex flex-col items-start w-full max-w-4xl"
          data-aos="fade-left"
        >
          <p className="text-[#4831d4] text-2xl md:text-3xl font-extrabold font-Teko leading-snug mb-4 text-center">
            {`Hi, I'm Yogesh Negi, Nice to meet you.`}
          </p>
          <p className="text-purple-900 text-lg leading-relaxed font-Teko mb-6">
            I am a proficient Software Developer specializing in JavaScript,
            React, and Next.js. With a keen eye for detail and a passion for
            crafting efficient solutions, I thrive in the dynamic world of web
            development, constantly pushing boundaries and delivering
            exceptional results.
          </p>
          <hr className="w-full border-gray-300 my-4 text-purple-900" />
          <p className="text-lg  font-Teko mb-2 text-purple-900">
            <span className="font-bold">Experience: </span> {years} year
            {years !== 1 ? "s" : ""} and {months} month
            {months !== 1 ? "s" : ""}
          </p>
          <p className="text-lg  font-Teko mb-2 text-purple-900">
            <span className="font-bold">Location: </span> New Delhi, India
          </p>
          <p className="text-md text-purple-900 font-Teko">
            Curious to learn more about me? Download my CV using the link above!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
