import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {
  return (
    <Link to={item?.link}>
      <div className="relative isolate overflow-hidden rounded-2xl h-[80px] md:h-[120px] hover:cursor-pointer group">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center px-3 py-2 rounded-md">
          <h4 className="text-white text-[22px] md:text-[28px] capitalize font-outfitMedium">
            {item.name}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
