import { useState } from "react";
import down from "../assets/images/down.svg";
import star from "../assets/images/catstar.svg";
import productImg from "../assets/images/image3.png";
import download from "../assets/images/DownloadSimple.svg"
import filter from "../assets/images/filter.svg"

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Towel Rack - Black Matt", code: "2001", rating: 5, price: 850, steelType: " 202", color: "Black Matt", shape: "Square", image: productImg },
    { id: 2, name: "Towel Rack - Chrome", code: "2002", rating: 4, price: 750, steelType: " 304", color: "Chrome", shape: "Round", image: productImg },
    { id: 3, name: "Double Shelf Rack - Gold", code: "2010", rating: 5, price: 1950, steelType: " 304", color: "Gold", shape: "Square", image: productImg },
    { id: 4, name: "Dispenser Holder - Black Matt", code: "2015", rating: 3, price: 650, steelType: " 202", color: "Black Matt", shape: "Round", image: productImg },
    { id: 5, name: "Shower Shelf - Rose Gold", code: "2023", rating: 5, price: 2250, steelType: " 304", color: "Rose Gold", shape: "Square", image: productImg },
    { id: 6, name: "Paper Holder - Chrome", code: "2030", rating: 4, price: 590, steelType: " 202", color: "Chrome", shape: "Round", image: productImg },
    { id: 7, name: "Corner Shelf - Gold", code: "2041", rating: 5, price: 1350, steelType: " 304", color: "Gold", shape: "Round", image: productImg },
    { id: 8, name: "Tissue Holder - Black Matt", code: "2055", rating: 4, price: 499, steelType: " 202", color: "Black Matt", shape: "Square", image: productImg },
    { id: 9, name: "Wall Shelf - Chrome", code: "2082", rating: 5, price: 1650, steelType: " 304", color: "Chrome", shape: "Square", image: productImg },
  ];

  const filters = [
    { label: "Steel Types", key: "steelType", list: ["SS - 202", "SS - 304"] },
    { label: "Colour", key: "color", list: ["Black Matt", "Chrome", "Gold", "Rose Gold"] },
    { label: "Shape", key: "shape", list: ["Round", "Square"] },
  ];

  const [openFilter, setOpenFilter] = useState(null);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    steelType: [],
    color: [],
    shape: [],
  });

  const [sortType, setSortType] = useState(null);

  const toggleFilter = (i) => {
    setOpenFilter(openFilter === i ? null : i);
  };

  const handleCheckbox = (filterKey, value) => {
    setSelectedFilters((prev) => {
      const existing = prev[filterKey];
      const updated =
        existing.includes(value)
          ? existing.filter((v) => v !== value)
          : [...existing, value];

      return { ...prev, [filterKey]: updated };
    });
  };

  /** FILTER PRODUCTS */
  const filteredProducts = products.filter((item) => {
    return Object.keys(selectedFilters).every((key) => {
      if (selectedFilters[key].length === 0) return true;
      return selectedFilters[key].includes(item[key]);
    });
  });

  /** SORT PRODUCTS */
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "low-high") return a.price - b.price;
    if (sortType === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="w-[85%] mx-auto flex gap-10 py-10 max-lg:flex-col">


      <div className="w-[285px]  h-max max-lg:w-full ">
        <div className="px-5 rounded-full border border-[#2A2928] w-max flex border-opacity-[20%] h-[50px] mb-4 justify-center items-center">
          <p className="text-[var(--brown)] flex gap-2 font-medium text-sm ">
            <img src={filter} alt="" className="w-5" /> FILTER
          </p>
        </div>
        <div className=" bg-[#FFF8EE]">

<div className="p-5">
  
          {filters.map((f, i) => (
            <div key={i} className="mb-6 flex gap-[25px] flex-col pb-[15px] border-b border-[#110A00] border-opacity-[10%]">
              <button
                onClick={() => toggleFilter(i)}
                className="flex justify-between w-full text-[18px] font-semibold text-[var(--black)] "
              >
                {f.label}
                <img src={down} className={`w-5 transition-transform ${openFilter === i ? "rotate-180" : ""}`} />
              </button>

              {openFilter === i && (
                <ul className=" gap-5 flex flex-col text-[18px]  text-[var(--black)]">
                  {f.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-[var(--brown)] cursor-pointer"
                        checked={selectedFilters[f.key].includes(item)}
                        onChange={() => handleCheckbox(f.key, item)}
                      />
                      <span className="cursor-pointer hover:text-[var(--brown)]">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
</div>



          <div className="h-[302px]">
            <img src={productImg} alt="" className="object-cover h-[252px] w-full" />
            <button className="flex items-center gap-2 text-white bg-[var(--brown)]  font-bold text-[16px] text-center justify-center h-[50px] w-full">
              Brochure Download <img src={download} alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="flex-1">

        {/* Top bar */}
        <div className="flex items-start justify-between mb-1">
          <p className="text-[var(--black)] text-[18px] font-medium">
            {sortedProducts.length} products
          </p>

          {/* SORT SELECT */}
          <div className="relative text-[var(--black)] text-[18px] font-medium">
            <button
              className="flex gap-1 items-center  px-3 py-1 "
              onClick={() => setSortOpen(!sortOpen)}
            >
              Sort By <img src={down} className={`w-5 ${sortOpen ? "rotate-180" : ""}`} />
            </button>

            {sortOpen && (
              <ul className="absolute right-0 mt-1 bg-white  text-[var(--black)] cursor-pointer">
                <li
                  className="px-3 py-1 text-xs hover:bg-[#F6EFE3]"
                  onClick={() => { setSortType("low-high"); setSortOpen(false); }}
                >
                  Price Low to High
                </li>
                <li
                  className="px-3 py-1 text-xs hover:bg-[#F6EFE3]"
                  onClick={() => { setSortType("high-low"); setSortOpen(false); }}
                >
                  Price High to Low
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 mt-[30px] gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {sortedProducts.map((p, idx) => (
            <div key={idx} className="bg-white slide-ac h-max  transition-all duration-300 border group">
              <img src={p.image} className="h-[350px] w-full" />
              <div className=" p-4 gap-5  view-bg flex flex-col ">
                <div className="flex items-center justify-between  mb-1">
                  <div className="flex gap-[2px]">
                    {Array(p.rating).fill(0).map((_, sIdx) => (
                      <img key={sIdx} src={star} className="w-5 star" />
                    ))}
                  </div>

                  <p className="text-[var(--grey-text)] font-semibold text-[18px] h-white"> ss : <span className="text-[var(--black)] h-white">{p.steelType}</span></p>
                </div>
        <div>
                  <h2 className="text-[var(--black)] text-[22px] font-bold max-2xl:text-[20px] h-white">{p.name}</h2>
                <p className="font-semibold text-[17px] text-[var(--grey-text)] h-white">code : <span className="text-[var(--black)] h-white">{p.code}</span></p>

        </div>
                <a href="#" className="text-[var(--brown)] ac-button text-[18px] w-max max-sm:text-[15px] font-bold flex items-center gap-1">
                  VIEW ALL <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
