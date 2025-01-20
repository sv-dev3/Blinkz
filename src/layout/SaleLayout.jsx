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
        <header className="bg-white p-0 flex gap-x-0 md:gap-x-3 items-center">
          <button
            onClick={() => handleButtonClick(1)}
            className={`${
              selectedPage === 1
                ? "text-[16px] text-purple-900 font-outfitMedium border-purple-500"
                : " text-gray-400 text-[16px] font-outfitMedium  border-white "
            } bg-white py-2 px-4 transition duration-300 hover:text-purple-900 uppercase border  rounded-full hover:border-purple-500`}
          >
            Best Sale
          </button>
          <button
            onClick={() => handleButtonClick(2)}
            className={`${
              selectedPage === 2
                ? "text-[16px] text-purple-900 font-outfitMedium border-purple-500"
                : " text-gray-400 text-[16px] font-outfitMedium border-white"
            } bg-white py-2 px-4 transition duration-300 hover:text-purple-900 uppercase border  rounded-full hover:border-purple-500`}
          >
            Hot Sale
          </button>
          <button
            onClick={() => handleButtonClick(3)}
            className={`${
              selectedPage === 3
                ? "text-[16px] text-purple-900 font-outfitMedium border-purple-500"
                : "text-gray-400 text-[16px] font-outfitMedium border-white"
            } bg-white py-2 px-4 transition duration-300 hover:text-purple-900 uppercase border  rounded-full hover:border-purple-500`}
          >
            New Sale
          </button>
          <Link
            to="/About"
            className="text-[16px] block px-4 py-2 border border-purple-500 rounded text-purple-900 hover:text-white bg-white hover:bg-purple-600 font-outfitRegular ml-auto"
          >
            {" "}
            View all
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </Link>
        </header>

        <div className="p-0">
          {selectedPage === 1 && <BestSale />}
          {selectedPage === 2 && <HotSale />}
          {selectedPage === 3 && <NewSale />}
        </div>
      </div>
    </div>
  );
};

export default SaleLayout;
