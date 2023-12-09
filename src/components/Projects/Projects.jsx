import React from "react";
import { Carousel } from "@material-tailwind/react";
import Pic1 from "./assets/1.png";
import Pic2 from "./assets/2.png";
import Pic3 from "./assets/3.png";
import Pic4 from "./assets/4.png";
import Pic5 from "./assets/5.png";
import Pic6 from "./assets/6.png";
import Pic7 from "./assets/7.png";
import ProjectBorder from "./ProjectBorder";

const data = [
  {
    id: 1,
    img: Pic1,
  },
  {
    id: 2,
    img: Pic2,
  },
  {
    id: 3,
    img: Pic3,
  },
  {
    id: 4,
    img: Pic4,
  },
  {
    id: 5,
    img: Pic5,
  },
  {
    id: 6,
    img: Pic6,
  },
  {
    id: 7,
    img: Pic7,
  },
];

const Projects = () => {
  return (
    <>
      <div className=" h-auto bg-gray-300 pb-8">
        <p className=" font-montserrat text-4xl text-center font-semibold py-8">
          PROJECT <span style={{ color: "#e73c37" }}>EXPERIENCES</span>
        </p>
        <div>
          <ProjectBorder />
        </div>
        <div className="absolute mt-[600px] w-full">
          <ProjectBorder />
        </div>
        {/* Slide 1 Weatheria */}
        <div className="flex justify-center">
          <Carousel
            autoplay
            loop
            className="h-[500px] w-[1000px] pt-2"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {data.map((items) => {
              return (
                <img src={items.img} alt="image 1" className="h-full w-full" />
              );
            })}
          </Carousel>
        </div>
        <div>
          <div className="flex justify-center gap-32 pt-10 pb-5">
            <span className="text-xl font-montserrat font-bold">WEATHERIA</span>
            <span
              className="text-lg font-montserrat font-semibold"
              style={{ color: "#e73c37" }}
            >
              November 2023
            </span>
          </div>
          <div className="flex justify-center">
            <p className="w-[400px] text-justify pb-20 font-montserrat">
              A flood monitoring and risk management system specifically for
              Barangay Panghulo, Obando Bulacan. Developed to help Barangay
              officials predict possible floods depending on the data gathered
              from PAGASA. And help them notify their residents through SMS
              blasts to ensure that can prepare immediately when there is
              possible flood in their area.
            </p>
          </div>
        </div>

        {/* Slide 2 key to your Home */}
        <div className="flex justify-center">
          <Carousel
            autoplay
            loop
            className="h-[500px] w-[1000px] pt-2"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {data.map((items) => {
              return <img src={items.img} alt="" className="h-full w-full" />;
            })}
          </Carousel>
        </div>
        <div>
          <div className="flex justify-center gap-32 pt-10 pb-5">
            <span className="text-xl font-montserrat font-bold">WEATHERIA</span>
            <span
              className="text-lg font-montserrat font-semibold"
              style={{ color: "#e73c37" }}
            >
              November 2023
            </span>
          </div>
          <div className="flex justify-center">
            <p className="w-[400px] text-justify pb-20 font-montserrat">
              A flood monitoring and risk management system specifically for
              Barangay Panghulo, Obando Bulacan. Developed to help Barangay
              officials predict possible floods depending on the data gathered
              from PAGASA. And help them notify their residents through SMS
              blasts to ensure that can prepare immediately when there is
              possible flood in their area.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
