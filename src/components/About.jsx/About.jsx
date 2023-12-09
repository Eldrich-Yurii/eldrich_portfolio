import React from "react";
import Pic from "./assets/ABOUT-PIC.webp";
import Border from "./assets/Border1.webp"
import Logo from "./assets/eldrich+logo_RED.webp";
import "./About.css";
import { BiPlusMedical } from "react-icons/bi";

const About = () => {
  return (
    <>
      <div className="mt-8 h-screen bg-gray-200">
        <div
          className="absolute mt-12 h-1 w-20"
          style={{ background: "#E73C37" }}
        ></div>
        <p className="absolute ml-24 mt-[35px] text-lg font-medium">ABOUT ME</p>
        <div className="grid grid-cols-2">
          <div className="ml-11">
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
          <div className="pt-36 -ml-28 w-[700px]">
            <div>
              <h1
                className="pb-4 text-4xl font-montserrat font-bold"
                style={{ color: "#e73c37" }}
              >
                WHO AM I?
              </h1>
            </div>
            <div>
              <p className="text-3xl font-montserrat font-medium">
                A web developer with creativity, independence, and adaptability.
                skilled in a variety of technologies, including HTML, CSS,
                JavaScript, Node.js, Laravel, and MySQL. I am also skilled in
                different designing tools such as Figma, Illustrator and Canva.
                Self-organized when working on individual projects, and
                dedicated to contributing to a collaborative team environment.
              </p>
            </div>
          </div>
        </div>
        {/* xxx */}
        <div className="flex ml-10 mt-11">
          <BiPlusMedical
            className="rotate-45 text-2xl"
            style={{ color: "#e73c37" }}
          />
          <BiPlusMedical
            className="rotate-45 text-2xl"
            style={{ color: "#e73c37" }}
          />
          <BiPlusMedical
            className="rotate-45 text-2xl"
            style={{ color: "#e73c37" }}
          />
        </div>
        {/* xxx */}
        <div className="flex justify-end -mt-[550px] mr-8">
          <BiPlusMedical
            className="rotate-45 text-2xl"
            style={{ color: "#e73c37" }}
          />
          <BiPlusMedical
            className="rotate-45 text-2xl"
            style={{ color: "#e73c37" }}
          />
          <BiPlusMedical
            className="rotate-45 text-2xl"
            style={{ color: "#e73c37" }}
          />
        </div>
        {/* logo */}
        <div className="flex justify-end items-end h-[535px] mr-8">
          <img src={Logo} alt="Logo" className="w-12" />
        </div>
      </div>
    </>
  );
};

export default About;
