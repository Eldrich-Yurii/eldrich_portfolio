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
      <div className="mt-8 h-screen bg-gray-300">
        {/* lets connect and social accounts */}
        <div className="absolute mt-[200px]">
          <div className="flex -ml-20 items-center rotate-90 w-[250px]">
            <p className="w-72 font-montserrat font-bold">
              L E T ' S&nbsp;&nbsp; C O N N E C T
            </p>
            <div className="h-1 w-20" style={{ background: "#282828" }}></div>
          </div>
          <div className="ml-[33px] mt-32">
            <FaFacebookSquare
              className="text-2xl mb-5"
              style={{ color: "#E73C37" }}
            />
            <AiFillInstagram
              className="text-2xl mb-5"
              style={{ color: "#E73C37" }}
            />
            <FaLinkedin
              className="text-2xl mb-5"
              style={{ color: "#E73C37" }}
            />
            <FaGithubSquare
              className="text-2xl mb-5"
              style={{ color: "#E73C37" }}
            />
            <SiGmail className="text-2xl mb-5" style={{ color: "#E73C37" }} />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="ml-32">
            {/* pic ko */}
            <img src={Pic} alt="" className="absolute z-10 w-96 pt-32 ml-16" />
            {/* rotating circle border */}
            <img
              src={Border}
              alt=""
              className="rotate_border absolute w-[330px] mt-[160px] ml-[90px]"
            />
            {/* bilog sa likod */}
            <div
              className="absolute w-[180px] h-[180px]  rounded-full mt-[238px] ml-[165px]"
              style={{ background: "#E73C37" }}
            ></div>
          </div>
          {/* description */}
          <div className="pt-36 w-[500px]">
            <div>
              <h1
                className="pb-4 text-4xl font-montserrat font-bold"
                style={{ color: "#e73c37" }}
              >
                MORE <span style={{ color: "#282828" }}>ABOUT ME</span>
              </h1>
            </div>
            <div>
              <p
                className="text-xl font-montserrat font-medium leading-loose"
                style={{ color: "#282828" }}
              >
                <span className="font-semibold">AGE :</span> 21 <br />
                <span className="font-semibold">DATE OF BIRTH :</span> OCTOBER
                22, 2002 <br />
                <span className="font-semibold">
                  {" "}
                  NATIONALITY :
                </span> FILIPINO <br />
                <span className="font-semibold"> GENDER :</span> MALE <br />
                <span className="font-semibold"> LANGUAGE :</span> TAGALOG,
                ENGLISH <br />
                <span className="font-semibold">MBTI :</span> INFJ-T <br />
                <span className="font-semibold">CONTACT NUMBER :</span>{" "}
                (+63)9810238115 <br />
                <span className="font-semibold">ADDRESS :</span> STA. MARIA
                BULACAN
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -rotate-90 -mt-[230px] ml-[1050px]">
          <div className="flex justify-between w-[540px] ">
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
