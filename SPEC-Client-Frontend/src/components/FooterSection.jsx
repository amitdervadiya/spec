import { useState, useEffect } from "react";
import phone from "../assets/images/Phone.svg"
import location from "../assets/images/MapPin.svg"
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
import rec from "../assets/images/uprec.png"
import up from "../assets/images/up.png";
import down from "../assets/images/CaretDown.svg";


export default function FooterSection() {
  const [selectedOffice, setSelectedOffice] = useState(null);

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


  const locations = {
    hyderabad: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7685643323007!2d78.49462729999999!3d17.4228909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d07e5a4fa7%3A0x6aa1de5707cf4f9e!2sJ%20M%20TRADERS!5e0!3m2!1sen!2sin!4v1763902019923!5m2!1sen!2sin",
    rajkot: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1846.7104924106188!2d70.8064867587219!3d22.22410045476145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb2462fb1baf%3A0x5de99515d28621ac!2sJm%20enterprise!5e0!3m2!1sen!2sin!4v1763880597229!5m2!1sen!2sin%22",
    kochi: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2336.464557500814!2d76.28122102603042!3d9.979691372150663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dafb90d022b%3A0x2fedbf62259b3bb8!2sJM%20TRADING!5e0!3m2!1sen!2sin!4v1763880718493!5m2!1sen!2sin%22"
  };
  const offices = [
    {
      id: "hyd",
      title: "HYDERABAD OFFICE",
      phone: "+91 82001 35209",
      phonelink: "tel:+918200135209",
      address:
        "1st Floor, 1-4-27, Niz Necklace Mall, Panadmir Colony, Hyderabad, Telangana 500080",
      map: locations.hyderabad,
    },
    {
      id: "raj",
      title: "RAJKOT OFFICE",
      phone: "+91 90166 99400",
      phonelink: "tel:+919016699400",
      address:
        "Sed no.12, Gondal Rd, near solvant fatak, chokdi, Rajkot, Kotharia, Gujarat 360022",
      map: locations.rajkot,
    },
    {
      id: "kochi",
      title: "KOCHI OFFICE",
      phone: "+91 83025 99914",
      phonelink: "tel:+918302599914",
      address:
        "Est, TD East Sannidhi Rd, Cloth Bazar, Shenoys, Ernakulam, Kerala 682035",
      map: locations.kochi,
    },
  ];



  const [mapUrl, setMapUrl] = useState(locations.rajkot);
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled 300px from top
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
    <section className="w-full mt-[140px] max-sm:mt-[50px]">

      <div className="relative w-full max-sm:h-[400px] h-[550px]">

        <iframe
          title="map"
          className="w-full h-full"
          src={mapUrl}
        ></iframe>

        <div className="absolute -bottom-[80px] w-[85%] left-1/2 max-sm:h-[144px] max-sm:flex-col -translate-x-1/2 flex h-[292px]  justify-center items-center">
          {offices.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setMapUrl(item.map);
                setSelectedOffice(item.id);
              }}
              className={`
        bg-white fo-con hover:bg-[#FFF7EB]
        ${selectedOffice === item.id ? "active" : ""}
        gap-[20px] px-[64px]
        flex flex-col justify-center py-[50px]  h-[275px]
        relative cursor-pointer max-sm:flex-row max-sm:h-[48px]
        max-sm:p-[15px] max-sm:w-[335px] max-sm:justify-between max-md:flex-col
        border-3   max-xl:px-[30px] border max-md:p-[20px] max-lg:p-[20px] max-2xl:p-[30px] max-xl:p-[30px] max-xl:gap-[10px]
      `}
            >
              <div className="h-[48px]  w-[3px] bg-[var(--brown)] bor sm:hidden absolute left-0 top-0"></div>

              <img
                src={rec}
                className="h-[17px] w-[45px] absolute max-sm:hidden bor -top-[6%] left-1/2 -translate-x-1/2"
                alt=""
              />

              <h2 className="font-semibold text-[25px] max-md:text-[20px] max-lg:text-[20px]  text-[var(--black)]
           max-sm:text-[12px]">
                {item.title}
              </h2>

              <p className="text-[var(--grey)] flex justify-start gap-2 text-[18px]
           font-medium max-sm:hidden  max-xl:text-[16px] max-lg:text-[15px]
           max-sm:w-[250px] items-start">
                <img src={location} alt="" className="h-[22px] w-[22px] mt-1" />
                {item.address}
              </p>


              <div className="h-[18px] w-[1px] bg-black opacity-[20%] translate-x-[50%]  absolute left-[50%] sm:hidden "></div>



              <div className="flex items-center gap-2 max-sm:gap-[20px]    text-[18px] font-medium ph">

                <div className="flex gap-[8px] max-sm:gap-[4px]">
                  <img src={phone} alt="" className="h-[22px] w-[22px] max-sm:h-[17px] max-sm:w-[17px]" />
                  <a href={item.phonelink}>{item.phone}</a>

                </div>
              </div>

              <div className="absolute left-0 bg-[var(--brown)]
           max-sm:hidden bor h-[10px] w-full bottom-0"></div>
            </div>
          ))}
        </div>


      </div>


      <footer className="bg-[var(--black)] max-2xl:h-max max-xl:h-max max-lg:h-max max-sm:justify-center   max-sm:h-max max-md:h-max flex flex-col items-center text-white ">


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
                    <a href="tel:+9879166592" className="flex gap-[10px]" >   <img src={fp} alt="" className="w-5 h-5" /> +91 98791 66592</a>
                  </div>
                  <div className="flex gap-[10px]  items-start ">
                    <img src={fmap} alt="" className="mt-[3px]" /> Kotarda, Rajkot, Gujarat 360022
                  </div>
                  <div className="flex gap-[10px] items-center text-[#00A198]">
                    <img src={ef} alt="" /> spec@infospecco.in
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
            {isVisible && (
              <button
                onClick={scrollToTop}
                className="absolute right-0 bottom-4 z-50 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-all">
                <img src={up} alt="Go to Top" className="w-5 h-5 invert" />
              </button>
            )}
          </div>
        </div>
      </footer>
    </section>
  );
}
