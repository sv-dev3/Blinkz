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
    id: 1,
    image: one,
    type: "Skincare",
    name: "Light work rosehip toner",
    price: 10,
    discount: "-15% Discount",
    tags: [
      { type: "discount", value: "30% OFF" },
      { type: "highlight", value: "Best Seller" },
    ],
    hoverImage: eight,
    multipleQuantity: true,
    quantityOptions: ["100ml", "250ml"],
    description: "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
  },
  {
    id: 2,
    image: two,
    type: "oil",
    name: "Nutrient face oil",
    price: 89.99,
    discount: "-20% Discount",
    tags: [{ type: "highlight", value: "New Arrival" }],
    hoverImage: seven,
    multipleQuantity: false,
    description: "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: false, // Added inStock property
    outOfStock: true, // Added outOfStock property
  },
  {
    id: 3,
    image: three,
    type: "Cream",
    name: "Dream bio retinol",
    price: 99.99,
    discount: "-10% Discount",
    hoverImage: six,
    multipleQuantity: true,
    quantityOptions: ["50ml", "100ml"],
    description: "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
  },
  {
    id: 4,
    image: four,
    type: "Oil",
    name: "Protective day oil",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: five,
    multipleQuantity: true,
    quantityOptions: ["100ml", "150ml"],
    description: "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
  },
  {
    id: 5,
    image: five,
    type: "Cream",
    name: "Rose quartz facial polish",
    price: 29.99,
    discount: "-5% Discount",
    hoverImage: two,
    multipleQuantity: true,
    quantityOptions: ["100ml", "200ml", "300ml"],
    description: "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
  },
  {
    id: 6,
    image: six,
    type: "Serum",
    name: "Hydrating serum",
    price: 149.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Limited Stock" }],
    hoverImage: one,
    multipleQuantity: false,
    description: "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
  },
  {
    id: 7,
    image: seven,
    type: "Skincare",
    name: "Skincare Cream",
    price: 149.99,
    discount: "-5% Discount",
    tags: [{ type: "discount", value: "-5%" }],
    hoverImage: third,
    multipleQuantity: false,
    description: "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: false, // Added inStock property
    outOfStock: true, // Added outOfStock property
  },
  {
    id: 8,
    image: eight,
    type: "Oil",
    name: "Moisture oil",
    price: 149.99,
    discount: "-8% Discount",
    tags: [
      { type: "highlight", value: "Exclusive" },
      { type: "discount", value: "-8%" },
    ],
    hoverImage: two,
    multipleQuantity: true,
    quantityOptions: ["50ml", "100ml", "200ml"],
    description: "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: false, // Added inStock property
    outOfStock: true, // Added outOfStock property
  },
];