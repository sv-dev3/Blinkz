import { Search } from "lucide-react";
import { useState } from "react";

const Card = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="max-w-full md:max-w-[360px] w-full md:w-3/4 pb-4 bg-gray-100 rounded-xl cursor-pointer shadow-sm relative overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Tags */}
      <div className="absolute top-2 left-2 space-x-2 flex flex-wrap gap-2">
        {data?.tags &&
          data?.tags.map((tag, index) => {
            const bgColor =
              tag.type === "discount"
                ? "bg-red-600"
                : tag.type === "highlight"
                ? "bg-green-600"
                : "bg-gray-800";

            return (
              <span
                key={index}
                className={`text-sm font-outfitRegular ${bgColor} text-white px-2 py-1 rounded-full`}
              >
                {tag.value}
              </span>
            );
          })}
      </div>

      {/* Search Button */}
      <div
        className={`absolute top-2 right-2 transition-all duration-1000 z-30 transform ${
          hover ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <button className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-1000">
          <Search />
        </button>
      </div>

      {/* Image */}
      <div>
        <img
          src={hover ? data?.image : data?.hoverImage}
          alt="Product"
          // className="w-full h-64 object-cover rounded-md cursor-pointer transition-transform duration-600 ease-in-out transform hover:scale-110 hover:rotate-1"
          className="w-full h-64 object-cover rounded-md cursor-pointer transform hover:scale-110 hover:rotate-1"
          style={{
            willChange: "transform",
            transition: "transform 0.8s ease-in-out", // Change '1s' to your desired duration
          }}
        />
        <div className="relative w-full">
          <div
            className={`absolute h-16 inset-x-0 bottom-0 flex items-center justify-center bg-transparent bg-opacity-5 transition-all transform ${
              hover ? "translate-y-0 opacity-80" : "translate-y-full opacity-0"
            }`}
            style={{
              transition: "transform 0.6s ease-in-out, opacity 1s ease-in-out",
            }}
          >
            <button
              className="text-lg font-outfitBold bg-black w-full mx-8 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-200 hover:text-black transition"
              style={{
                transition:
                  "background-color 1s ease-in-out, color 1s ease-in-out",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Discount */}
        <div className="m-2 text-left text-sm font-outfitLight text-gray-500">
          {data?.type}
        </div>
        {/* Name */}
        <div className="m-2 text-lg font-outfitSemiBold line-clamp-1 text-gray-900">
          {data?.name}
        </div>
        <div className="m-2 text-lg font-outfitSemiBold line-clamp-1 text-gray-900 flex space-x-3 items-center">
          <span className="text-gray-900 font-outfitBold text-2xl">$29.00</span>
          <span className="text-gray-500 font-outfitRegular text-lg line-through">
            $39.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
