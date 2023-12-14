import React from "react";
import { Carousel } from "@material-tailwind/react";
import Pic1 from "./assets/1.png";
import Pic2 from "./assets/2.png";
import Pic3 from "./assets/3.png";
import Pic4 from "./assets/4.png";
import Pic5 from "./assets/5.png";
import Pic6 from "./assets/6.png";
import Pic7 from "./assets/7.png";
import { FaCircle } from "react-icons/fa";

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
      <div className=" h-auto md:lg:bg-gray-300 py-20" id="project">
        <p className=" font-montserrat text-center font-semibold pb-6 text-3xl  md:lg:pb-16 md:lg:text-4xl">
          PROJECT <span style={{ color: "#e73c37" }}>EXPERIENCES</span>
        </p>
       
        {/* Slide 1 Weatheria */}
        <div className="flex justify-center" id="weatheria">
          <Carousel
            autoplay
            loop
            className="w-72 pt-10 md:lg:h-[500px]  md:lg:w-[1000px] md:lg:pt-2"
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
          <div className="font-montserrat  md:lg:flex justify-around px-10  md:lg:px-72  md:lg:pt-20">
            <div className="md:lg:w-[400px]">
              <div className="pt-6 md:lg:flex md:lg:justify-between md:lg:pb-6 md:lg:pt-0 ">
                <p className="text-xl font-bold">WEATHERIA</p>
                <p className="text-lg font-semibold text-red-600">
                  November 2023
                </p>
              </div>
              <div className="pb-4 text-justify md:lg:pb-16">
                <p className="text-sm  md:lg:text-base">
                  A flood monitoring and risk management system specifically for
                  Barangay Panghulo, Obando Bulacan. Developed to help Barangay
                  officials predict possible floods depending on the data
                  gathered from PAGASA. And help them notify their residents
                  through SMS blasts to ensure that can prepare immediately when
                  there is possible flood in their area.
                </p>
              </div>
            </div>
            <div>
              <ul className="text-lg ml-5 md:lg:text-xl md:lg:leading-10 md:lg:pt-8 md:lg:ml-0">
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>REACT JS</li>
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>TAILWIND</li>
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>LARAVEL</li>
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 2 key to your Home */}
        <div className="flex justify-center" id="key">
          <Carousel
            autoplay
            loop
            className="w-72 pt-10 md:lg:h-[500px]  md:lg:w-[1000px] md:lg:pt-2"
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
          <div className="font-montserrat md:lg:flex md:lg:justify-around px-10  md:lg:px-72  md:lg:pt-20">
            <div className=" md:lg:w-[400px]">
              <div className="pt-6 md:lg:pt-0 md:lg:flex md:lg:justify-between md:lg:pb-6">
                <p className="text-xl font-bold">KEY TO YOUR HOME</p>
                <p className="text-lg font-semibold text-red-600">
                  November 2023
                </p>
              </div>
              <div className="pb-4 text-justify md:lg:pb-16">
                <p>
                  Simple yet elegant design. A user-friendly real estate website
                  for clients browse and see details about the property that
                  suits for them. Integrated with back-office for a better 
                  and effective inquiries management for the agent.
                </p>
              </div>
            </div>
            <div>
              <ul className="text-lg ml-5 md:lg:text-xl md:lg:leading-10 md:lg:pt-4 md:lg:ml-0">
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>REACT JS</li>
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>TAILWIND</li>
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>LARAVEL</li>
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 3 key to your Home */}
        <div className="flex justify-center" id="chef">
          <Carousel
            autoplay
            loop
            className="w-72 pt-10 md:lg:h-[500px] md:lg:w-[1000px] md:lg:pt-2"
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
          <div className="font-montserrat  md:lg:flex justify-around px-10  md:lg:px-72  md:lg:pt-20">
            <div className=" md:lg:w-[400px]">
              <div className="pt-6 md:lg:pt-0 md:lg:flex md:lg:justify-between md:lg:pb-6">
                <p className="text-xl font-bold">NEIGHBOR CHEF</p>
                <p className="text-lg font-semibold text-red-600">
                  August 2023
                </p>
              </div>
              <div className="pb-4 text-justify md:lg:pb-16">
                <p>
                  Modern, sleek website with an eye-catching menu, alluring
                  promos, simplified reservation and booking forms, and a
                  practical reservation checker. Powered smoothly by a strong
                  back-office infrastructure and a user-friendly admin page,
                  which guarantees effective management and the best possible
                  user experience.
                </p>
              </div>
            </div>
            <div>
              <ul className="text-lg ml-5 md:lg:text-xl md:lg:leading-10 md:lg:pt-8 md:lg:ml-0">
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>REACT JS</li>
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>TAILWIND</li>
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>LARAVEL</li>
                <FaCircle className="absolute text-xs -ml-5 mt-2 md:lg:mt-3 text-red-600" />
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
