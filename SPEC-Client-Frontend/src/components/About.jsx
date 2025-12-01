import React from "react";
import { useState } from "react";
import img2 from "../assets/images/image2.png"
import circle from "../assets/images/CheckCircle.png"
import play from "../assets/images/play.svg"




export default function About() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <div className="w-full max-sm:h-max max-sm:mt-[50px]  justify-center flex mt-[140px] items-center relative">
         
             <div className="h-[379px] w-[25%] max-md:hidden absolute -bottom-14 left-0 z-0  max-sm:w-[200px] max-sm:h-[200px] bg-[#FFF8EE]">

           </div>
        <section className="w-[85%] bg-[#FFFDFA] justify-between max-md:justify-center flex flex-col lg:flex-row  gap-[90px] max-sm:gap-[30px]  max-sm:justify-center">
          <div className="relative  flex justify-center max-sm:w-full  max-lg:w-[80%] items-center max-md:w-[500px] w-[504px] max-2xl:w-[450px] h-[793px] max-sm:h-[662px] bg-play">

         
 <div className=" max-sm:absolute top-[20%]">
   
    <img
      src={play}
      alt="Play"
      onClick={() => setShowVideo(true)}
      className="h-[62px] w-[63px] cursor-pointer "
    />

 
    {showVideo && (
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
        <div className="relative w-[90%] max-w-[700px] rounded overflow-hidden">
      
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-2 right-2 text-white text-2xl font-bold">
            ✕
          </button>

          <iframe
            src="https://www.pexels.com/video/th-interior-design-of-a-home-bathroom-5644285/?autoplay=1"
            title="Bathroom Video"
            className="w-full h-[400px] max-sm:h-[250px]"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )}
  </div>

            <img
              src={img2}
              alt="Company Building"
              className="absolute bottom-[-30px]  max-sm:w-full -right-[150px] max-sm:left-0 max-xl:-right-[15%] max-xl:w-[250px] max-2xl:-right-[30%] z-20 w-[330px] h-[470px] max-md:w-[300px] max-2xl:w-[300px] rounded-t-[200px] max-sm:rounded-t-full max-sm:border-[15px] border-[15px] border-r-0 border-b-0 border-[#FFFDFA] "
            />
           </div>
    
       

          <div className="text-left h-[827px] justify-center flex flex-col max-sm:h-max w-[50%] max-lg:w-full  max-md:w-full  max-2xl:w-[50%] max-sm:w-full max-xl:w-[500px]  s-contact ">
            <h3 className=" text-[#c49b66] leading-none text-[70px] ">About</h3>
            <h2 className="text-[50px] font-bold text-[var(--black)] mb-[35px] max-sm:mb-[25px] max-sm:text-[30px]">
              WHO WE ARE
            </h2>
            <p className="text-[var(--grey)] text-[20px] max-sm:text-[14px] font-semibold mb-[25px] max-sm:mb-[20px]">
              At <span className="font-semibold">JM Industries</span>, we specialize in
              crafting top-quality bathroom accessories that combine innovation,
              durability, and elegant design.
            </p>
            <div className="border border-r-0 border-t-0 pl-6  mb-[30px] max-sm:pl-[10px] border-b-0 px-2 max-sm:p-0 border-l-[var(--brown)] max-sm:h-[150px] max-sm:mb-[20px]">

              <p className="text-[var(--grey)] leading-relaxed text-[20px] max-sm:text-[13px]  mb-[20px] max-sm:mb-[10px]">
                Founded with a vision to bring modern aesthetics to everyday
                essentials, our company has grown into a trusted name in the industry.
              </p>
              <p className="text-[var(--grey)]  leading-relaxed text-[20px] max-sm:text-[13px]  max-sm:mb-0">
                With years of experience in maintaining landscapes for communities and
                businesses, we know how important curb appeal is for property value
                and first impressions.
              </p>
            </div>


            <ul className="space-y-4  mb-[46px] max-sm:mb-[30px]">
              <li className="flex items-center gap-2 text-[20px]  text-[var(--grey)] max-sm:text-[14px] font-medium">
                <span className="text-[#c49b66]"><img src={circle} alt="" /></span> 10+ Years of Industry Experience
              </li>
              <li className="flex items-center gap-2 text-[var(--grey)] text-[20px] max-sm:text-[14px] font-medium">
                <span className="text-[#c49b66]"><img src={circle} alt="" /></span> Nationwide Distribution Network
              </li>
              <li className="flex items-center gap-2 text-[var(--grey)] text-[20px] max-sm:text-[14px] font-medium">
                <span className="text-[#c49b66]"><img src={circle} alt="" /></span> Custom Solutions Available for Bulk Orders
              </li>
            </ul>


            <button className=" bg-[var(--brown)] text-white px-6 py-3 w-[186px] max-sm:h-[40px] rounded-full text-[17px] max-sm:text-[15px] font-bold hover:bg-[#c49b66]  transition-all duration-300 flex  h-[50px] gap-1 justify-center max-sm:w-full items-center">
              READ MORE  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6" className="max-sm:h-[17px] w-[17px]" /></svg>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
