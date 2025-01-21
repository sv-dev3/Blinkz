import React, { useState } from "react";
import BestSale from "src/components/ui-components/BestSale";
import HotSale from "src/components/ui-components/HotSale";
import NewSale from "src/components/ui-components/NewSale";
import { Link } from "react-router-dom";

const SaleLayout = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handleButtonClick = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  return (
    <div className="pt-16 pb-16">
      <div className="container mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 class="text-[30px] uppercase text-black mb-3 font-outfitMedium leading-[normal]">
            Featured Product
          </h2>
          <p className="max-w-[700px] mx-auto text-[#707070] font-outfitRegular text-[14px]">
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            <br class="hidden md:inline-block" /> doming id quod mazim placerat
            facer possim assum typi non habent claritatem insitam.
          </p>
        </div>

        <header className="bg-white px-4 flex gap-x-0 md:gap-x-3 items-center mb-12">
          <button
            onClick={() => handleButtonClick(1)}
            className={`${
              selectedPage === 1
                ? "text-[12px] md:text-[16px] text-white outfit-bold bg-black border-[#000]"
                : "text-black text-[12px] md:text-[16px] outfit-bold border-white "
            }  mr-[5px] hover:bg-black py-1 px-[5px]  md:px-3 transition duration-300 hover:text-white uppercase border hover:border-black font-bold rounded`}
          >
            Best Sale
          </button>
          <button
            onClick={() => handleButtonClick(2)}
            className={`${
              selectedPage === 2
                ? "text-[12px] md:text-[16px] text-white outfit-bold bg-black border-[#000]"
                : "text-black text-[12px] md:text-[16px] outfit-bold border-white "
            }  mr-[5px] hover:bg-black py-1 px-[5px]  md:px-3 transition duration-300 hover:text-white uppercase border hover:border-black font-bold rounded`}
          >
            Hot Sale
          </button>
          <button
            onClick={() => handleButtonClick(3)}
            className={`${
              selectedPage === 3
                ? "text-[12px] md:text-[16px] text-white outfit-bold bg-black border-[#000]"
                : "text-black text-[12px] md:text-[16px] outfit-bold border-white"
            }  mr-[5px] hover:bg-black py-1 px-[5px]  md:px-3 transition duration-300 hover:text-white uppercase border hover:border-black font-bold rounded`}
          >
            New Sale
          </button>
          <Link
            to="/About"
            className="text-[12px] md:text-[16px] inline-block   border-b border-black hover:border-purple-600 text-black hover:text-purple-600 font-outfitRegular ml-auto"
          >
            {" "}
            Shop All Products
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </Link>
        </header>

        <div className="px-4">
          {selectedPage === 1 && <BestSale />}
          {selectedPage === 2 && <HotSale />}
          {selectedPage === 3 && <NewSale />}
        </div>
      </div>
    </div>
  );
};

export default SaleLayout;
