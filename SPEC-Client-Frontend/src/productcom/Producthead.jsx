import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import right from "../assets/images/ArrowRight(1).svg"
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
        { id: 1, name: "Rose Gold", clr: "#D79C8E" },
        { id: 2, name: "Gold", clr: "var(--brown)" },
        { id: 3, name: "Cp Finish", clr: "#EDEDED" },
        { id: 4, name: "Black", clr: "var(--black)" },
    ];


    const [activeImage, setActiveImage] = useState(images[0].url);
    const [activeSize, setActiveSize] = useState("12\"");

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

                    <section className="w-full flex justify-center h-[720px]">
                        <div className=" flex gap-10 max-xl:flex-col">

                            <div className="flex gap-4 w-[50%] max-xl:order-2">

                                <div className="flex flex-col h-full justify-between">
                                    {images.map((item) => (
                                        <img
                                            key={item.id}
                                            src={item.url}
                                            onClick={() => setActiveImage(item.url)}
                                            className={`w-40 h-40 object-cover rounded cursor-pointer border transition 
                                                ${activeImage === item.url ? "border-[var(--brown)]" : "border-transparent"}`}
                                            alt=""
                                        />
                                    ))}
                                </div>


                                <div className="flex-1">
                                    <img
                                        src={activeImage}
                                        alt="main"
                                        className="w-full h-full object-cover rounded-lg shadow-md"
                                    />
                                </div>

                            </div>

                            <div className="flex flex-col max-xl:order-1 justify-between w-[50%]">
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
                                    <div className="flex border border-[#E2E0DE] font-medium text-[18px]">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setActiveSize(size)}
                                                className={`px-4 py-2 w-full size-box transition 
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

                                    <div className="flex gap-4 flex-wrap justify-between">
                                        {colors.map((c) => (
                                            <div
                                                key={c.id}
                                               
                                                className="flex items-center gap-2 cursor-pointer"
                                            >
                                                <div
                                                    className="w-8 h-8  border "
                                                    style={{ backgroundColor: c.clr }}
                                                ></div>

                                                <p
                                                    className="text-sm text-[var(--black)] " >
                                                    {c.name}
                                                </p>
                                            
                                            </div>
                                            
                                        ))}
                                </div>
                            </div>

                            {/* ---------- Button ---------- */}
                            <button className="mt-10 bg-[var(--brown)] text-white  w-full justify-center font-bold h-[50px]  rounded-full flex items-center gap-3 text-lg tracking-wide hover:opacity-90">
                                CATALOGUE DOWNLOAD  <img src={right} alt="" />
                            </button>
                        </div>

                </div>
            </section>
        </div >
                </div >
            </>
            );
}
