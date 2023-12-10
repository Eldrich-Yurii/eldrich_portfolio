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
      {/* Logo */}
      <div id="intro">
        <img src={Logo} alt="Logo" className="pt-4 ml-6 w-16" />
      </div>
      {/* main pic */}
      <div>
        <img
          src={MainPic}
          alt=""
          className="absolute z-10 -mt-[92px] ml-[670px] w-[620px]"
        />
      </div>
      {/* Greeting */}
      <div className="mt-28 ml-10 font-montserrat">
        <p className=" text-[40px] font-medium">
          Hi there <span className="text-red-600">!</span>
        </p>
        <p className=" text-7xl font-semibold w-[800px]">
          I am Eldrich Jyuri Sumabat
        </p>
        <p className="text-lg font-semibold text-red-600" >
          W E B&nbsp;&nbsp;&nbsp;D E V E L O P E R
        </p>
      </div>
      {/* 022 */}
      <div>
        <p
          className="absolute -rotate-90 font-antonio text-[150px] font-bold ml-[491px] mt-[2px] drop-shadow-md"
          style={{ color: "#8C8C8C" }}
        >
          022
        </p>
      </div>
      {/* xxx */}
      <div className="flex ml-10 mt-32">
        <BiPlusMedical
          className="rotate-45 text-2xl text-red-600"
          
        />
        <BiPlusMedical
          className="rotate-45 text-2xl text-red-600"
          
        />
        <BiPlusMedical
          className="rotate-45 text-2xl text-red-600"
          
        />
      </div>
      {/* red bar */}
      <div
        className="absolute z-10  -mt-[600px] ml-[1019px] w-64 h-[632px] mix-blend-multiply"
        style={{ background: "#e73c37" }}
      ></div>
      {/* social links div */}
      <div className="flex justify-end">
        <div className="-mt-[220px] mr-11">
          <div className="absolute">
            <a href="https://www.facebook.com/eldrich.jyuri.sumabat.22" target="_blank">
              <FaFacebookSquare
                className="mb-4 text-2xl text-red-600 hover:text-gray-800"
                // 
              />
            </a>
            <a href="https://instagram.com/dricht_?igshid=MzMyNGUyNmU2YQ==" target="_blank">
              <AiFillInstagram
                className="mb-4 text-2xl text-red-600 hover:text-gray-800"
                
              />
            </a>
            <a href="https://www.linkedin.com/in/eldrich-jyuri-sumabat" target="_blank">
              <FaLinkedin
                className="mb-4 text-2xl text-red-600  hover:text-gray-800"
              />
            </a>
            <a href="https://github.com/Eldrich-Yurii" target="_blank">
              <FaGithubSquare
                className="mb-4 text-2xl text-red-600 hover:text-gray-800"
                // 
              />
            </a>
            <a href="mailto:eldrichjyuris@gmail.com" target="_blank">
              <SiGmail className="mb-4 text-2xl text-red-600 hover:text-gray-800" 
              //  
              />
            </a>
          </div>
          <div className="-mt-4 -rotate-90">
            <div
              className="absolute mt-2 h-1 w-20"
              style={{ background: "#282828" }}
            ></div>
            <p className="absolute -mt-1 ml-24 w-48 font-montserrat font-bold text-gray-800">
              L E T ' S&nbsp;&nbsp;C O N N E C T
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src={Border}
          alt=""
          className="rotate absolute w-[530px] -mt-[520px] ml-[700px] opacity-40 grayscale "
        />
        <img
          src={Border}
          alt=""
          className="reverse-rotate absolute w-[325px] -mt-[415px] ml-[801px] opacity-40 grayscale"
        />
      </div>
    </>
  );
};

export default Intro;
