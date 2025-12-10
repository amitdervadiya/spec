import { useState, useEffect } from "react";

import rightarrow from "../assets/images/ArrowRight(1).svg"
import mainlogo from "../assets/images/logospec.svg"
import fp from "../assets/images/f-p.svg"
import fmap from "../assets/images/MapPinf.svg"
import ef from "../assets/images/Envelope(1).svg"
import yt from "../assets/images/yt-f.svg";
import insta from "../assets/images/instaf.svg";
import linkedin from "../assets/images/in.svg";
import twitter from "../assets/images/XTwitter.svg";
import facebook from "../assets/images/facebookf.svg";

import up from "../assets/images/up.png";
import down from "../assets/images/CaretDown.svg";
import arrowup from "../assets/images/ArrowUp.svg"


export default function FooterSection() {


  const MobileFooterDropdown = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggle = (menu) => {
      setOpenMenu(openMenu === menu ? null : menu);
    };


    return (
      <div className="w-full sm:hidden flex flex-col gap-4">


        <div className="w-full  border-b border-[#D7D7D7] border-opacity-[15%] pb-[15px]">
          <button
            onClick={() => toggle("nav")}
            className="w-full flex justify-between items-center py-3 text-white text-[18px] font-semibold"
          >
            NAVIGATION
            <img
              src={openMenu === "nav" ? up : down}
              className="h-4 w-4"
            />
          </button>

          {openMenu === "nav" && (
            <ul className="mt-2 flex flex-col gap-3 text-[14px] text-[var(--grey-text)]">
              <li>About</li>
              <li>Bath</li>
              <li>Preview</li>
              <li>Faq</li>
              <li>Contact</li>
            </ul>
          )}
        </div>


        <div className="w-full  border-b border-[#D7D7D7]  border-opacity-[15%] pb-[15px]">
          <button
            onClick={() => toggle("products")}
            className="w-full flex justify-between items-center py-3 text-white text-[18px] font-semibold"
          >
            PRODUCTS
            <img
              src={openMenu === "products" ? up : down}
              className="h-4 w-4"
            />
          </button>

          {openMenu === "products" && (
            <ul className="mt-2 grid gap-[20px] grid-cols-2  text-[16px] text-[var(--grey-text)]">
              <li>Showers</li>
              <li>Towel Rack</li>
              <li>Soap Dish</li>
              <li>Tumbler</li>
              <li>Dispenser</li>
              <li>Robe Hook</li>
              <li>Towel Road</li>
              <li>Napkin Ring</li>
              <li>Pepper Holder</li>
              <li>Shelf</li>
              <li>Floor Trap</li>
              <li>Bracket</li>
            </ul>
          )}
        </div>

        {/* CONTACT US */}
        <div className="w-full  border-b border-[#D7D7D7]  border-opacity-[15%] pb-[15px]">
          <button
            onClick={() => toggle("contact")}
            className="w-full flex justify-between items-center py-3 text-white text-[18px] font-semibold">
            CONTACT US
            <img
              src={openMenu === "contact" ? up : down}
              className="h-4 w-4"
            />
          </button>

          {openMenu === "contact" && (
            <div className="mt-2 flex flex-col gap-4 text-[16px] text-[var(--grey-text)]">
              <div className="flex gap-2 items-center">
                <a href="tel:+9879166592" className="flex gap-[10px]" >   <img src={fp} alt="" className="w-5 h-5" /> +91 98791 66592</a>

              </div>
              <div className="flex gap-2 items-start">
                <img src={fmap} className="h-5 w-5 mt-1" /> Kotarda, Rajkot, Gujarat 360022
              </div>
              <div className="flex gap-2 items-center text-[#00A198]">
                <img src={ef} className="h-5 w-5" /> spec@infospecco.in
              </div>

              {/* Socials */}
              <div className="flex gap-4  max-sm:hidden">
                <img src={facebook} className="h-5 w-5" />
                <img src={twitter} className="h-5 w-5" />
                <img src={linkedin} className="h-6 w-6" />
                <img src={insta} className="h-6 w-6" />
                <img src={yt} className="h-6 w-6" />
              </div>
            </div>
          )}

        </div>
      </div>
    );
  };




  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled 300px from top
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full z-0">


      <footer className="bg-[var(--black)] max-2xl:h-max max-xl:h-max z-0 max-lg:h-max max-sm:justify-center  relative   max-sm:h-max max-md:h-max flex flex-col items-center text-white ">


        <div className="mt-[190px] max-sm:gap-[35px] max-xl:gap-[50px] max-2xl:gap-[50px] flex max-lg:flex-col gap-[200px] max-[1700px]:gap-[100px] max-sm:flex-col  w-[85%]">

          <div className="w-[30%] max-lg:w-full  max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-[100%]">
            <h3 className="text-[40px]  max-sm:text-center text-[var(--brown)] leading-none">Discover The</h3>
            <h2 className="text-[35px] md:w-[90%] max-sm:w-[335px]  font-bold w-max max-sm:text-center max-2xl:text-[30px]  mb-[35px] max-sm:text-[30px]">ART OF MODERN  LIVING</h2>

            <div className="flex flex-col gap-[30px] w-[500px] max-[1600px]:w-[350px] max-sm:w-full max-xl:w-full max-2xl:w-[300px]">
              <input type="text" placeholder="Name" className="bg-transparent text-[var(--b-grey)] border-b  border-[var(--b-grey)] pb-[15px] outline-none text-[20px]" />
              <input type="email" placeholder="Email" className="bg-transparent border-b  border-[var(--b-grey)] pb-[15px] outline-none text-[20px]" />
              <input type="text" placeholder="Phone" className="bg-transparent border-b border-[var(--b-grey)] pb-[15px] outline-none text-[20px]" />
              <textarea placeholder="Message" className="bg-transparent border-b  leading-none border-[var(--b-grey)] pb-[40px] outline-none text-[20px]"></textarea>
            </div>

            <button className=" bg-[var(--brown)] px-6 py-2  max-sm:h-[40px] max-sm:text-[15px] max-sm:font-bold max-sm:text-center justify-center max-sm:w-full rounded-full  text-white mt-[35px] gap-2 flex font-semibold">
              SUBMIT NOW <img src={rightarrow} alt="" className="max-sm:w-[17px] max-sm:h-[17px]" />
            </button>
          </div>

          <div className="flex flex-col max-sm:w-full max-sm:justify-center max-sm:items-center w-[70%] max-md:w-full max-xl:w-full">
            <MobileFooterDropdown />
            <div className="flex gap-[116px] max-sm:hidden  justify-between max-[1600px]:gap-[50px] max-2xl:gap-[30px] max-xl:gap-[50px] max-sm:flex-col">

              <div className="w-[133px] max-sm:w-full">
                <h4 className="text-white font-semibold  text-[20px]  mb-[20px]">NAVIGATION</h4>
                <ul className="space-y-5 text-[18px] text-[var(--grey-text)]">
                  <li>About</li>
                  <li>Bath</li>
                  <li>Preview</li>
                  <li>Faq</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div className="">
                <h4 className="text-white font-semibold  text-[20px]  mb-[20px]">PRODUCTS</h4>
                <ul className="gap-5 text-[18px]  text-[var(--grey-text)] grid grid-cols-2 max-md:grid-cols-1  max-lg:grid-cols-2">
                  <li>Showers</li>
                  <li>Towel Rack</li>
                  <li>Soap Dish</li>
                  <li>Tumbler</li>
                  <li>Dispenser</li>
                  <li>Robe Hook</li>
                  <li>Towel Road</li>
                  <li>Napkin Ring</li>
                  <li>Pepper Holder</li>
                  <li>Shelf</li>
                  <li>Floor Trap</li>
                  <li>Bracket</li>
                </ul>
              </div>

              <div className="w-[247px] max-xl:w-[200px]">
                <h4 className="text-white font-semibold  text-[20px]  mb-[20px]">CONTACT US</h4>

                <div className="space-y-[20px] text-[18px] mt-[27px] text-[var(--grey-text)]">
                  <div className="  items-center">
                    <a href="tel:+9879166592" className="flex gap-[10px]" >   <img src={fp} alt="" className="" /> +91 98791 66592</a>
                  </div>
                  <div className="flex gap-[10px]  items-start ">
                    <img src={fmap} alt="" className="mt-[3px] " /> Kotarda, Rajkot, Gujarat 360022
                  </div>
                  <div className="flex gap-[10px] items-center text-[#00A198]">
                    <img src={ef} alt="" className="mt-[3px] " /> spec@infospecco.in
                  </div>
                </div>

                <div className="flex gap-4 mt-[98px] flex-col">
                  <div className="flex gap-[20px] items-center">
                    <img src={facebook} alt="" className="text-[var(--grey-text)] h-5 w-5" />
                    <img src={twitter} alt="" className="text-[var(--grey-text)] h-5 w-5 " />
                    <img src={linkedin} alt="" className="text-[var(--grey-text)] h-6 w-6 " />
                    <img src={insta} alt="" className="text-[var(--grey-text)] h-6 w-6 " />
                    <img src={yt} alt="" className="text-[var(--grey-text)] h-6 w-6 " />
                  </div>
                </div>

              </div>

            </div>
            <div className="flex mt-[85px] max-sm:mt-[30px] max-sm:w-full max-sm:justify-center max-sm:border-b  max-sm:border-opacity-[15%] max-sm:border-[#D7D7D7] max-sm:pb-[30px]  max-xl:justify-center max-md:justify-center justify-end">
              <img src={mainlogo} alt="" className="max-xl:h-[100px] max-sm:h-[45px] max-sm:w-[148px] w-[300px]" />
            </div>

          </div>
          <div className="flex gap-4 mt-[25px] max-sm:mt-0 sm:hidden justify-center items-center">
            <img src={facebook} className="h-5 w-5" />
            <img src={twitter} className="h-5 w-5" />
            <img src={linkedin} className="h-6 w-6" />

            <img src={yt} className="h-6 w-6" />
          </div>


        </div>

        <div className="mt-[80px] w-[85%] max-sm:mt-[30px] relative  py-[30px] border  border-t-white border-opacity-[20%] border-l-0 border-r-0  border-b-0  flex flex-col md:flex-row items-center justify-between text-sm text-[var(--grey-text)]">

          <div className="flex gap-6 max-sm:hidden items-center w-full   max-sm:flex-col max-sm:gap-2 text-[17px] justify-center mt-3 md:mt-0">
            <p>© 2025 <span className="font-semibold text-white">SPEC.</span> All Rights Reserved.</p>
            <div className="h-[21px] w-[1px] bg-[#7F8684] max-sm:hidden"></div>
            <p>Privacy Policy</p>
            <div className="h-[21px] w-[1px] bg-[#7F8684] max-sm:hidden"></div>
            <p>Diversity Policy</p>
          </div>
          <div className="sm:hidden gap-[10px] ">
            <p>© 2025 <span className="font-bold text-white">SPEC.</span> All Rights Reserved.</p>
            <div className="flex gap-[15px]">

              <p>Privacy Policy</p>
              <div className="h-[21px] w-[1px] text-[14px] bg-[#7F8684] "></div>
              <p>Diversity Policy</p>
            </div>

          </div>

        </div>

 {isVisible && (
        <button
          onClick={scrollToTop}
          className="absolute right-6 bottom-6 z-50 p-3 rounded-full 
    border border-white border-opacity-20
    backdrop-blur-md 
    hover:scale-110 transition-all">
          <img src={arrowup} alt="Go to Top" className="w-6 h-6" />
        </button>
      )}
      </footer>
     
    </section>
  );
}
