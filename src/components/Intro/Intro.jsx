import React from "react";
import "./Intro.css";
import MainPic from "./assets/MAIN_PIC.webp";
import Logo from "./assets/eldrich+logo_RED.webp";
import Border from "./assets/Border1.webp";
import { BiPlusMedical } from "react-icons/bi";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Intro = () => {
  return (
    <>
      <div className="h-[96vh] md:lg:h-[600px] font-montserrat" id="intro">
        {/* Logo */}
        <div id="intro">
          <img src={Logo} alt="Logo" className="pt-3 ml-4 w-14 md:lg:w-16" />
        </div>
        <div>
        <img
          src={MainPic}
          alt=""
          className="absolute z-10 bottom-0 right-0  md:lg:right-[59px] md:lg:-bottom-3 md:lg:w-[620px]"
        />
      </div>
       {/* Greeting */}
       <div className="mt-6 mx-4 md:lg:mt-28 md:lg:ml-10">
        <p className="text-2xl font-semibold md:lg:text-[40px] md:lg:font-medium">
          Hi there <span className="text-red-600">!</span>
        </p>
        <p className=" text-4xl md:lg:text-7xl font-semibold md:lg:w-[800px]">
          I am Eldrich Jyuri Sumabat
        </p>
        <p className="md:lg:text-lg font-semibold pt-3 text-red-600" >
          W E B&nbsp;&nbsp;&nbsp;D E V E L O P E R
        </p>
      </div>
       {/* 022 */}
       <div>
        <p
          className="absolute z-10 -rotate-90 font-antonio text-8xl -bottom-1 -left-3 md:lg:text-[150px] font-bold md:lg:left-[470px] md:lg:-bottom-[18px] drop-shadow-md"
          style={{ color: "#8C8C8C" }}
        >
          022
        </p>
      </div>
       {/* xxx */}
       <div className="absolute invisible bottom-0 left-6 md:lg:visible md:lg:bottom-4 md:lg:left-16 md:lg:rotate-90">
        <BiPlusMedical
          className="rotate-45 text-2xl md:lg:text-2xl text-red-600"
          
        />
        <BiPlusMedical
          className="rotate-45 text-2xl md:lg:text-2xl text-red-600"
          
        />
        <BiPlusMedical
          className="rotate-45 text-2xl md:lg:text-2xl text-red-600"
          
        />
      </div>
       {/* red bar / circle */}
       <div
        className="absolute invisible bottom-0 left-0 rounded-full  h-20 w-20 md:lg:visible  md:lg:z-10  md:lg:-top-3 md:lg:left-[1019px] md:lg:w-64 md:lg:h-[642px] md:lg:rounded-none mix-blend-multiply "
        style={{ background: "#e73c37" }}
      ></div>
       {/* social links div */}
       <div className="flex justify-end mt-[240px] mr-9 lg:md:mt-48">
        <div className="md:lg:-mt-[220px] md:lg:mr-10">
          <div className="absolute z-10 right-3">
            <a href="https://www.facebook.com/eldrich.jyuri.sumabat.22" target="_blank">
              <FaFacebookSquare
                className="text-2xl mb-3 md:lg:mb-4 md:lg:text-2xl text-red-600 hover:text-gray-800"
                // 
              />
            </a>
            <a href="https://instagram.com/dricht_?igshid=MzMyNGUyNmU2YQ==" target="_blank">
              <AiFillInstagram
                className="text-2xl mb-3 md:lg:mb-4 md:lg:text-2xl text-red-600 hover:text-gray-800"
                
              />
            </a>
            <a href="https://www.linkedin.com/in/eldrich-jyuri-sumabat" target="_blank">
              <FaLinkedin
                className="text-2xl mb-3 md:lg:mb-4 text-red-600  hover:text-gray-800"
              />
            </a>
            <a href="https://github.com/Eldrich-Yurii" target="_blank">
              <FaGithubSquare
                className="text-2xl mb-3 md:lg:mb-4 md:lg:text-2xl text-red-600 hover:text-gray-800"
                // 
              />
            </a>
            <a href="mailto:eldrichjyuris@gmail.com" target="_blank">
              <SiGmail className="text-2xl mb-3 md:lg:mb-4 md:lg:text-2xl text-red-600 hover:text-gray-800" 
              //  
              />
            </a>
          </div>
          <div className="md:lg:-mt-4 -rotate-90">
            <div
              className="absolute top-2 left-6 h-1 w-20 md:lg:top-12"
              style={{ background: "#282828" }}
            ></div>
            <p className="absolute -top-1 -right-[310px] text-sm md:lg:text-base md:lg:mt-11 md:lg:ml-24 w-48 font-montserrat font-bold text-gray-800">
              L E T ' S&nbsp;&nbsp;C O N N E C T
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src={Border}
          alt=""
          className="rotate absolute bottom-[70px] right-[70px] w-56 md:lg:w-[530px] md:lg:top-[60px] md:lg:right-[114px] opacity-40 grayscale "
        />
        <img
          src={Border}
          alt=""
          className="reverse-rotate absolute bottom-[90px] right-[24vw] w-[190px] md:lg:w-[350px] md:lg:top-[161px] md:lg:right-[210px] opacity-40 grayscale"
        />
      </div>
      </div>
      
    </>
  );
};

export default Intro;
