import React from "react";
import arrowRight from "../assets/images/ArrowRight(1).svg"; 
import arrowRight2 from "../assets/images/ArrowRight(2).svg"; 


export default function Experience() {
  return (
    <section className="w-full mt-[140px] max-sm:h-[750px] h-[750px] items-center justify-center max-sm:mt-[50px] bg-white flex bg-ex">
      <div className="w-[85%] mx-auto relative">
          <div className="w-[60%] max-sm:items-center max-sm:mt-[60px] flex flex-col   max-xl:w-[70%] max-2xl:w-[70%] max-md:w-[100%] max-sm:w-[100%]">
            <h3 className="text-white leading-none text-[70px] max-sm:text-[25px]">
              Ready To
            </h3>

            <h1 className="text-[var(--black)] font-bold max-sm:text-center  text-[50px] max-sm:text-4xl   max-lg:text-5xl ">
              UPGRADE YOUR BATHROOM EXPERIENCE?
            </h1>

            <p className="text-[var(--grey)] mt-5 max-sm:mt-[16px] text-[20px] max-sm:text-[13px]  font-medium   max-sm:w-full max-sm:text-center">
              Discover world-class bathroom fittings crafted with precision,
              durability, and elegance. Whether you're a homeowner, architect,
              builder, or dealer <span className="font-bold text-[var(--black)]">Spec</span> has the perfect
              solution for you.
            </p>

         
            <div className="flex gap-4 max-sm:flex-col max-sm:h-[40x]  max-sm:font-bold mt-[35px] max-sm:mt-[25px]">
              <button
                className="
                  bg-[var(--brown)]
                  text-white font-semibold
                  px-6 h-[50px] rounded-full
                  flex items-center gap-3
                 max-sm:w-[300px] 
                  max-sm:text-[15px] max-sm:h-[40px]
  max-sm:justify-center  max-sm:font-bold
                "
              >
                DOWNLOAD CATALOGUE
                <img src={arrowRight} alt="" className="max-sm: w-[17px]"/>

              </button>

              <button
                className="
                  bg-white border 
                  text-[var(--brown)] font-semibold 
                  px-6 py-3 rounded-full
                  flex items-center gap-3
                    max-sm:w-[300px]
                  text-[17px]
                  transition-all
                  max-sm:justify-center max-sm:font-bold
                  max-sm:text-center max-sm:text-[15px] max-sm:h-[40px]
                "
              >
                VIEW PRODUCTS
                <img src={arrowRight2} alt=""  className="max-sm: w-[17px]"/>
              </button>
            </div>
          </div>
        </div>
      
    </section>
  );
}
