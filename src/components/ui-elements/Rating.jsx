import React, { useState, useEffect } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);

  // Generate a random rating out of 5
  useEffect(() => {
    const randomRating = Math.floor(Math.random() * 3) + 3; // Random number between 3 and 5
    setRating(randomRating);
  }, []);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < rating ? "★" : "☆");
  }

  return (
    <div className="flex flex-row items-center">
      <div className="">
        {stars.map((star, index) => (
          <span key={index} style={{ fontSize: "1.6rem", color: "#EBBF20" }}>
            {star}
          </span>
        ))}
      </div>
      <div className="ml-2 items-center font-outfitLight">({rating})</div>
    </div>
  );
};

export default Rating;
