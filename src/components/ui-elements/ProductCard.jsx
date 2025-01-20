import React, { useState } from "react";

const ProductCard = ({ data }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative group cursor-pointer w-64 h-80 overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={hover ? data.hoverImage : data.image}
        alt={data.name}
        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
      />

      {/ Overlay with options /}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 ${
          hover ? "opacity-100" : ""
        }`}
      >
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md shadow hover:bg-purple-700 transition">
          Add to Cart
        </button>
        <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-200 transition">
          View Details
        </button>
      </div>

      {/ Product Info /}
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center">
        <h3 className="text-lg font-semibold">{data.name}</h3>
        <p className="text-gray-500">{data.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
