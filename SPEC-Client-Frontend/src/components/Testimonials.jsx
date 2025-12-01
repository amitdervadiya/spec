import { useState, useEffect, useRef } from "react";
import userImg from "../assets/images/user.png";
import userImg2 from "../assets/images/user2.png";
import userImg3 from "../assets/images/user3.png";
import star from "../assets/images/Star16.svg";
import rightarrow from "../assets/images/arrowblue.svg";
import arrowleft from "../assets/images/leftarrow.svg";
import dot from "../assets/images/nav-dot.svg";

export default function TestimonialSection() {
  const originalTestimonials = [
    {
      id: 1,
      text: `"As an architect, I always look for quality and aesthetics. Their faucets and showers fit perfectly into our premium projects, and the finishing is top-notch."`,
      name: "Ar. Rakesh Thakkar",
      role: "Ahmedabad",
      avatar: userImg,
      stars: 5,
    },
    {
      id: 2,
      text: `"We've been dealing with them for 3 years. Their service, packaging, and product quality have helped us build trust with our customers. Highly recommended."`,
      name: "Mehul Shah",
      role: "Sanitaryware Dealer, Surat",
      avatar: userImg2,
      stars: 5,
    },
    {
      id: 3,
      text: `"We used their products in our residential project of 120 flats. Zero complaints from buyers. Excellent support and timely supply."`,
      name: "Sanjay Mehta",
      role: "Developer, Mumbai",
      avatar: userImg3,
      stars: 5,
    },
        {
      id: 4,
      text: `"As an architect, I always look for quality and aesthetics. Their faucets and showers fit perfectly into our premium projects, and the finishing is top-notch."`,
      name: "Ar. Rakesh Thakkar",
      role: "Ahmedabad",
      avatar: userImg,
      stars: 5,
    },
    {
      id: 5,
      text: `"We've been dealing with them for 3 years. Their service, packaging, and product quality have helped us build trust with our customers. Highly recommended."`,
      name: "Mehul Shah",
      role: "Sanitaryware Dealer, Surat",
      avatar: userImg2,
      stars: 5,
    },
    {
      id: 6,
      text: `"We used their products in our residential project of 120 flats. Zero complaints from buyers. Excellent support and timely supply."`,
      name: "Sanjay Mehta",
      role: "Developer, Mumbai",
      avatar: userImg3,
      stars: 5,
    },
  ];

  const testimonials = [
    originalTestimonials[originalTestimonials.length - 1],
    ...originalTestimonials,
    originalTestimonials[0],
  ];

  const cardWidthDesktop = 470; // Desktop exact movement

  const getVisibleSlides = () => {
    if (window.innerWidth >= 1024) return 3; // Large screen
    if (window.innerWidth >= 640) return 2; // Tablet
    return 1; // Mobile
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());
  const [current, setCurrent] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const dragging = useRef(false);
  const startX = useRef(0);
  const offsetX = useRef(0);

  const goToNext = () => setCurrent((prev) => prev + 1);
  const goToPrev = () => setCurrent((prev) => prev - 1);

  // Resize detect update
  useEffect(() => {
    const resizeHandler = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // Loop fix
useEffect(() => {
  if (current === testimonials.length - 1) {
    setTransitionEnabled(false);
    requestAnimationFrame(() => {
      setCurrent(1);
      requestAnimationFrame(() => setTransitionEnabled(true));
    });
  }
  if (current === 0) {
    setTransitionEnabled(false);
    requestAnimationFrame(() => {
      setCurrent(testimonials.length - 1);
      requestAnimationFrame(() => setTransitionEnabled(true));
    });
  }
}, [current]);


  useEffect(() => {
    if (!transitionEnabled) {
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  }, [transitionEnabled]);

  useEffect(() => {
    const timer = setInterval(() => goToNext(), 3500);
    return () => clearInterval(timer);
  }, []);

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
      offsetX.current < 0 ? goToNext() : goToPrev();
    }
    offsetX.current = 0;
  };

  const getTranslateValue = () => {
    if (visibleSlides === 3) {
      // Desktop pixel-perfect smooth scroll
      return `translateX(-${current * cardWidthDesktop}px)`;
    }
    // Tablet & Mobile keep % system
    return `translateX(-${current * (103 / visibleSlides)}%)`;
  };

  return (
    <section className="h-[588px] max-sm:h-[500px] w-full max-sm:mt-[50px] max-sm:px-6 justify-center items-center flex mt-[140px] relative">
      <div className="w-[50%] h-[408px] max-sm:hidden max-sm:w-[200px] bg-[var(--bgbrown)] absolute left-0 top-0 z-0 max-md:w-[400px]"></div>

      <div className="w-[85%] mx-auto flex flex-col lg:flex-row gap-10 z-10">
        <div className="lg:w-1/3 flex flex-col justify-between">
          <div>
            <h3 className="text-[var(--brown)] max-sm:text-[25px] max-sm:text-center text-[70px] leading-none">
              Testimonials
            </h3>
            <h1 className="text-[var(--black)] max-sm:text-center text-[50px] max-sm:text-[25px] font-bold">
              WHAT OUR CLIENTS SAY
            </h1>
          </div>

          <div className="flex max-sm:hidden gap-[10px] mt-6">
            <button
              onClick={goToPrev}
              className="border-[#D9D9D9] border text-white h-[30px] w-[50px] flex justify-center items-center rounded-full z-30"
            >
              <img src={arrowleft} alt="" />
            </button>
            <button
              onClick={goToNext}
              className="border-[#D9D9D9] border text-white h-[30px] w-[50px] flex justify-center items-center rounded-full z-30"
            >
              <img src={rightarrow} alt="" />
            </button>
          </div>
        </div>

        <div
          className="lg:w-2/3 max-sm:w-full overflow-hidden relative"
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
        >
          <div
            className="flex gap-[30px] max-sm:gap-[9px]"
            style={{
              transform: getTranslateValue(),
              transition: transitionEnabled ? "transform 0.5s ease-out" : "none",
            }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="flex-shrink-0 justify-center flex w-full sm:w-[440px]">
                <div className="bg-white border p-8 max-sm:p-[15px] justify-between flex flex-col h-auto lg:h-[488px] max-sm:w-[300px] max-sm:h-[286px]">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {Array(item.stars).fill(0).map((_, i) => (
                        <img key={i} src={star} className="w-5 h-5 max-sm:w-[15px] max-sm:h-[15px]" />
                      ))}
                    </div>
                    <p className="text-[var(--grey)] text-[22px] max-md:text-[15px] leading-relaxed font-semibold">
                      {item.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-8 ">
                    <img src={item.avatar} className="w-10 h-10 sm:w-12 bg-[#D9D9D9] sm:h-12 rounded-full" />
                    <div>
                      <h4 className="text-[20px] max-sm:text-[15px] font-semibold text-[var(--black)]">{item.name}</h4>
                      <p className="text-[var(--grey)] font-medium text-[16px] max-sm:text-[15px]">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden flex justify-center mt-4 gap-2">
            {originalTestimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i + 1)}>
                {current - 1 === i ? (
                  <img src={dot} className="w-[15px] h-[15px]" />
                ) : (
                  <div className="w-[9px] h-[9px] rounded-full bg-[#EAEAEA]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
