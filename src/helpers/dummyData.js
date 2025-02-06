import first from "src/assets/images/carousel1.webp";
import second from "src/assets/images/carousel2.webp";
import third from "src/assets/images/carousel1.webp";

import one from "src/assets/images/card5.webp";
import two from "src/assets/images/card8.webp";
import three from "src/assets/images/card5.webp";
import four from "src/assets/images/card8.webp";
import five from "src/assets/images/card5.webp";
import six from "src/assets/images/card5.webp";
import seven from "src/assets/images/card8.webp";
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
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: one,
      },
      {
        imageUrl: eight,
      },
    ],
    isFeatured: true,
    isBestSeller: true,
    category: 'Skincare',
    createdAt: "2024-01-15T10:30:00Z",
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
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: false, // Added inStock property
    outOfStock: true, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: two,
      },
      {
        imageUrl: seven,
      },
      {
        imageUrl: two,
      },
      {
        imageUrl: two,
      },
    ],
    isFeatured: true,
    category: 'Skincare',
    createdAt: "2024-02-04T10:30:00Z",
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
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: three,
      },
      {
        imageUrl: six,
      },
    ],
    isBestSeller: true,
    category: 'Skincare',
    createdAt: "2023-12-17T10:30:00Z",
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
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: four,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Treatments',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 5,
    image: four,
    type: "Oil",
    name: "Protective day oil",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: five,
    multipleQuantity: true,
    quantityOptions: ["100ml", "150ml"],
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: four,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Treatments',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 6,
    image: four,
    type: "Oil",
    name: "Protective day oil",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: five,
    multipleQuantity: true,
    quantityOptions: ["100ml", "150ml"],
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: four,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Treatments',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 7,
    image: four,
    type: "Oil",
    name: "Protective day oil",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: five,
    multipleQuantity: true,
    quantityOptions: ["100ml", "150ml"],
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: four,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Treatments',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 8,
    image: four,
    type: "Oil",
    name: "Protective day oil",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: five,
    multipleQuantity: true,
    quantityOptions: ["100ml", "150ml"],
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: four,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Treatments',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 9,
    image: four,
    type: "Oil",
    name: "Protective day oil",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: five,
    multipleQuantity: true,
    quantityOptions: ["100ml", "150ml"],
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: four,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Treatments',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 10,
    image: four,
    type: "Oil",
    name: "Protective day oil",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: five,
    multipleQuantity: true,
    quantityOptions: ["100ml", "150ml"],
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: four,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Treatments',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 11,
    image: four,
    type: "Oil",
    name: "Protective day oil",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: five,
    multipleQuantity: true,
    quantityOptions: ["100ml", "150ml"],
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: four,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Treatments',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 12,
    image: five,
    type: "Cream",
    name: "Rose quartz facial polish",
    price: 29.99,
    discount: "-5% Discount",
    hoverImage: two,
    multipleQuantity: true,
    quantityOptions: ["100ml", "200ml", "300ml"],
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: five,
      },
      {
        imageUrl: two,
      },
    ],
    isFeatured: true,
    isBestSeller: true,
    category: 'Treatments',
    createdAt: "2024-01-20T10:30:00Z",
  },
  {
    id: 13,
    image: six,
    type: "Serum",
    name: "Hydrating serum",
    price: 149.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Limited Stock" }],
    hoverImage: one,
    multipleQuantity: false,
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: six,
      },
      {
        imageUrl: one,
      },
    ],
    isFeatured: true,
    isBestSeller: true,
    category: "Cleansers",
    createdAt: "2022-01-30T10:30:00Z",
  },
  {
    id: 14,
    image: seven,
    type: "Skincare",
    name: "Skincare Cream",
    price: 149.99,
    discount: "-5% Discount",
    tags: [{ type: "discount", value: "-5%" }],
    hoverImage: one,
    multipleQuantity: false,
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: false, // Added inStock property
    outOfStock: true, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: seven,
      },
      {
        imageUrl: third,
      },
    ],
    isFeatured: true,
    isBestSeller: true,
    category: 'Treatments',
    createdAt: "2020-04-15T10:30:00Z",
  },
  {
    id: 15,
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
    description:
      "Whether organic, natural, or allergy-conscious, every serum, moisturizer, or treatment is clinically effective for every kind of clean beauty routine.",
    inStock: false, // Added inStock property
    outOfStock: true, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: eight,
      },
      {
        imageUrl: two,
      },
    ],
    category: 'Eye Care',
    createdAt: "2024-02-06T10:30:00Z",
  },
];

export const allCategories = [
  { name: "Skincare", link: "/category/skincare", img: second },
  { name: "Cleansers", link: "/category/cleansers", img: third },
  { name: "Treatments", link: "/category/treatments", img: second },
  { name: "Eye Care", link: "/category/eye-care", img: third },
  { name: "Moisturizers", link: "/category/moisturizers", img: five },
  { name: "Accessories", link: "/category/accessories", img: six },
  { name: "Makeup", link: "/category/makeup", img: seven },
  { name: "Face", link: "/category/face", img: eight },
  { name: "Cheek", link: "/category/cheek", img: one },
  { name: "Lip", link: "/category/lip", img: two },
  { name: "Eye", link: "/category/eye", img: three },
  { name: "Makeup Remover", link: "/category/makeup-remover", img: four },
  { name: "Accessories", link: "/category/accessories", img: five },
  { name: "Best Sellers", link: "/category/best-sellers", img: six },
  { name: "New Arrivals", link: "/category/new-arrivals", img: seven },
  { name: "Bundles", link: "/category/bundles", img: one },
  { name: "Trending", link: "/category/trending", img: two },
]
