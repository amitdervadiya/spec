import React from 'react'

import shower from "../assets/images/shower.png"
import bath from "../assets/images/bath.png"
import arrowright from "../assets/images/ArrowRight(1).svg"

export default function Products() {
  return (
    <>
      <div className="items-center max-sm:h-max justify-center mt-[200px] max-sm:mt-[60px] flex w-full">
        <section className="w-[75%] max-sm:w-full  max-sm:h-max  flex flex-col md:flex-row items-center justify-center max-sm:gap-[20px] gap-[100px]">

          <div className="flex max-sm:order-2 flex-col w-[655px] max-sm:w-[335px] text-center   max-sm:items-center md:text-left">
            <img
              src={shower}
              alt="Shower"
              className=" w-full object-cover max-sm:h-[372px] h-[700px] max-sm:order-2 pr-img"
            />
            <div className='flex justify-center flex-col max-sm:items-center order-1'>

              <p className="text-[var(--grey)] text-[20px] mt-[50px] max-sm:mt-[0px] max-sm:order-1 leading-relaxed">
                Discover premium-quality bathroom accessories crafted for style, strength, and daily comfort. From modern designs to durable finishes — we deliver excellence in every detail.
              </p>

              <button className=" gap-2 bg-[var(--brown)] mt-[45px] max-sm:mt-[20px] max-sm:mb-[30px] order-2  max-sm:h-[40px] text-white font-semibold text-[17px] h-[50px] px-5 w-[235px] flex justify-center items-center rounded-full transition-all duration-300 shadow-lg tracking-wide">
                View Products <img src={arrowright} alt="" className=' w-5 max-sm:w-[17px] ' />  </button>
            </div>
          </div>

          <div className="flex flex-col max-sm:order-1  w-[655px] max-sm:w-[335px] items-center md:items-start text-center md:text-left ">
            <h3 className="text-[var(--brown)] text-[70px] leading-none">Jm Industries</h3>
            <h1 className="text-black    text-[50px] font-bold max-sm:mb-[25px] mb-[50px]">
              WE ARE BATHROOMS <br /> & EXPERTS.
            </h1>
            <img
              src={bath}
              alt="Sink"
              className=" w-[full] object-cover max-sm:h-[372px] h-[700px] pr-img"
            />
          </div>
        </section>
      </div>
    </>
  )
}
