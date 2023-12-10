import React from "react";
import Logo from "./assets/eldrich+logo_RED.webp";
import { BiPlusMedical } from "react-icons/bi";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="font-montserrat px-16">
      <div className="flex justify-around py-20">
        <div>
          <div className="w-56">
            <div className="flex items-center pb-7">
              <img src={Logo} alt="" width={50} />
              <h1 className="pl-2 font-semibold text-2xl">ELDRICH.</h1>
            </div>
            <p className=" font-medium">
              Web designer & developer, committed in creating a unique,
              attractive contemporary design.
            </p>
            <div className="mt-11">
              <a
                href="mailto:eldrichjyuris@gmail.com"
                className="py-3 px-4 text-sm text-white bg-red-600 hover:bg-gray-800"
              >
                SEND AN EMAIL
              </a>
            </div>
          </div>
        </div>
        {/* LETS CONNECT */}
        <div className="w-56 pt-1 ">
          <div>
            <h1 className="text-2xl font-semibold pb-10">LET'S CONNECT!</h1>
          </div>
          <div>
            <p className="font-medium">
              Have a project idea? Let's collaborate. Send an email or drop a
              message through my social accounts. Let's connect.
            </p>
          </div>
          <div className="flex justify-between mt-6">
            <a href="https://www.facebook.com/eldrich.jyuri.sumabat.22" target="_blank" rel="noopener noreferrer" className=" hover:text-3xl">
              <FaFacebookSquare
                className="text-2xl mb-2 text-red-600  hover:text-gray-800"
              
              />
            </a>
            <a href="https://instagram.com/dricht_?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel="noopener noreferrer">
              {" "}
              <AiFillInstagram
                className="text-2xl mb-2 text-red-600  hover:text-gray-800"
              
              />
            </a>
            <a href="https://www.linkedin.com/in/eldrich-jyuri-sumabat/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                className="text-2xl mb-2 text-red-600  hover:text-gray-800"
              
              />
            </a>
            <a href="https://github.com/Eldrich-Yurii" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare
                className="text-2xl mb-2 text-red-600  hover:text-gray-800"
              
              />
            </a>
            <a
              href="mailto:eldrichjyuris@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail className="text-2xl mb-2 text-red-600  hover:text-gray-800" />
            </a>
          </div>
        </div>
        {/* MENU */}
        <div className="w-56 leading-8">
          <h1 className="text-2xl font-semibold pb-10">MENU</h1>
          <div className="font-medium">
            <a href="#intro" className=" hover:text-red-800">Intro</a>
            <br />
            <a href="#about" className=" hover:text-red-800">About</a>
            <br />
            <a href="#skill" className=" hover:text-red-800">Skills</a>
            <br />
            <a href="#project" className=" hover:text-red-800">Project Experience</a>
            <br />
            <a href="#education" className=" hover:text-red-800">Educational Attainment</a>
            <br />
            <a href="#details" className=" hover:text-red-800">More Details</a>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold pb-10">RECENT PROJECTS</h1>
        <div className="w-56 leading-7">
          <div className="pb-4">
            <p className="text-sm font-semibold text-red-500">Nov. 2023</p>
            <a href="#weatheria" className="text-lg font-semibold">WEATHERIA</a>
            <p className="text-sm font-medium">Flood Assessment and Risk Management System</p>
          </div>
          <div className="pb-4">
            <p className="text-sm font-semibold text-red-500">Nov. 2023</p>
            <a href="#key" className="text-lg font-semibold">Key to Your Home</a>
            <p className="text-sm font-medium">Real Estate Website</p>
          </div>
          <div className="pb-4">
            <p className="text-sm font-semibold text-red-500">Aug. 2023</p>
            <a href="#chef" className="text-lg font-semibold">Neighbor Chef</a>
            <p className="text-sm font-medium">Restaurant Website</p>
          </div>
        </div>
        </div>
      </div>
      <div>
        <p className="flex justify-center pb-8">
          &copy; Copyright 2023 | Eldrich &bull; Portfolio / CV | All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
