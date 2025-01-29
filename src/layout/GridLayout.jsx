import React from "react";
import { Link } from "react-router-dom";
import MegaMenuSlider from "src/components/ui-elements/MegaMenuSlider";
import { dummyData } from "src/helpers/dummyData";

const GridLayout = ({ data }) => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row pt-6 pb-4">
      <div className="grid md:grid-cols-3 gap-6 w-full md:w-[55%]">
        {Object.keys(data)
          .filter((key) => key.startsWith("row"))
          .map((rowKey, index) => (
            <div key={index} className="">
              <div
                className={`space-y-2  ${index !== 0 ? "border-l pl-4" : ""}`}
              >
                {data[rowKey].map((item, subIndex) => (
                  <div key={subIndex} className="bg-white">
                    {item.heading && (
                      <h4 className="font-outfitMedium text-[22px]">
                        {" "}
                        <Link
                          to={item?.link}
                          className="over:underline hover:text-purple-600"
                        >
                          {item.heading}
                        </Link>
                      </h4>
                    )}
                    {item?.name && (
                      <Link
                        to={item.link}
                        className="text-black hover:underline hover:text-purple-600 text-[14px] font-normal font-outfitRegular"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className=" w-full md:w-[45%]">
        <MegaMenuSlider sliderImages={dummyData} sliderPerView={3} />
      </div>
    </div>
  );
};

export default GridLayout;
