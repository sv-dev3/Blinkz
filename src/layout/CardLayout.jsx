import React from "react";

const CardLayout = ({ data }) => {
  return (
    <div className="grid md:grid-cols-3 container mx-auto justify-start py-[30px] gap-4 flex-wrap ">
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="relative isolate overflow-hidden rounded-2xl h-[180px] md:h-[240px]"
          >
            <img
              src={item.img}
              alt={item.heading}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center flex-wrap">
              <div className="p-4">
                <h6 class="z-10 mt-3 text-[14px] md:text-[16px] text-black capitalize font-outfitMedium tracking-[2px] mb-0 md:mb-2">
                  {item.heading}
                </h6>
                <h4 class="z-10 gap-y-1 text-black overflow-hidden text-[22px] md:text-[32px] leading-[normal] capitalize font-outfitMedium w-[115px] md:w-[180px] mb-0 md:mb-2">
                  {item.subheading}
                </h4>
                <button className="inline-block px-3 py-1 md:px-5 md:py-2 bg-black hover:bg-white border border-[#000] text-white hover:text-black transition rounded-full mt-3 text-[12px] md:text-[14px] font-outfitSemiBold uppercase">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardLayout;
