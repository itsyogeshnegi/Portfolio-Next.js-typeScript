import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ProjectCardProps {
  revised: boolean;
  projectName: string;
  techStack: string;
  details: string;
  image1: string;
  image2: string;
  image3: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ revised, projectName, techStack, details, image1, image2, image3 }) => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false
  });

  const items = [image1, image2, image3];

  useEffect(()=>{
    AOS.init({
      duration: 500,
      once: true,
    });
  },[])

  return (
    <div className={`py-2 min-h-80 w-full my-2 flex max-md:flex-col ${revised ? "flex-row-reverse" : "flex-row"}`}>
      <div  data-aos="fade-right" className='container w-1/2 max-md:w-full max-md:justify-center max-md:items-center flex flex-col justify-start gap-2 items-start px-2 py-2'>
        <h1 className='font-Teko text-3xl font-semibold'>
          {projectName}
        </h1>
        <p className='font-Teko font-normal text-2xl'>Tech Stack - {techStack}</p>
        <p className='font-Roboto font-light text-md text-justify'>
          {details}
        </p>
      </div>
      <div className='container w-1/2 '>
        <div className="mx-auto bg-transparent px-5"  data-aos="fade-left">
          <Slider {...settings}>
            {items.map((e, index) => (
              <img
                key={index}
                src={e}
                className="h-auto object-contain scale-90 hover:scale-100 duration-200 shadow-lg "
                alt={`Project Slide ${index + 1}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
