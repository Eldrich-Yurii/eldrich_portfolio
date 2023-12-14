import React from "react";
import Pic from "./assets/ABOUT-PIC.webp";
import Border from "./assets/Border1.webp";
import Logo from "./assets/eldrich+logo_RED.webp";
import "./About.css";
import { BiPlusMedical } from "react-icons/bi";

const About = () => {
  return (
    <>
      <div className="mt-8 h-screen md:lg:bg-gray-200" id="about">
        <div>
          <div className="absolute mt-12 h-1 w-20 bg-red-600"></div>
          <p className="absolute ml-24 mt-[35px] text-2xl font-medium">
            ABOUT ME
          </p>
         
        </div>
        <div className="grid md:lg:grid-cols-2">
          <div className="ml-11 mt-20 md:lg:mt-0">
            {/* pic ko */}
            <img src={Pic} alt="" className="relative  z-10 w-64 md:lg:w-96 md:lg:mt-32 md:lg:ml-16 brightness-95" />
            {/* rotating circle border */}
            <img
              src={Border}
              alt=""
              className="rotate_border absolute -mt-56 ml-10 w-[50%]  md:lg:w-[330px] md:lg:-mt-[350px] md:lg:ml-[90px]"
            />
            {/* bilog sa likod */}
            <div className="absolute w-20 h-20 -mt-[175px] ml-[92px] md:lg:w-[180px] md:lg:h-[180px] bg-red-600 rounded-full md:lg:-mt-[270px] md:lg:ml-[165px]"></div>
          </div>
          {/* description */}
          <div className="font-montserrat mt-3 pl-8  w-80 md:lg:w-[650px] md:lg:mt-48 md:lg:-ml-20 md:lg:pl-8">
            <div>
              <h1 className="py-4 text-2xl font-semibold md:lg:text-4xl text-red-600 md:lg:font-bold">
                WHO AM I?
              </h1>
            </div>
            <div>
              <p className="font-semibold text-md  md:lg:text-2xl md:lg:leading-9 md:lg:font-medium">
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
      </div>
    </>
  );
};

export default About;
