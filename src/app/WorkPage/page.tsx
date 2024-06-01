"use client"
import React,{useState} from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const page: React.FC = () => {
  const [revised, setRevised] = useState<boolean>(true);
  return (
  <>
  {/* <NavBar/> */}
  <div className="min-h-screen w-full h-auto">
    <div className="w-full flex justify-center items-center py-4">
      <h1 className="text-5xl font-Teko font-extrabold">Projects</h1>
    </div>
    <ProjectCard revised={false} projectName={"Plano-India"} techStack={"React.js, Node.js, Express.js, MongoDB, AWS"} details={".We developed an intuitive client interface for managing campaigns, ensuring a seamless user experience. The back-end efficiently handles data operations and business logic, while our database securely stores client data and campaign details. To guarantee scalability and secure hosting, we leverage cloud solutions, which also facilitate seamless inventory integration. This comprehensive approach optimizes ad placement and maximizes ROI, providing clients with a robust and efficient platform for their campaign needs."} image1="./Plano/page1.png"image2="./Plano/page2.png"image3="./Plano/page3.png"/>
    <ProjectCard revised={true} projectName={"Locaudit-Pro"} techStack={"React.js, Node.js, Express.js, MongoDB, AWS"} details={`Locaudit Pro streamlines audits with automated workflows, real-time collaboration, and detailed reporting. It enhances productivity and provides comprehensive business insights. Available on Play Store and App Store, it ensures accessibility on mobile devices, boosting efficiency for audit teams. This comprehensive solution facilitates smoother audit processes, making it an essential tool for businesses seeking thorough and efficient audit management.`} image1="./auditPro/page1.png" image2="./auditPro/page2.png" image3="./auditPro/page3.png"/>
    <ProjectCard revised={false}projectName={"DMGV.IN"}  techStack={"React.js, Tailwind.Css, AWS"} details={`Developed a dynamic website using React, Tailwind CSS, and Redux for state management. Demonstrated proficiency in modern web development technologies, ensuring efficient state management and a seamless user experience. Leveraged Tailwind CSS for responsive design, creating a visually appealing and adaptable interface. This project highlights skills in both frontend development and design, showcasing the ability to build robust and user-friendly web applications.`} image1="./dmgv/page1.png" image2="./dmgv/page2.png" image3="./dmgv/page3.png"/>
    <ProjectCard revised={true}projectName={"LOCAD.NET"}  techStack={"Next.js, Tailwind.Css, AWS"} details={`Welcome to LOCAD's cutting-edge website, where live stats pulse with the rhythm of our dynamic operations. Dive into our digital dashboard to witness real-time insights, reflecting our expertise and dedication. Explore our comprehensive portfolio, a testament to our relentless pursuit of excellence and innovation in [specific industries or services]. Join us on this journey of data-driven success, where every click unveils a new dimension of our commitment to excellence.`} image1="./locad/page1.png"image2="./locad/page2.png"image3="./locad/page3.png"/>
  </div>
  {/* <Footer/> */}
  </>
  );
};

export default page;
