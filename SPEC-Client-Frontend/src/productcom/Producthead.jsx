import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import f1 from "../assets/images/productmini.png";
import mainimg from "../assets/images/product.png";
import caretright from "../assets/images/CaretRight.svg";
import star from "../assets/images/blackstar.svg"

export default function Producthead() {

    const navigate = useNavigate();
    const home = () => navigate("/");

    const images = [
        { id: 1, url: f1 },
        { id: 2, url: mainimg },
        { id: 3, url: f1 },
        { id: 4, url: mainimg },
    ];

    const sizes = ["7\"", "9\"", "12\"", "15\"", "18\"", "24\""];

    const colors = [
        { id: 1, name: "Rose Gold", clr: "var(--brown)" },
        { id: 2, name: "Gold", clr: "var(--yellow)" },
        { id: 3, name: "Cp Finish", clr: "var(--navyblue)" },
        { id: 4, name: "Black", clr: "var(--black)" },
    ];

  
    const [activeImage, setActiveImage] = useState(images[0].url);
    const [activeSize, setActiveSize] = useState("12\"");
    const [activeColor, setActiveColor] = useState("Black");

    return (
        <>
            <div className='w-full flex justify-center py-10'>
                <div className='w-[85%] flex flex-col gap-[60px]'>

                    <div className='flex gap-2 text-[16px] max-sm:hidden'>
                        <div onClick={home} className='gap-2 flex cursor-pointer'>
                            Home <img src={caretright} alt="" className='w-5' />
                        </div>
                        <div className='gap-2 flex cursor-pointer'>
                            Bath <img src={caretright} alt="" className='w-5' />
                        </div>
                        <p className='gap-2 flex'>Towel Rack</p>
                    </div>

                    <section className="w-full flex justify-center py-10 bg-[var(--bgbrown)] rounded-xl">
                        <div className="w-[90%] flex gap-10 max-xl:flex-col">

                            <div className="flex gap-4 max-xl:order-2">

                                <div className="flex flex-col gap-4">
                                    {images.map((item) => (
                                        <img
                                            key={item.id}
                                            src={item.url}
                                            onClick={() => setActiveImage(item.url)}
                                            className={`w-20 h-20 object-cover rounded cursor-pointer border transition 
                                                ${activeImage === item.url ? "border-[var(--brown)]" : "border-transparent"}`}
                                            alt=""
                                        />
                                    ))}
                                </div>

                          
                                <div className="flex-1">
                                    <img
                                        src={activeImage}
                                        alt="main"
                                        className="w-full h-[450px] object-cover rounded-lg shadow-md"
                                    />
                                </div>

                            </div>

                            <div className="flex-1 max-xl:order-1">
                                <div className="flex items-center gap-2 text-[var(--brown)] text-xl">
                                    <p><img src={star} alt="" className='w-5' /></p>
                                    <p className="text-[var(--grey-text)] text-sm">(5.0)</p>
                                </div>

                                <h2 className="text-[35px] font-semibold text-[var(--black)] mt-2">
                                    Towel Rack - black matt
                                </h2>

                                <p className="text-[var(--grey-text)] text-[22px]  font-semibold mt-1">
                                    Code : <span className="text-[var(--black)] font-medium">1226</span>
                                </p>

                                <p className="mt-4 text-[var(--b-grey)] font-medium text-[18px]">
                                    This wall mixer is designed to offer both elegance and functionality
                                    for modern bathrooms. It includes a 115mm long bend pipe ensuring
                                    proper water flow direction and easy connection to the shower arm.
                                </p>

                          
                                <div className="mt-6">
                                    <h2 className="font-semibold text-[var(--black)] text-[22px] mb-2">Size:</h2>
                                    <div className="flex gap-3 flex-wrap">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setActiveSize(size)}
                                                className={`px-4 py-2 rounded border transition 
                                                    ${activeSize === size
                                                        ? "bg-[var(--brown)] text-white border-[var(--brown)]"
                                                        : "border-[var(--grey-text)] text-[var(--b-grey)]"
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* ---------- Colors ---------- */}
                                <div className="mt-6">
                                    <h2 className="font-semibold text-[var(--black)] mb-2 text-[22px]">Colors:</h2>

                                    <div className="flex gap-4 flex-wrap">
                                        {colors.map((c) => (
                                            <div
                                                key={c.id}
                                                onClick={() => setActiveColor(c.name)}
                                                className="flex items-center gap-2 cursor-pointer"
                                            >
                                                <div
                                                    className={`w-5 h-5 rounded-full border 
                                                        ${activeColor === c.name ? "border-[var(--black)]" : "border-gray-300"}`}
                                                    style={{ backgroundColor: c.clr }}
                                                ></div>
                                                <p
                                                    className={`text-sm 
                                                        ${activeColor === c.name ? "text-[var(--black)]" : "text-[var(--grey-text)]"}`}
                                                >
                                                    {c.name}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* ---------- Button ---------- */}
                                <button className="mt-10 bg-[var(--brown)] text-white px-10 py-4 rounded-full flex items-center gap-3 text-lg tracking-wide hover:opacity-90">
                                    CATALOGUE DOWNLOAD
                                </button>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
