import { useState, useEffect, } from "react";
import maplogo from "../assets/images/Flag_of_the_United_States 1.svg";
import logo from "../assets/images/logospec.svg";
import navlogo from "../assets/images/navlogo.svg";
import h1 from "../assets/images/Headset(1).svg"
import h2 from "../assets/images/WhatsappLogo.svg";
import s12 from "../assets/images/Heart.svg";
import user from "../assets/images/User.svg";
import search1 from "../assets/images/MagnifyingGlass.svg";
import youtube from "../assets/images/youtube.svg";
import insta from "../assets/images/insta.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/X Twitter.svg";
import facebook from "../assets/images/facebook.svg";
import menu from "../assets/images/menu.svg";
import rightcaret from "../assets/images/CaretRight.svg";
import down from "../assets/images/down.svg";
import up from "../assets/images/up.svg";
import x from "../assets/images/navx.svg";
import arrowrightlog from "../assets/images/ArrowRight(1).svg";
import Arrowleft from "../assets/images/back.svg"
import cartdown from "../assets/images/CaretDown.svg"
import { Link, useNavigate } from "react-router-dom";



export default function NavbarHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [bathScreen, setBathScreen] = useState(false);
  const navigate = useNavigate();
  const category = () => {
    navigate("/categories")
  }



  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);



  const bathItems = [
    "TOWEL RACK",
    "SOAP DISH",
    "TUMBLER",
    "DISPENSER",
    "ROBE HOOK",
    "TOWEL ROAD",
    "NAPKIN RING",
    "PEPPER HOLDER",
    "SHELF",
    "FLOOR TRAP",
    "BRACKET",
  ];

  return (
    <>
      <div className="w-full max-sm:hidden bg-white  py-2 border-b border-gray-200 ">
        <div className="mx-auto w-[85%] flex flex-col md:flex-row justify-between items-center  max-sm:px-6 max-lg:px-8 ">

          <div className="flex items-center gap-4 text-[#110A00] mb-2 md:mb-0">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={insta} alt="" />
            <img src={youtube} className="w-[17px] h-[12px]" alt="" />
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center text-[16px] gap-[25px] md:gap-6">
            <a href="tel:+9879166592"><p className="text-[#2A2928] font-medium flex items-center gap-1">
              <img src={h1} alt="phone" className="w-4 h-4" /> +91 98791 66592
            </p></a>
            <a href="https://wa.me/9016699400" target="_blank">
              <p className="text-[#2A2928] font-medium flex items-center gap-1 ">
                <img src={h2} alt="phone" className="w-4 h-4" /> +91 90166 99400
              </p>
            </a>
            <div className="w-[1px] h-[20px] bg-black opacity-[20%]"></div>

            <div className="relative text-[16px]">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-[#2A2928] hover:text-[#110A00] transition"
              >
                <img src={maplogo} alt="" />

                <span className="w-[25px]">{selectedLang}</span>

                {langOpen ? (
                  <img src={up} alt="" className="ml-1 w-5 h-5" />
                ) : (
                  <img src={down} alt="" className="ml-1 w-5 h-5" />
                )}
              </button>


              {langOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white border border-[#2A2928] rounded z-50">
                  {["EN", "HI", "GU"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      className="block w-full text-left px-3 py-1 text-[#2A2928] hover:bg-[#110A00] hover:text-white transition"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <header className="w-full bg-[var(--black)] flex justify-center items-center h-[77px] z-50 max-sm:h-[50px]" id="header">
        <div className="flex justify-between items-center w-[85%]">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-[165px] h-[47px] max-sm:h-[25px] max-sm:w-[88px]" />
          </div>

          <nav className="hidden md:block relative">
            <ul className="flex items-center gap-[60px] max-xl:gap-[30px] max-lg:gap-[20px] 
                     text-[17px] max-lg:text-[15px] uppercase tracking-wide text-white font-semibold">

              <li><Link to={"/"}><a href="" className="text-[var(--brown)]">Home</a></Link></li>

            <li><a href="#">About Us</a></li>


            <li className="dropdown">
              <a href="" className="flex gap-2" onClick={category}>BATH <img src={cartdown} alt="" /></a>
              <ul className="dropdown-menu">
                {bathItems.map((it, idx) => (
                  <li key={idx}>
                    <a href="#">{it}</a>
                  </li>
                ))}
              </ul>
            </li>

            <li><a href="">Review</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Contact</a></li>

          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-5 text-white text-lg">
          <img src={search1} alt="" className="h-6 w-6" />
          <img src={user} alt="" className="h-6 w-6" />
          <img src={s12} alt="" className="h-6 w-6" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setMenuOpen(true)} className="sm:hidden">
          <img src={menu} alt="" className="h-[14px] w-[22px]" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`fixed top-0 right-0 h-[700px] w-full bg-[#fffdfa]
       transform ${menuOpen ? "translate-x-0" : "translate-x-full"}
       transition-transform duration-500 ease-in-out z-50`}>

        <div className="flex justify-between items-center h-[60px] px-[20px] border-b border-[#000000] border-opacity-[10%]">
          <img src={navlogo} alt="logo" className="w-[88px] h-[25px]" />
          <button onClick={() => setMenuOpen(false)} className="text-[var(--brown)]">
            <img src={x} alt="" className="h-5 w-5" />
          </button>
        </div>

        {/* MAIN & SUBMENU SWITCH */}
        <div className="flex flex-col justify-between w-full nav-height">
          {!bathScreen ? (
            <ul className="flex flex-col mt-5 gap-[25px] px-[20px] text-[var(--black)] uppercase tracking-wide text-[15px] font-semibold">
              <li><a href="#" className="block">Home</a></li>
              <li><a href="#" className="block">About Us</a></li>

              <li>
                <button
                  onClick={() => setBathScreen(true)}
                  className="w-full flex items-center justify-between hover:text-[var(--brown)] transition-colors duration-300"
                >
                  <span>BATH</span>
                  <img src={rightcaret} alt="" className="w-4 h-4" />
                </button>
              </li>

              <li><a href="#" className="block">Review</a></li>
              <li><a href="#" className="block">FAQ</a></li>
              <li><a href="#" className="block">Contact</a></li>
            </ul>
          ) : (
            <div id="submenu" className={`mt-5 ${bathScreen ? "submenu-slide-in" : ""}`}>

              <button
                onClick={() => {
                  const submenu = document.getElementById("submenu");
                  submenu.classList.remove("submenu-slide-in");
                  submenu.classList.add("submenu-slide-out");
                  setTimeout(() => setBathScreen(false), 400);
                }}
                className="flex items-center justify-center gap-2 px-5 text-[var(--brown)] mb-3"
              >
                <img src={Arrowleft} alt="" className="h-5 w-5" />
                <span className="font-bold">Bath</span>
              </button>

              <ul className="flex flex-col gap-[15px] h-[396px] px-[20px] text-[var(--black)] uppercase tracking-wide text-[15px] font-semibold">
                {bathItems.map((it, idx) => (
                  <li key={idx} className="flex items-center justify-between pr-2">
                    <a href="#">{it}</a>
                    <img src={rightcaret} alt="" className="w-4 h-4" />
                  </li>
                ))}
              </ul>

            </div>
          )}

          <div>
            <div className="flex justify-between flex-col px-[20px]">
              <div className="flex justify-between items-end">
           <a href="tel:+919879166592">  <p className="text-[14px] font-medium flex items-center gap-2">
              <img src={h1} alt="" className="w-4 h-4" /> +91 98791 66592
                </p></a>   
             <a href="tel: +919016699400">   <p className="text-[14px] font-medium flex items-center gap-2">
                  <img src={h2} alt="" className="w-4 h-4" /> +91 90166 99400
                </p></a>
              </div>

              <button className="mt-6 w-full flex justify-center text-[15px] gap-[7px] items-center bg-[var(--brown)] text-white h-[35px] rounded-full font-bold">
                LOG IN <img src={arrowrightlog} alt="" className="h-[17px] w-[17px]" />
              </button>
            </div>

            <div className="flex h-[65px] justify-between px-5 bg-[#F4F2EE] mt-[25px] items-center">
              <div className="flex items-center gap-3">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
                <img src={insta} alt="" />
                <img src={youtube} alt="" className="w-[17px] h-[12px]" />
              </div>

              <div className="relative text-[16px]">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 text-[#2A2928] hover:text-[#110A00] transition"
                >
                  <img src={maplogo} alt="" />
                  <span className="w-[25px]">{selectedLang}</span>
                  {langOpen ? (
                    <img src={up} alt="" className="ml-1 w-5 h-5" />
                  ) : (
                    <img src={down} alt="" className="ml-1 w-5 h-5" />
                  )}
                </button>

                {langOpen && (
                  <div className="absolute right-0 bottom-full mb-2 w-20 bg-white border border-[#2A2928] rounded z-50">

                    {["EN", "HI", "GU"].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                        className="block w-full text-left px-3 py-1 text-[#2A2928] hover:bg-[#110A00] hover:text-white transition"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)} />
      )}

    </header >


    





    </>
  );
}
