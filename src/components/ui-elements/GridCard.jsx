import { useState } from "react";
import { Link } from "react-router-dom";

const GridCard = ({ data, height = "h-[300px]" }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className=" w-full pb-4 bg-gray-100 rounded-xl relative overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Tags */}
      <div className="absolute top-[15px] left-[15px] space-x-2 flex flex-wrap gap-2 z-[100]">
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

      {/* Image */}
      <div className={`${height} relative overflow-hidden`}>
        <Link to={`/product/${data?.id}`}>
          <img
            src={hover ? data?.image : data?.hoverImage}
            alt="Product"
            className="h-full w-full object-cover rounded-md cursor-pointer transform hover:scale-110 hover:rotate-1"
            style={{
              willChange: "transform",
              transition: "transform 0.8s ease-in-out", // Change '1s' to your desired duration
            }}
          />
        </Link>
      </div>

      <div className="p-4 ">
        {/* Discount */}
        <div className="mb-1 text-[12px] uppercase text-left text-sm font-outfitMedium text-black">
          {data?.type}
        </div>
        {/* Name */}
        <div className="mb-2 text-[20px] font-outfitSemiBold cursor-pointer text-black leading-[normal]">
          <Link to={`/product/${data?.id}`}>{data?.name}</Link>
        </div>
        <div className="  font-outfitSemiBold text-gray-900 flex space-x-3 items-center">
          <span className="text-gray-900 font-outfitBold text-[16px]">
            {`$${data?.price}`}
          </span>
          <span className="text-gray-500 font-outfitRegular text-[13px] line-through">
            {`$${data?.price}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
