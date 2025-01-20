import React from "react";

const CardLayout = ({ data }) => {
  return (
    <div className="flex container mx-auto w-screen justify-between p-4">
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-row h-96 rounded-2xl overflow-hidden cursor-pointer shadow-md"
          >
            {/* Background Image */}
            <img
              src={item.img}
              alt={item.heading}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between text-white p-4">
              {/* Heading */}
              <h1 className="text-xl font-bold">{item.heading}</h1>

              {/* Subheading */}
              <h2 className="text-lg font-semibold">{item.subheading}</h2>

              {/* Button */}
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-sm font-medium px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardLayout;
