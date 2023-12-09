import React from "react";
import { BiPlusMedical } from "react-icons/bi";

const Skills = () => {
  return (
    <>
      <div className="h-screen" style={{ background: "#c8c7c7" }}>
        <div
          className="absolute mt-12 h-1 w-20"
          style={{ background: "#E73C37" }}
        ></div>
        <p className="absolute ml-24 mt-[35px] text-2xl font-medium">
          TECHNICAL SKILLS
        </p>
        {/* xxx */}
        <div className="absolute flex rotate-90 mt-32 ml-4">
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
        {/* Cards of skills */}
        <div className="absolute mt-24 ml-24">
          <div className="grid grid-cols-2 gap-4">
            <div
              className="w-[480px] bg-gray-200 p-8 px-10 drop-shadow-lg"
              style={{ background: "#D9D9D9" }}
            >
              <p
                className="font-medium text-lg pb-4 font-montserrat"
                style={{ color: "#e73c37" }}
              >
                FRONTEND DEVELOPMENT
              </p>
              <ul className="text-medium font-montserrat font-medium">
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">HTML</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">CSS</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">BOOTSTRAP</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">TAILWIND</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">JAVASCRIPT</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">REACT JS</li>
              </ul>
            </div>
            {/* GRAPHIC DESIGN */}
            <div
              className="w-[480px] h-[150px] bg-gray-200 p-8 px-10 drop-shadow-lg"
              style={{ background: "#D9D9D9" }}
            >
              <p
                className="font-medium text-lg pb-4 font-montserrat"
                style={{ color: "#e73c37" }}
              >
                GRAPHIC DESIGN
              </p>
              <ul className="text-medium font-montserrat font-medium">
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">UI/UX DESIGN</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">LOGO</li>
              </ul>
            </div>
          </div>
          {/* BACKEND DEVELOPMENT */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div
              className="w-[480px] bg-gray-200 p-8 px-10 drop-shadow-lg"
              style={{ background: "#D9D9D9" }}
            >
              <p
                className="font-medium text-lg pb-4 font-montserrat"
                style={{ color: "#e73c37" }}
              >
                BACKEND DEVELOPMENT
              </p>
              <ul className="text-medium font-montserrat font-medium">
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">LARAVEL</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">NODE JS</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">EXPRESS JS</li>
              </ul>
            </div>
            {/* TOOLS */}
            <div
              className="-mt-[100px] w-[480px] bg-gray-200 p-8 px-10 drop-shadow-lg"
              style={{ background: "#D9D9D9" }}
            >
              <p
                className="font-medium text-lg pb-4 font-montserrat"
                style={{ color: "#e73c37" }}
              >
                TOOLS
              </p>
              <ul className="text-medium font-montserrat font-medium">
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">VISUAL STUDIO CODE</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">POSTMAN</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">XAMPP</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">DBEAVER</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">FIGMA</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">CANVA</li>
                <BiPlusMedical
                  className="absolute rotate-45 text-sm ml-4 mt-1"
                  style={{ color: "#e73c37" }}
                />
                <li className="ml-10">ADOBE ILLUSTRATOR</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute mt-[535px] ml-8">
            <div className="">
                <p className="relative -ml-9 -mt-6 rotate-90 font-montserrat font-semibold">WEB DESIGN &</p>
                <p className="absolute ml-10 mt-9 font-montserrat font-bold" style={{ color: "#e73c37" }}>DEVELOPMENT</p>
            </div>
        </div>
        <p
          className="absolute text-center tracking-wider text-[150px] font-montserrat font-black w-[619px] -rotate-90 mt-[197px] ml-[927px]"
          style={{ background: "#e73c37", color: "#c8c7c7" }}
        >
          SKILLS
        </p>
      </div>
    </>
  );
};

export default Skills;
