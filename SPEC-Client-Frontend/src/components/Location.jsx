import React from 'react'
import { useState } from 'react';
import rec from "../assets/images/uprec.png"
import location from "../assets/images/MapPin.svg"
import phone from "../assets/images/Phone.svg"

export default function Location() {
     const [selectedOffice, setSelectedOffice] = useState(null);
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
  return (
   <>
<section className="w-full mt-[140px] max-sm:mt-[50px] z-10">
      <div className="relative w-full max-sm:h-[400px] h-[550px]">
    
            <iframe
              title="map"
              className="w-full h-full"
              src={mapUrl}
            ></iframe>
    
            <div className="absolute z-10 -bottom-[80px] w-[85%] left-1/2 max-sm:h-[144px] max-sm:flex-col -translate-x-1/2 flex h-[292px]  justify-center items-center">
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
         z-50 `}
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
</section>
   </>
  )
}
