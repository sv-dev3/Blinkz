import React from "react";

const SearchProductCard = ({ image, name, price }) => {
  return (
    <div className="flex items-center p-4 ">
      {/* Left Image */}
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded mr-4 hover:cursor-pointer"
      />

      {/* Right Content */}
      <div className="grid gap-1">
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        <p className="text-xl font-semibold text-gray-800">{price}</p>
      </div>
    </div>
  );
};

export default SearchProductCard;
