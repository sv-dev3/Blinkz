import React from "react";
import firstImage from "src/assets/images/carousel1.webp";
import secondImage from "src/assets/images/card4.webp";
import thirdImage from "src/assets/images/carousel2.webp";

const BentoGrid = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center font-outfitSemiBold">
          {/* First row */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-lg md:text-5xl font-semibold">
              Make you look
            </span>
            <div className="w-30 md:w-40 h-20 rounded-full overflow-hidden">
              <img
                src={firstImage} // Replace with your image URL
                alt="Happy person"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110 hover:rotate-1 cursor-pointer"
              />
            </div>
            <span className="text-lg md:text-5xl font-semibold">and</span>
          </div>

          {/* Second row */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-lg md:text-5xl font-semibold">
              feel glowy
            </span>
            <div className="w-30 md:w-40 h-20 rounded-full overflow-hidden">
              <img
                src={secondImage} // Replace with your image URL
                alt="Glow product"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110 hover:rotate-1 cursor-pointer"
              />
            </div>
            <span className="text-lg md:text-5xl font-semibold">
              and healthy
            </span>
            <div className="w-30 md:w-40 h-20 rounded-full overflow-hidden cursor-pointer">
              <img
                src={thirdImage} // Replace with your image URL
                alt="Healthy skin"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110 hover:rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
