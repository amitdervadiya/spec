
import {  useState } from "react";
import dot from "../assets/images/nav-dot.svg"
import banner1 from "../assets/images/3.jpg";
import herobg from "../assets/images/Mask group.png";

import rightarrow from "../assets/images/arrowblue.svg"
import arrowleft from "../assets/images/leftarrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
    
    const [current, setCurrent] = useState(0);
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

                                    <button className="mt-[25px] flex gap-1 justify-center items-center text-[17px] bg-[var(--brown)] text-white font-bold h-[50px] max-sm:h-[35px] max-sm:px-[18px] px-[25px] rounded-full tracking-wide">
                                        GET FOUND{" "}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                            <path
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 12h14m-6 6l6-6m-6-6l6 6"
                                            />
                                        </svg>
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
                        <button key={i} onClick={() => setCurrent(i)}>
                            {current === i ? (
                                <img src={dot} className="w-[15px] h-[15px]" />
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
