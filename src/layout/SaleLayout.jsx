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
    <div className="py-16 md:py-24">
    <div className="container mx-auto">
      <header className="bg-white p-0 md:p-4 flex gap-x-0 md:gap-x-6 items-center">
        <button
          onClick={() => handleButtonClick(1)}
          className={`${
            selectedPage === 1
              ? "text-base md:text-3xl text-black font-outfitMedium"
              : " text-gray-400 text-base md:text-3xl font-outfitMedium"
          } bg-white py-2 pr-4 transition duration-300 hover:text-black`}
        >
          Best Sale
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={`${
            selectedPage === 2
              ? "font-outfitMedium text-base md:text-3xl text-black"
              : " text-gray-400 text-base md:text-3xl font-outfitMedium"
          } bg-white py-2 pr-4 transition duration-300 hover:text-black`}
        >
          Hot Sale
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={`${
            selectedPage === 3
              ? "font-outfitMedium text-base md:text-3xl text-black"
              : "font-outfitMedium text-gray-400 text-base md:text-3xl"
          } bg-white py-2 pr-4 transition duration-300 hover:text-black`}
        >
          New Sale
        </button>
        <Link
            to="/About"
            className="text-base md:text-xl block px-4 py-2 hover:text-purple-600 font-outfitRegular ml-auto"
            > View all
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
        </Link>
      </header>

      <div className="p-0 md:p-4">
        {selectedPage === 1 && <BestSale />}
        {selectedPage === 2 && <HotSale />}
        {selectedPage === 3 && <NewSale />}
      </div>
    </div>
    </div>
  );
};

export default SaleLayout;
