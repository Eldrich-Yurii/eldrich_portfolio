import React from "react";
import { FaCheck } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <div className="h-screen font-montserrat">
        <div className="flex">
          <div
            className=" mt-12 h-1 w-14 md:lg:w-24"
            style={{ background: "#E73C37" }}
          ></div>
          <p className=" ml-5 mt-[35px] text-2xl font-medium">
            TECHNICAL SKILLS
          </p>
        </div>
        <div>
            {/* Cards of skills */}
        <div className=" mt-5 ml-8 md:lg:absolute md:lg:mt-16 md:lg:ml-24">
          <div className="grid md:lg:grid-cols-2 gap-4">
            <div
              className=" bg-gray-200 w-72 px-6 py-3 drop-shadow-lg md:lg:px-10 md:lg:p-8 md:lg:w-[480px]"
              style={{ background: "#D9D9D9" }}
            >
              <p className="font-medium text-md md:lg:pb-4 ">
                FRONTEND DEVELOPMENT
              </p>
              <ul className="text-sm font-medium">
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">HTML</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">CSS</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">BOOTSTRAP</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">TAILWIND</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">JAVASCRIPT</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">REACT JS</li>
              </ul>
            </div>
            {/* GRAPHIC DESIGN */}
            <div
              className="bg-gray-200 w-72 px-6 py-3 drop-shadow-lg md:lg:w-[480px] md:lg:h-[150px] md:lg:p-8 md:lg:px-10"
              style={{ background: "#D9D9D9" }}
            >
              <p className="font-medium text-md md:lg:pb-4 ">
                GRAPHIC DESIGN
              </p>
              <ul className="text-sm  font-medium">
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">UI/UX DESIGN</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">LOGO</li>
              </ul>
            </div>
          </div>
          {/* BACKEND DEVELOPMENT */}
          <div className="grid md:lg:grid-cols-2 gap-4 pt-4">
            <div
              className="bg-gray-200 w-72 px-6 py-3 md:lg:w-[480px] md:lg:p-8 md:lg:px-10 drop-shadow-lg"
              style={{ background: "#D9D9D9" }}
            >
              <p className="font-medium text-md ">
                BACKEND DEVELOPMENT
              </p>
              <ul className="text-sm  font-medium">
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">LARAVEL</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">NODE JS</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">EXPRESS JS</li>
              </ul>
            </div>
            {/* TOOLS */}
            <div
              className="bg-gray-200 w-72 px-6 py-3 drop-shadow-lg md:lg:-mt-[75px] md:lg:w-[480px] md:lg:p-8 md:lg:px-10"
              style={{ background: "#D9D9D9" }}
            >
              <p className="font-medium text-md ">TOOLS</p>
              <ul className="text-sm  font-medium">
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">VISUAL STUDIO CODE</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">POSTMAN</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">XAMPP</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">DBEAVER</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">FIGMA</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">CANVA</li>
                <FaCheck  className="absolute text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">ADOBE ILLUSTRATOR</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        <div className="invisible absolute  md:lg:mt-[75vh] md:lg:ml-8 md:lg:visible">
          <div className="">
            <p className="relative -ml-9 -mt-6 rotate-90 font-montserrat font-semibold">
              WEB DESIGN &
            </p>
            <p className="absolute ml-10 mt-9 font-montserrat font-bold text-red-600">
              DEVELOPMENT
            </p>
          </div>
        </div>
        {/* skills */}
        <p
          className="absolute invisible md:lg:visible md:lg:text-center md:lg:tracking-wider md:lg:bg-red-600 md:lg:text-[150px] md:lg:font-montserrat md:lg:font-black md:lg:w-[37.9rem] md:lg:-rotate-90 md:lg:mt-[124px] md:lg:ml-[932px] md:lg:px-2"
          style={{ color: "#c8c7c7" }}
        >
          SKILLS
        </p>
      </div>
    </>
  );
};

export default Skills;
