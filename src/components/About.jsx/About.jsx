import React from "react";
import Pic from "./assets/ABOUT-PIC.webp";
import Border from "./assets/Border1.webp";
import Logo from "./assets/eldrich+logo_RED.webp";
import "./About.css";
import { BiPlusMedical } from "react-icons/bi";

const About = () => {
  return (
    <>
      <div className="mt-8 h-screen bg-gray-200" id="about">
        <div>
          <div className="absolute mt-12 h-1 w-20 bg-red-600"></div>
          <p className="absolute ml-24 mt-[35px] text-lg font-medium">
            ABOUT ME
          </p>

          {/* xxx */}
          <div className="absolute rotate-90 mt-5 right-16 md:lg:mt-3 md:lg:right-10">
            <BiPlusMedical className="rotate-45 text-lg md:lg:text-2xl text-red-600" />
            <BiPlusMedical className="rotate-45 text-lg md:lg:text-2xl text-red-600" />
            <BiPlusMedical className="rotate-45 text-lg md:lg:text-2xl text-red-600" />
          </div>
        </div>
        <div className="grid md:lg:grid-cols-2">
          <div className="ml-11 -mt-8">
            {/* pic ko */}
            <img src={Pic} alt="" className="relative top-24 z-10 w-64 md:lg:w-96 md:lg:top-32 md:lg:ml-16" />
            {/* rotating circle border */}
            <img
              src={Border}
              alt=""
              className="rotate_border absolute -mt-32 ml-10 w-[50%]  md:lg:w-[330px] md:lg:-mt-[210px] md:lg:ml-[90px]"
            />
            {/* bilog sa likod */}
            <div className="absolute w-20 h-20 -mt-20 ml-[90px] md:lg:w-[180px] md:lg:h-[180px] bg-red-600 rounded-full md:lg:-mt-32 md:lg:ml-[165px]"></div>
          </div>
          {/* description */}
          <div className="font-montserrat pt-28 px-4 w-80 md:lg:w-[650px] md:lg:px-8">
            <div>
              <h1 className="pb-4 text-2xl font-semibold md:lg:text-4xl text-red-600 md:lg:font-bold">
                WHO AM I?
              </h1>
            </div>
            <div>
              <p className="font-semibold px-2 text-md md:lg:text-2xl md:lg:leading-9 md:lg:font-medium">
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
        <div>
          {/* xxx */}
        <div className="flex absolute pt-4 ml-6  md:lg:pt-12 md:lg:mb-20 md:lg:ml-7">
          <BiPlusMedical className="rotate-45 text-lg md:lg:text-2xl text-red-600" />
          <BiPlusMedical className="rotate-45 text-lg md:lg:text-2xl text-red-600" />
          <BiPlusMedical className="rotate-45 text-lg md:lg:text-2xl text-red-600" />
        </div>
         {/* logo */}
         <div className="absolute right-10 mt-4 md:lg:right-2 md:lg:mt-6">
          <img src={Logo} alt="Logo" className="w-5 md:lg:w-12" />
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
