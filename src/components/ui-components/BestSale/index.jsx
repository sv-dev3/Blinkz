import React from "react";
import Card from "src/components/ui-elements/Card";
import first from "src/assets/images/card1.webp";
import second from "src/assets/images/card2.webp";
import third from "src/assets/images/card3.webp";
import four from "src/assets/images/card4.webp";
import five from "src/assets/images/card5.webp";
import six from "src/assets/images/card6.jpg";
import seven from "src/assets/images/card7.jpg";
import eight from "src/assets/images/card8.webp";

const BestSale = () => {
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
    <div className="flex flex-row flex-wrap justify-between gap-x-2 gap-y-8 mt-6">
      {dummyData.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export default BestSale;
