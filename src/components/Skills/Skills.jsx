import React from "react";
import { BiPlusMedical } from "react-icons/bi";

const Skills = () => {
  return (
    <>
      <div className="h-screen font-montserrat">
        <div className="flex">
          <div
            className=" mt-12 h-1 w-14 md:lg:w-24"
            style={{ background: "#E73C37" }}
          ></div>
          <p className=" ml-5 mt-[35px] text-xl font-medium md:lg:text-2xl">
            TECHNICAL SKILLS
          </p>
        </div>
        <div>
            {/* Cards of skills */}
        <div className="absolute mt-5 ml-6 md:lg:mt-10 md:lg:ml-24">
          <div className="grid md:lg:grid-cols-2 gap-4">
            <div
              className=" bg-gray-200 w-72 px-6 py-3 drop-shadow-lg md:lg:px-10 md:lg:p-8 md:lg:w-[480px]"
              style={{ background: "#D9D9D9" }}
            >
              <p className="font-medium text-md pb-2 md:lg:pb-4 ">
                FRONTEND DEVELOPMENT
              </p>
              <ul className="text-medium ml-0 md:lg:font-medium">
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">HTML</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">CSS</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">BOOTSTRAP</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">TAILWIND</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">JAVASCRIPT</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">REACT JS</li>
              </ul>
            </div>
            {/* GRAPHIC DESIGN */}
            <div
              className="bg-gray-200 w-72 px-6 py-3 md:lg:w-[480px] md:lg:h-[150px] md:lg:p-8 md:lg:px-10"
              style={{ background: "#D9D9D9" }}
            >
              <p className="font-medium text-md md:lg:pb-4 ">
                GRAPHIC DESIGN
              </p>
              <ul className="text-medium  font-medium">
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">UI/UX DESIGN</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
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
              <p className="font-medium text-md pb-4 ">
                BACKEND DEVELOPMENT
              </p>
              <ul className="text-medium  font-medium">
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">LARAVEL</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">NODE JS</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">EXPRESS JS</li>
              </ul>
            </div>
            {/* TOOLS */}
            <div
              className="bg-gray-200 w-72 px-6 py-3 drop-shadow-lg md:lg:-mt-[100px] md:lg:w-[480px] md:lg:p-8 md:lg:px-10"
              style={{ background: "#D9D9D9" }}
            >
              <p className="font-medium text-md pb-4 ">TOOLS</p>
              <ul className="text-medium  font-medium">
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">VISUAL STUDIO CODE</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">POSTMAN</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">XAMPP</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">DBEAVER</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">FIGMA</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">CANVA</li>
                <BiPlusMedical className="absolute rotate-45 text-sm ml-4 mt-1 text-red-600" />
                <li className="ml-10">ADOBE ILLUSTRATOR</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        <div className="absolute mt-[535px] ml-8">
          <div className="">
            <p className="relative -ml-9 -mt-6 rotate-90 font-montserrat font-semibold">
              WEB DESIGN &
            </p>
            <p className="absolute ml-10 mt-9 font-montserrat font-bold text-red-600">
              DEVELOPMENT
            </p>
          </div>
        </div>
        <p
          className="absolute invisible md:lg:visible md:lg:text-center md:lg:tracking-wider md:lg:bg-red-600 md:lg:text-[150px] md:lg:font-montserrat md:lg:font-black md:lg:w-[619px] md:lg:-rotate-90 md:lg:mt-[130px] md:lg:ml-[927px]"
          style={{ color: "#c8c7c7" }}
        >
          SKILLS
        </p>
      </div>
    </>
  );
};

export default Skills;
