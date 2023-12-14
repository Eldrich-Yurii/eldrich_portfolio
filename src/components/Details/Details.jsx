import React from "react";
import Pic from "./assets/ABOUT-PIC.webp";
import Border from "./assets/Border1.webp";
import "./Details.css";
import { BiPlusMedical } from "react-icons/bi";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Details = () => {
  return (
    <>
      <div className="mt-8 h-screen bg-gray-300" id="details">
        {/* lets connect and social accounts */}
        <div className="absolute mt-[200px]">
          <div className="flex -ml-24 md:lg:-ml-20 items-center rotate-90 w-[250px]">
            <p className="w-72 font-montserrat font-bold">
              L E T ' S&nbsp;&nbsp; C O N N E C T
            </p>
            <div className="h-1 w-20" style={{ background: "#282828" }}></div>
          </div>
          <div className="ml-4 md:lg:ml-[33px] mt-32">
            <a
              href="https://www.facebook.com/eldrich.jyuri.sumabat.22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="text-2xl mb-5  text-red-600 hover:text-gray-800" />
            </a>
            <a
              href="https://instagram.com/dricht_?igshid=MzMyNGUyNmU2YQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="text-2xl mb-5  text-red-600 hover:text-gray-800" />
            </a>
            <a
              href="www.linkedin.com/in/eldrich-jyuri-sumabat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl mb-5  text-red-600 hover:text-gray-800" />
            </a>
            <a
              href="https://github.com/Eldrich-Yurii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="text-2xl mb-5  text-red-600 hover:text-gray-800" />
            </a>
            <a
              href="mailto:eldrichjyuris@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail className="text-2xl mb-5  text-red-600 hover:text-gray-800" />
            </a>
          </div>
        </div>
        <div className="md:lg:grid md:lg:grid-cols-2">
          <div className="ml-16 md:lg:ml-32">
            {/* pic ko */}
            <img src={Pic} alt="" className="relative pt-20 w-72 ml-2 md:lg:absolute z-10 md:lg:w-96 md:lg:pt-32 md:lg:ml-16" />
            {/* rotating circle border */}
            <img
              src={Border}
              alt=""
              className="rotate_border absolute -mt-[230px] ml-10 w-56 md:lg:w-[330px] md:lg:mt-[160px] md:lg:ml-[90px]"
            />
            {/* bilog sa likod */}
            <div
              className="absolute -mt-[180px] ml-[86px] w-32 h-32 md:lg:w-[180px] md:lg:h-[180px] rounded-full md:lg:mt-[238px] md:lg:ml-[165px]"
              style={{ background: "#E73C37" }}
            ></div>
          </div>
          {/* description */}
          <div className="ml-16 md:lg:ml-0 md:lg:pt-36 md:lg:w-[500px]">
            <div>
              <h1
                className="md:lg:pb-4 font-montserrat font-bold text-xl md:lg:text-4xl"
                style={{ color: "#e73c37" }}
              >
                MORE <span style={{ color: "#282828" }}>ABOUT ME</span>
              </h1>
            </div>
            <div>
              <p
                className="md:lg:text-xl font-montserrat font-medium leading-loose"
                style={{ color: "#282828" }}
              >
                <span className="text-sm md:lg:text-base font-bold">AGE :</span> 21 <br />
                <span className="text-sm md:lg:text-base font-bold">DATE OF BIRTH :</span> OCTOBER 22, 2002 <br />
                <span className="text-sm md:lg:text-base font-bold">NATIONALITY :</span> FILIPINO <br />
                <span className="text-sm md:lg:text-base font-bold"> GENDER :</span> MALE <br />
                <span className="text-sm md:lg:text-base font-bold"> LANGUAGE :</span> TAGALOG, ENGLISH <br />
                <span className="text-sm md:lg:text-base font-bold">MBTI :</span>INFJ-T <br />
                <span className="text-sm md:lg:text-base font-bold">CONTACT NUMBER :</span> (+63)9810238115 <br />
                <span className="text-sm md:lg:text-base font-bold">ADDRESS :</span> STA. MARIA BULACAN
              </p>
            </div>
          </div>
        </div>
        <div className="absolute invisible md:lg:-rotate-90 md:lg:-mt-[230px] md:lg:ml-[1050px]">
          <div className="flex md:lg:justify-between md:lg:w-[540px] ">
            <div className="flex items-center">
              <p
                className="pr-5 font-montserrat font-bold"
                style={{ color: "#E73C37" }}
              >
                ABOUT <span style={{ color: "#282828" }}>ME</span>
              </p>
              <div className="h-1 w-20" style={{ background: "#282828" }}></div>
            </div>
            <div className="flex">
              <BiPlusMedical
                className="text-2xl mr-1 rotate-45"
                style={{ color: "#E73C37" }}
              />
              <BiPlusMedical
                className="text-2xl mr-1 rotate-45"
                style={{ color: "#E73C37" }}
              />
              <BiPlusMedical
                className="text-2xl mr-1 rotate-45"
                style={{ color: "#E73C37" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
