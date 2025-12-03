import React, { useState, useEffect } from "react";
import uparrow from "../assets/images/ArrowUpRight.svg";
import product1 from "../assets/images/pop-up.png";
import product2 from "../assets/images/towel.png";
import product3 from "../assets/images/shower1.png";
import product4 from "../assets/images/dispenser.png";
import product5 from "../assets/images/paper.png";
import product6 from "../assets/images/shelf.png";
import product7 from "../assets/images/floor.png";
import product8 from "../assets/images/tumbler.png";
import dot from "../assets/images/dot.svg";
import dothover from "../assets/images/dothover.svg";

export default function OurProducts() {

 const products = [
  {
    name: "TUMBLER",
    image: product1,
    dotMobile: { top: "48%", left: "41%" },
    dotTablet: { top: "48%", left: "50%" },
    dotLaptop: { top: "50%", left: "57%" },
    dotDesktop: { top: "50%", left: "43%" },
    dotPc: { top: "50%", left: "55%" },
    dotUltra: { top: "50%", left: "44%" },
  },
  {
    name: "TOWEL RACK",
    image: product2,
    dotMobile: { top: "50%", left: "63%" },
    dotTablet: { top: "56%", left: "73%" },
    dotLaptop: { top: "53%", left: "77%" },
    dotDesktop: { top: "52%", left: "63%" },
    dotPc: { top: "52%", left: "68%" },
    dotUltra: { top: "52%", left: "60%" }, // NEW
  },
  {
    name: "SHOWERS",
    image: product3,
    dotMobile: { top: "11%", left: "73%" },
    dotTablet: { top: "9%", left: "82%" },
    dotLaptop: { top: "10%", left: "85%" },
    dotDesktop: { top: "10%", left: "70%" },
    dotPc: { top: "12%", left: "76%" },
    dotUltra: { top: "10%", left: "67%" }, // NEW
  },
  {
    name: "DISPENSER",
    image: product4,
    dotMobile: { top: "17%", left: "83%" },
    dotTablet: { top: "20%", left: "48%" },
    dotLaptop: { top: "19%", left: "94%" },
    dotDesktop: { top: "15%", left: "79%" },
    dotPc: { top: "17%", left: "85%" },
    dotUltra: { top: "15%", left: "74%" }, // NEW
  },
  {
    name: "PAPER HOLDER",
    image: product5,
    dotMobile: { top: "60%", left: "40%" },
    dotTablet: { top: "60%", left: "50%" },
    dotLaptop: { top: "62%", left: "53%" },
    dotDesktop: { top: "63%", left: "43%" },
    dotPc: { top: "65%", left: "54%" },
    dotUltra: { top: "62%", left: "44%" }, // NEW
  },
  {
    name: "SHELF",
    image: product6,
    dotMobile: { top: "65%", left: "32%" },
    dotTablet: { top: "28%", left: "92%" },
    dotLaptop: { top: "64%", left: "45%" },
    dotDesktop: { top: "70%", left: "34%" },
    dotPc: { top: "30%", left: "74%" },
    dotUltra: { top: "65%", left: "36%" }, // NEW
  },
  {
    name: "FLOOR TRAP",
    image: product7,
    dotMobile: { top: "92%", left: "86%" },
    dotTablet: { top: "91%", left: "94%" },
    dotLaptop: { top: "93%", left: "91%" },
    dotDesktop: { top: "95%", left: "82%" },
    dotPc: { top: "93%", left: "87%" },
    dotUltra: { top: "94%", left: "76%" }, // NEW
  },
  {
    name: "WATER TAP",
    image: product8,
    dotMobile: { top: "47%", left: "25%" },
    dotTablet: { top: "47%", left: "33%" },
    dotLaptop: { top: "50%", left: "39%" },
    dotDesktop: { top: "49%", left: "37%" },
    dotPc: { top: "49%", left: "37%" },
    dotUltra: { top: "47%", left: "32%" }, // NEW
  },
];


  const [screen, setScreen] = useState("desktop");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;
      if (width <= 640) setScreen("mobile");
      else if (width <= 1024) setScreen("tablet");
      else if (width <= 1440) setScreen("laptop");
      else if (width <= 1620) setScreen("desktop");
      else if (width <= 1920) setScreen("pc");
      else setScreen("ultra");
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const getDotPosition = (product) => {
    if (screen === "mobile") return product.dotMobile;
    if (screen === "tablet") return product.dotTablet;
    if (screen === "laptop") return product.dotLaptop;
    if (screen === "desktop") return product.dotDesktop;
    if (screen === "pc") return product.dotPc;
    if (screen === "ultra") return product.dotUltra;

    return product.dotDesktop;
  };

  const activeProduct = products[activeIndex];

  return (
    <>
      {/* Your JSX below remains EXACTLY SAME */}
      {/* ------------------------------------------------ */}
      <div className="w-full bgour h-[1091px] max-sm:mt-[50px] max-sm:h-[595px] mt-[140px] max flex justify-center ">
        <div className="w-[85%] flex max-sm:justify-start justify-end ">
          <section className="w-full z-0 mt-[100px] max-sm:mt-[40px]">
            <div className="text-center mb-10 max-sm:mb-[25px]">
              <h3 className="text-[var(--brown)] leading-none text-[70px] max-sm:text-[25px]">
                Spec
              </h3>
              <h2 className="text-[50px] max-sm:text-[25px] font-bold text-[var(--black)]">
                OUR PRODUCTS
              </h2>
              <p className="text-[var(--grey)] text-[20px] max-sm:text-[13px] mx-auto mt-2">
                Discover premium-quality bathroom accessories crafted for style,
                strength, and daily comfort.
              </p>
            </div>

            <div className="mx-auto h-[640px] max-sm:h-[214px] max-sm:w-[335px] bg-white border-[15px] max-w-[1545px] border-[#fffdfa] bg-image relative">

              <div
                className="
                  absolute z-20 bg-white border border-[#eee]
                  w-[272px] h-[275px] p-[15px] 
                  -left-[60px]
                  top-1/2 -translate-y-1/2
                  max-sm:left-1/2
                  max-sm:translate-y-[80px]
                  max-sm:-translate-x-1/2
                  max-sm:bottom-[10px]
                  max-sm:w-[152px]
                  max-sm:h-[168px]
                  max-sm:p-[10px]
                  flex flex-col justify-between
                "
              >
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-[242px] h-[200px] object-contain mx-auto max-sm:w-[138px] max-sm:h-[114px]"
                />

                <div className="mt-2 flex max-sm:mt-[10px] justify-between w-full items-center">
                  <span className="text-[var(--brown)] font-bold text-[22px] leading-none underline max-sm:text-[15px]">
                    {activeProduct.name}
                  </span>
                  <img src={uparrow} alt="" className="max-sm:h-5 w-5" />
                </div>
              </div>

              {products.map((product, index) => {
                const position = getDotPosition(product);

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      absolute w-[28px] h-[28px] 
                      max-sm:h-[10px] max-sm:w-[10px]
                      flex items-center justify-center
                      transition-all duration-300
                      ${index === activeIndex ? "scale-125" : "opacity-80"}
                    `}
                    style={{
                      top: position.top,
                      left: position.left,
                    }}
                  >
                    <img
                      src={index === activeIndex ? dothover : dot}
                      alt="dot"
                      className="w-full h-full object-contain"
                    />
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
