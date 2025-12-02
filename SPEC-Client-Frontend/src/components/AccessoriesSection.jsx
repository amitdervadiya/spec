import { useState, useEffect, useRef } from "react";
import img1 from "../assets/images/a1.png";
import img2 from "../assets/images/a2.png";
import img3 from "../assets/images/a3.png";
import rightarrow from "../assets/images/arrowblue.svg";
import arrowleft from "../assets/images/leftarrow.svg";
import dot from "../assets/images/nav-dot.svg";

export default function AccessoriesSection() {
  const originalSlides = [
    { id: 1, img: img1, title: "Soap Dish With Dispenser" },
    { id: 2, img: img2, title: "Tumbler With Dispenser" },
    { id: 3, img: img3, title: "Soap Dish With Tumbler" },
    { id: 4, img: img1, title: "Glass Shelf Holder" },
    { id: 5, img: img2, title: "Toothbrush Holder" },
  ];

  // Looping clones
  const slides = [
    originalSlides[originalSlides.length - 1],
    ...originalSlides,
    originalSlides[0],
  ];


  const getVisibleSlides = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 3; 
    if (width >= 640) return 2;  
    return 2;                
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());
  const [current, setCurrent] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const dragging = useRef(false);
  const startX = useRef(0);
  const offsetX = useRef(0);

  // Update visible slides on resize
  useEffect(() => {
    const handleResize = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Loop fix
  useEffect(() => {
    if (current === slides.length - 1) {
      setTransitionEnabled(false);
      requestAnimationFrame(() => {
        setCurrent(1);
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
    if (current === 0) {
      setTransitionEnabled(false);
      requestAnimationFrame(() => {
        setCurrent(slides.length - 2);
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
  }, [current]);

  const goNext = () => setCurrent((prev) => prev + 1);
  const goPrev = () => setCurrent((prev) => prev - 1);

  // Touch events
  const touchStart = (e) => {
    dragging.current = true;
    startX.current = e.touches[0].clientX;
  };
  const touchMove = (e) => {
    if (!dragging.current) return;
    offsetX.current = e.touches[0].clientX - startX.current;
  };
  const touchEnd = () => {
    dragging.current = false;
    if (Math.abs(offsetX.current) > 70) {
      offsetX.current < 0 ? goNext() : goPrev();
    }
    offsetX.current = 0;
  };

  // Card width calculation based on visible slides and container
  const gap = window.innerWidth >= 640 ? 32 : 15; // Desktop/Laptop 32px, Mobile 15px
  const containerWidth = window.innerWidth * 0.85; // same as mx-auto w-[85%]
  const cardWidth = Math.min(
    containerWidth / visibleSlides - gap * ((visibleSlides - 1) / visibleSlides),
    window.innerWidth >= 1024 ? 357 : window.innerWidth >= 640 ? 300 : 200
  );

  const getTranslateValue = () => `translateX(-${current * (cardWidth + gap)}px)`;

  return (
    <section className="w-full mt-[176px] max-sm:h-max max-sm:px-4 max-sm:mt-[50px] max-lg:px-12 relative">
      <div className="absolute max-sm:hidden h-[290px] w-[40%] bg-[#FFF8EE] right-0 -bottom-[60px]"></div>
      <div className="mx-auto flex w-[85%] flex-col lg:flex-row items-center gap-10 max-sm:gap-[20px]">

        {/* Left Section */}
        <div className="max-sm:w-full text-center lg:text-left">
          <h3 className="text-[var(--brown)] leading-none text-[70px] max-sm:text-[25px]">Our Premium</h3>
          <h1 className="text-[50px] font-bold max-sm:text-[20px] text-[var(--black)] max-sm:leading-none">
            BATHROOM ACCESSORIES <br /> COLLECTION
          </h1>
          <p className="text-[var(--grey)] mt-4 max-sm:text-[13px] text-[20px] leading-relaxed">
            We offer a wide variety of bathroom accessories designed to meet the
            needs of modern homes, hotels, and commercial spaces.
          </p>

          <div className="hidden sm:flex gap-[10px] mt-8 justify-center lg:justify-start">
            <button onClick={goPrev} className="border-[#D9D9D9] border h-[30px] w-[50px] flex justify-center items-center rounded-full z-30">
              <img src={arrowleft} alt="" />
            </button>
            <button onClick={goNext} className="border-[#D9D9D9] border h-[30px] w-[50px] flex justify-center items-center rounded-full z-30">
              <img src={rightarrow} alt="" />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div
          className="w-full overflow-hidden touch-pan-y select-none"
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
        >
          <div
            className="flex"
            style={{
              gap: `${gap}px`,
              transform: getTranslateValue(),
              transition: transitionEnabled ? "transform 0.5s ease-out" : "none",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex slide-ac justify-center"
                style={{ minWidth: `${cardWidth}px` }}
              >
                <div className={`border bg-[#fffdfa] overflow-hidden transition h-[515px] max-xl:h-[415px] max-sm:h-[239px]`}>
                  <div className="h-[350px] max-xl:h-[225px] max-sm:h-[137px]  max-sm:w-full flex justify-center items-center">
                    <img src={slide.img} alt={slide.title} className="w-full h-[250px] max-sm:h-[87px] object-contain bg-[#fffdfa]" />
                  </div>
                  <div className="p-[25px] justify-between flex flex-col view-bg max-sm:h-[100px] max-sm:p-[15px] w-full h-[163px] slide-ac">
                    <h2 className="text-[25px] font-bold max-sm:text-[14px] text-[var(--black)] max-sm:leading-[20px] ac-title">
                      {slide.title}
                    </h2>
                    <a href="#" className="text-[var(--brown)] ac-button text-[18px] w-max max-sm:text-[15px] font-bold flex items-center gap-1">
                      VIEW ALL <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="sm:hidden flex justify-center gap-2 mt-4">
          {originalSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrent(index + 1)} className="flex items-center justify-center">
              {current - 1 === index ? (
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
