import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import c1 from "../assets/images/Simplification(6).png";
import c2 from "../assets/images/Simplification(1).png";
import c3 from "../assets/images/Simplification(2).png";
import c4 from "../assets/images/Simplification(3).png";
import c5 from "../assets/images/dispensar.png";
import c6 from "../assets/images/Simplification(4).png";
import c7 from "../assets/images/Simplification(10).png";
import c8 from "../assets/images/Simplification(9).png";
import c9 from "../assets/images/Simplification(8).png";
import c10 from "../assets/images/Simplification(7).png";
import s1 from "../assets/images/Simplification(5).png";
import sh from "../assets/images/Simplification.svg";

import ca1 from "../assets/images/ca1.png";
import ca2 from "../assets/images/ca2.png";
import ca3 from "../assets/images/ca3.png";
import ca4 from "../assets/images/ca4.png";
import ca5 from "../assets/images/ca5.png";
import ca6 from "../assets/images/ca6.png";
import ca7 from "../assets/images/ca7.png";
import ca8 from "../assets/images/ca8.png";
import ca9 from "../assets/images/ca9.png";
import ca10 from "../assets/images/ca10.png";
import ca11 from "../assets/images/ca11.png";
import ca12 from "../assets/images/ca12.png";
import dot from "../assets/images/nav-dot.svg";

const categories = [
  { name: "Showers", img: sh, bg: ca1 },
  { name: "Towel Rack", img: c2, bg: ca2 },
  { name: "Soap Dish", img: c3, bg: ca3 },
  { name: "Tumbler", img: c4, bg: ca4 },
  { name: "Dispenser", img: c5, bg: ca5 },
  { name: "Robe Hook", img: c6, bg: ca6 },
  { name: "Towel Rod", img: c7, bg: ca7 },
  { name: "Napkin Ring", img: c8, bg: ca8 },
  { name: "Paper Holder", img: c9, bg: ca9 },
  { name: "Shelf", img: c10, bg: ca10 },
  { name: "Floor Trap", img: c1, bg: ca11 },
  { name: "Bracket", img: s1, bg: ca12 },
];

export default function Categories() {
  const [slide, setSlide] = useState(0);
  const sliderRef = useRef(null);
  const startX = useRef(0);
  const initialTranslate = useRef(0);

  const slides = [];
  for (let i = 0; i < categories.length; i += 4) {
    slides.push(categories.slice(i, i + 4));
  }

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    initialTranslate.current = -slide * window.innerWidth;
  };

  const onTouchMove = (e) => {
    const moveX = e.touches[0].clientX - startX.current;
    sliderRef.current.style.transition = "none";
    sliderRef.current.style.transform = `translateX(${initialTranslate.current + moveX}px)`;
  };

  const onTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    const threshold = 60;

    if (diff < -threshold && slide < slides.length - 1) {
      setSlide(slide + 1);
    } else if (diff > threshold && slide > 0) {
      setSlide(slide - 1);
    } else {
      sliderRef.current.style.transform = `translateX(-${slide * 100}%)`;
    }

    sliderRef.current.style.transition = "transform 0.4s ease";
  };

  return (
    <section className="mt-[140px] max-sm:mt-[50px] w-full flex justify-center items-center text-center">
      <div className="w-[85%]">

        <div>
          <h3 className="text-[var(--brown)] text-[70px] max-sm:text-[25px] leading-none">
            Product's
          </h3>
          <h1 className="text-[50px] font-extrabold max-sm:text-[20px] text-[var(--black)]">
            CATEGORIES
          </h1>
        </div>

        <div className="grid grid-cols-6 max-md:grid-cols-3 max-lg:grid-cols-4 max-xl:grid-cols-4 max-2xl:grid-cols-4 gap-[50px] max-md:gap-[30px] mt-[50px] max-sm:hidden">
          {categories.map((item, index) => (
       
       
       <div key={index} className="flex flex-col items-center cursor-pointer h-[180px]">
              <div
                className="w-[100px] h-[100px] flex items-center justify-center rounded-full transition-all duration-300 icon-box"
                style={{ backgroundColor: "#f9f4ee", backgroundImage: `url(${item.bg})` }}
              >
                <img src={item.img} alt={item.name} className="w-[50px] h-[50px] transition-all duration-300 icon-img icon" />
              </div>

              <h4 className="text-[20px] mt-[14px]  font-semibold item-name uppercase text-[var(--black)]">
                {item.name}
              </h4>
              <p className="text-[17px] mt-[7px] text-[#22aaff]">52 <span className="text-[var(--grey)]">Items</span></p>
            </div>
          ))}
        </div>

        <div className="hidden max-sm:block overflow-hidden mt-[25px]">
          <div
            ref={sliderRef}
            className="flex"
            style={{ transform: `translateX(-${slide * 100}%)`, transition: "transform 0.4s ease" }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {slides.map((group, idx) => (
            <div key={idx} className="min-w-full grid grid-cols-2  gap-[20px]">
                {group.map((item, index) => (
                  <div key={index} className="flex flex-col items-center cursor-pointer h-[130px] justify-evenly w-full">
                    <div
                      className="!w-[70px] !h-[70px] flex items-center justify-center rounded-full transition-all duration-300 icon-box"
                      style={{ backgroundColor: "#f9f4ee", backgroundImage: `url(${item.bg})` }}
                    >
                      <img src={item.img} alt={item.name} className="w-[40px] h-[40px] transition-all duration-300 icon-img icon" />
                    </div>

                    <h4 className="text-[15px]  font-semibold item-name uppercase text-[var(--black)]">
                      {item.name}
                    </h4>
                    <p className="text-[13px] mt-[2px] text-[#22aaff]">
                      52 <span className="text-[var(--grey)]">Items</span>
                    </p>
                  </div>
          
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Mobile Navigation Dots */}
<div className="sm:hidden flex justify-center gap-2 mt-4">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setSlide(index)}
      className="flex items-center justify-center"
    >
      {slide === index ? (
        <img src={dot} alt="active" className="w-[15px] h-[15px]" />
      ) : (
        <div className="w-[9px] h-[9px] rounded-full bg-[#EAEAEA]"></div>
      )}
    </button>
  ))}
</div>


      </div>
    </section>
  );
}
