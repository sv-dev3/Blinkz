import React from "react";
import { Link } from "react-router-dom";
import MegaMenuSlider from "src/components/ui-elements/MegaMenuSlider";
import first from "src/assets/images/card1.webp";
import second from "src/assets/images/card2.webp";
import third from "src/assets/images/card3.webp";
import four from "src/assets/images/card4.webp";
import five from "src/assets/images/card2.webp";
import six from "src/assets/images/card6.jpg";
import seven from "src/assets/images/card7.jpg";
import eight from "src/assets/images/card1.webp";

const GridLayout = ({ data }) => {
  const dummyData = [
    {
      image: first,
      type: "cream",
      name: "Light work rosehip toner",
      price: "$199.99",
      discount: "-15% Discount",
      tags: [
        { type: "discount", value: "30% OFF" },
        { type: "highlight", value: "Best Seller" },
      ],
      hoverImage: eight,
    },
    {
      image: second,
      type: "oil",
      name: "Nutrient face oil",
      price: "$299.99",
      discount: "-20% Discount",
      tags: [{ type: "highlight", value: "New Arrival" }],
      hoverImage: seven,
    },
    {
      image: third,
      type: "oil",
      name: "Nutrient face oil",
      price: "$99.99",
      discount: "-10% Discount",
      hoverImage: six,
    },
    {
      image: four,
      type: "oil",
      name: "Nutrient face oil",
      price: "$149.99",
      discount: "-5% Discount",
      tags: [{ type: "highlight", value: "Exclusive" }],
      hoverImage: five,
    },
    {
      image: five,
      type: "oil",
      name: "Nutrient face oil",
      price: "$149.99",
      discount: "-5% Discount",
      hoverImage: second,
    },
    {
      image: six,
      type: "oil",
      name: "Nutrient face oil",
      price: "$149.99",
      discount: "-5% Discount",
      tags: [{ type: "highlight", value: "Limited Stock" }],
      hoverImage: first,
    },
    {
      image: seven,
      type: "oil",
      name: "Nutrient face oil",
      price: "$149.99",
      discount: "-5% Discount",
      tags: [{ type: "discount", value: "-5%" }],
      hoverImage: third,
    },
    {
      image: eight,
      type: "oil",
      name: "Nutrient face oil",
      price: "$149.99",
      discount: "-8% Discount",
      tags: [
        { type: "highlight", value: "Exclusive" },
        { type: "discount", value: "-8%" },
      ],
      hoverImage: second,
    },
  ];
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
