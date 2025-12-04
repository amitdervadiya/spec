
import { useState,useRef } from "react";
import dot from "../assets/images/nav-dot.svg"
import banner1 from "../assets/images/3.jpg";
import herobg from "../assets/images/Mask group.png";

import rightarrow from "../assets/images/arrowblue.svg"
import arrowleft from "../assets/images/leftarrow.svg";
import arrowr from "../assets/images/arright.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {

    const [current, setCurrent] = useState(0);
    const swiperRef = useRef(null); // ADD THIS
    const slides = [
        { id: 1, img: banner1, title: "FLOWS WITH <br> PERFECTION" },
        { id: 2, img: banner1, title: "ELEVATE YOUR <br> SPACE" },
        { id: 3, img: banner1, title: "MODERN. ELEGANT. <br> UNIQUE." },
    ];

    return (
        <>
            <section className="relative h-[780px] max-sm:h-[700px] flex justify-center items-center overflow-hidden">

                {/* Swiper */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={900}
                    navigation={{
                        nextEl: ".hero-next-btn",
                        prevEl: ".hero-prev-btn",
                    }}
                 onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
                    onSwiper={(swiper) => (swiperRef.current = swiper)} // ADD THIS
                    pagination={{
                        clickable: true,
                        el: ".hero-dots",
                        renderBullet: (index, className) => {
                            return `
          <button class="${className} custom-dot flex justify-center items-center"></button>
        `;
                        },
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full relative flex justify-center items-center">
                                <img
                                    src={herobg}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-20">
                                    <h5 className="text-[70px] max-sm:text-[40px] leading-tight">
                                        Experience Luxury That
                                    </h5>

                                    <h4
                                        className="font-bold tracking-tight text-[70px] max-sm:text-[45px] leading-tight"
                                        dangerouslySetInnerHTML={{ __html: slide.title }}
                                    ></h4>

                                    <button className="mt-[25px] flex max-sm:text-[15px] gap-1 justify-center items-center text-[17px] bg-[var(--brown)] text-white font-bold h-[50px] max-sm:h-[40px] max-sm:px-[18px] px-[25px] rounded-full tracking-wide">
                                        GET FOUND{" "}
                                        <img src={arrowr} alt="" className="w-5 max-sm:w-[17px]" />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Desktop Left Arrow */}
                <button className="hero-prev-btn absolute left-6 top-1/2 max-sm:hidden -translate-y-1/2 border-[#D9D9D9] border text-white h-[30px] w-[50px] flex justify-center items-center rounded-full z-30">
                    <img src={arrowleft} alt="prev" />
                </button>

                {/* Desktop Right Arrow */}
                <button className="hero-next-btn absolute right-6 top-1/2 max-sm:hidden -translate-y-1/2 border-[#D9D9D9] border text-white h-[30px] w-[50px] flex justify-center items-center p-3 rounded-full z-30">
                    <img src={rightarrow} alt="next" />
                </button>

              <div className="sm:hidden flex justify-center mt-4 gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
  {slides.map((_, i) => (
    <button
      key={i}
      onClick={() => {
        setCurrent(i);
        swiperRef.current?.slideToLoop(i);
      }}
      className="focus:outline-none"
    >
      {current === i ? (
        <img src={dot} className="w-[15px] h-[15px]" alt="active dot" />
      ) : (
        <div className="w-[9px] h-[9px] rounded-full bg-[#CECECE]" />
      )}
    </button>
  ))}
</div>

            </section>
        </>
    )
}
