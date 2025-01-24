import React from "react";

const SearchProductCard = ({ image, name, price }) => {
  return (
    <div className="flex items-center p-4 border-b">
      {/* Left Image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded mr-4 hover:cursor-pointer"
      />

      {/* Right Content */}
      <div className="flex flex-col">
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        <p className="text-md font-semibold text-purple-600">{price}</p>
      </div>
    </div>
  );
};

export default SearchProductCard;
