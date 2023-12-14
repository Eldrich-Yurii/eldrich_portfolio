import React from 'react'
import Pic1 from './assets/kodego.webp';
import Pic2 from './assets/informatics.webp';
import Pic3 from './assets/johnJ.webp';

const Education = () => {
  return (
    <>
    <div className='pt-48 px-14' id="education">
        <h1 className='font-montserrat font-semibold mt-1 text-2xl md:lg:text-4xl text-center'>EDUCATIONAL <span style={{color:"#e73c37"}}>ATTAINMENT</span></h1>
      {/* KODEGO */}
      <div className='grid md:lg:grid-cols-2 items-center pt-20'>
        <div className='md:lg:w-[700px] md:lg:pl-36 grid gap-2'>
            <h1 className='font-montserrat pb-5 font-semibold text-xl'>KODEGO</h1>
            <p className='font-montserrat pb-5 '>In Kodego's Full-Stack Web Development course, back-end development is covered with Node.js, Express, PHP, and other technologies, while front-end development is covered with HTML, CSS, and JavaScript. The emphasis is on actual projects that develop web application development abilities.</p>
            <p className='font-montserrat font-bold' style={{color:"#e73c37"}}>FULL-STACK WEB DEVELOPMENT</p>
            <p className='font-montserrat font-semibold' style={{color:"#e73c37"}}>APRIL - NOVEMBER 2023</p>       
        </div>
        <div className='flex justify-center '>
            <img src={Pic1} alt="kodego_logo" width={220}/>
        </div>
      </div>
      {/* INFORMATICS */}
      <div className='grid md:lg:grid-cols-2 items-center'>
        <div className='flex justify-center'>
            <img src={Pic2} alt="" width={200}/>
        </div>
        <div className='md:lg:w-[500px] grid gap-2 pt-20 md:lg:pr-5'>
            <h1 className='font-montserrat pb-5 text-right font-semibold text-xl'>INFORMATICS COLLEGE MANILA INC</h1>
            <p className='font-montserrat pb-5 text-right'>Informatics College Manila provided the main areas of study for this degree include networking, databases, and software. Rather than concentrating on particular technologies, computer science degrees typically emphasize the mathematical and theoretical underpinnings of computing.</p>
            <p className='text-right font-montserrat font-bold' style={{color:"#e73c37"}}>BS INFORMATION TECHNOLOGY</p>
            <p className='text-right font-montserrat font-semibold' style={{color:"#e73c37"}}>AUGUST 2020 - PRESENT</p>
        </div>
      </div>
      {/* JOHN J */}
      <div className='grid md:lg:grid-cols-2 items-center pb-20'>
        <div className='md:lg:w-[700px] grid gap-2 pt-20 md:lg:pl-36 '>
            <h1 className='font-montserrat pb-5 font-semibold text-xl'>JOHN J RUSSELL MEMORIAL HIGH SCHOOL</h1>
            <p className='font-montserrat pb-5'>The General Academic Strand (GAS) is a senior high school track designed to help pupils improve their research, communication, and critical thinking abilities. This program is intended for individuals who wish to pursue higher education in the humanities, social sciences, communication, or other relevant fields.</p>
            <p className='font-montserrat font-bold' style={{color:"#e73c37"}}>GENERAL ACADEMIC STRAND</p>
            <p className='font-montserrat font-semibold' style={{color:"#e73c37"}}>JUNE 2018 - MARCH 2020</p>        
        </div>
        <div className='flex justify-center pt-5 md:lg:pt-0'>
            <img src={Pic3} alt="" width={150}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Education
