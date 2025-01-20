import React from "react";

const CardLayout = ({ data }) => {
  return (
    <div className="grid grid-cols-3 w-[1000px] mx-auto justify-start py-[30px] gap-4 flex-wrap ">
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="relative isolate overflow-hidden rounded-2xl"
          >
            <img
              src={item.img}
              alt={item.heading}
              className="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black-900/10"></div>
            <div className="absolute bottom-[20px] left-[20px]">
              <h3 class="z-10 mt-3 text-[20px] font-bold text-white capitalize">
                {item.heading}
              </h3>
              <div class="z-10 gap-y-1 text-white overflow-hidden text-[16px] leading-6 text-gray-300 capitalize">
                {item.subheading}
              </div>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-sm font-medium text-white px-4 py-2 rounded-full">
                Learn More
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardLayout;
