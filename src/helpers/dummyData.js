import first from "src/assets/images/carousel1.webp";
import second from "src/assets/images/carousel2.webp";
import third from "src/assets/images/carousel1.webp";

import one from "src/assets/images/card1.webp";
import two from "src/assets/images/card2.webp";
import three from "src/assets/images/card3.webp";
import four from "src/assets/images/card4.webp";
import five from "src/assets/images/card5.webp";
import six from "src/assets/images/card6.jpg";
import seven from "src/assets/images/card7.jpg";
import eight from "src/assets/images/card8.webp";

export const homeSliderData = [
  {
    imageUrl: first,
    link: "https://www.example1.com",
    buttonText: "Learn More",
  },
  {
    imageUrl: second,
    link: "https://www.example2.com",
    buttonText: "View Details",
  },
  {
    imageUrl: third,
    link: "https://www.example3.com",
    buttonText: "Buy Now",
  },
  {
    imageUrl: first,
    link: "https://www.example3.com",
    buttonText: "Buy Now",
  },
  {
    imageUrl: second,
    link: "https://www.example3.com",
    buttonText: "Buy Now",
  },
];

export const middleBannerData = [
  {
    imageUrl: first,
    link: "https://www.example1.com",
    buttonText: "test",
  },
  {
    imageUrl: second,
    link: "https://www.example2.com",
    buttonText: "middle",
  },
  {
    imageUrl: third,
    link: "https://www.example3.com",
    buttonText: "new",
  },
  {
    imageUrl: first,
    link: "https://www.example3.com",
    buttonText: "middle",
  },
  {
    imageUrl: second,
    link: "https://www.example3.com",
    buttonText: "Buy Now",
  },
];


export const dummyData = [
  {
    image: one,
    type: "cream",
    name: "Light work rosehip toner",
    price: "$199.99",
    discount: "-15% Discount",
    tags: [
      { type: "discount", value: "30% OFF" },
      { type: "highlight", value: "Best Seller" },
    ],
    hoverImage: eight,
    multipleQuantity: true,
    quantityOptions: ["100ml", "200ml", "300ml"],
  },
  {
    image: two,
    type: "oil",
    name: "Nutrient face oil",
    price: "$299.99",
    discount: "-20% Discount",
    tags: [{ type: "highlight", value: "New Arrival" }],
    hoverImage: seven,
    multipleQuantity: false
  },
  {
    image: three,
    type: "cream",
    name: "Dream bio retinol",
    price: "$99.99",
    discount: "-10% Discount",
    hoverImage: six,
    multipleQuantity: false
  },
  {
    image: four,
    type: "oil",
    name: "Protective day oil",
    price: "$149.99",
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: five,
    multipleQuantity: true,
    quantityOptions: ["100ml", "200ml", "300ml"],
  },
  {
    image: five,
    type: "cream",
    name: "Rose quartz facial polish",
    price: "$149.99",
    discount: "-5% Discount",
    hoverImage: two,
    multipleQuantity: true,
    quantityOptions: ["100ml", "200ml", "300ml"],
  },
  {
    image: six,
    type: "Serum",
    name: "Hydrating serum",
    price: "$149.99",
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Limited Stock" }],
    hoverImage: one,
    multipleQuantity: false
  },
  {
    image: seven,
    type: "oil",
    name: "Nutrient face oil",
    price: "$149.99",
    discount: "-5% Discount",
    tags: [{ type: "discount", value: "-5%" }],
    hoverImage: third,
    multipleQuantity: false
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
    hoverImage: two,
    multipleQuantity: true,
    quantityOptions: ["100ml", "200ml", "300ml"],
  },
];