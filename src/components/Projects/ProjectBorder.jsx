import React from "react";
import { BiPlusMedical } from "react-icons/bi";

const ProjectBorder = () => {
  return (
    <>
      <div>
        <div className="absolute mt-32 -ml-16">
          <div className="flex gap-4 rotate-90">
            <p className="text-xl font-bold tracking-wide font-montserrat">
              MY <span style={{ color: "#e73c37" }}>PROJECTS</span>
            </p>
            <div
              className=" mt-3 h-1 w-20"
              style={{ background: "#282828" }}
            ></div>
          </div>
        </div>
        <div className="absolute flex rotate-90 mt-[470px] ml-6">
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
        <div>
          <div className="absolute flex -rotate-90 mt-[250px] ml-[1020px] gap-12 ">
            <div className="flex gap-4 w-96">
              <p className=" text-xl font-bold tracking-wide font-montserrat ">
                MY <span style={{ color: "#e73c37" }}>PROJECTS</span>
              </p>
              <div
                className=" mt-3 h-1 w-20"
                style={{ background: "#282828" }}
              ></div>
            </div>
            <div className="flex">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBorder;
