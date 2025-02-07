import React, { useState, useEffect } from "react";
import { Range } from "react-range";
import { useSearchParams, useNavigate } from "react-router-dom";

const PriceRangeSlider = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [priceRange, setPriceRange] = useState([0, 400]);
  const [tempMinPrice, setTempMinPrice] = useState(0);
  const [tempMaxPrice, setTempMaxPrice] = useState(400);

  useEffect(() => {
    let min = Number(searchParams.get("minPrice")) || 0;
    let max = Number(searchParams.get("maxPrice")) || 400;

    if (isNaN(min)) min = 0;
    if (isNaN(max)) max = 400;

    if (min > max) {
      min = 0;
      max = 400;
      searchParams.set("maxPrice", max);
      searchParams.set("minPrice", min);
      setSearchParams(searchParams);
      navigate(`?${searchParams.toString()}`);
    }
    if (min < 0) {
      min = 0;
      searchParams.set("minPrice", min);
      setSearchParams(searchParams);
      navigate(`?${searchParams.toString()}`);
    }
    if (max > 400) {
      max = 400;
      searchParams.set("maxPrice", max);
      setSearchParams(searchParams);
      navigate(`?${searchParams.toString()}`);
    }
    setPriceRange([min, max]);
    setTempMinPrice(min);
    setTempMaxPrice(max);
  }, [searchParams, setSearchParams, navigate]);


  const handlePriceRangeChange = () => {
    let newMin = Math.max(0, Math.min(tempMinPrice, tempMaxPrice));
    let newMax = Math.min(400, Math.max(tempMaxPrice, tempMinPrice));

    setPriceRange([newMin, newMax]);
    setTempMinPrice(newMin);
    setTempMaxPrice(newMax);

    searchParams.set("minPrice", newMin);
    searchParams.set("maxPrice", newMax);
    setSearchParams(searchParams);
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div className="w-full">
      <Range
        step={10}
        min={0}
        max={400}
        values={priceRange}
        onChange={(values) => {
          setPriceRange(values);
          setTempMinPrice(values[0]);
          setTempMaxPrice(values[1]);
        }}
        onFinalChange={(values) => {
          searchParams.set("minPrice", values[0]);
          searchParams.set("maxPrice", values[1]);
          setSearchParams(searchParams);
          navigate(`?${searchParams.toString()}`);
        }}
        renderTrack={({ props, children }) => {
          const [minVal, maxVal] = priceRange;
          const left = (minVal / 400) * 100;
          const right = ((400 - maxVal) / 400) * 100;

          return (
            <div
              {...props}
              style={{
                height: "6px",
                width: "100%",
                background: `linear-gradient(to right, 
                  grey ${left}%, 
                  black ${left}%, 
                  black ${100 - right}%, 
                  grey ${100 - right}%)`,
                borderRadius: "4px",
                position: "relative",
                ...props.style,
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              height: "16px",
              width: "16px",
              background: "black",
              borderRadius: "50%",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
              ...props.style,
            }}
          />
        )}
      />
      <div className="flex items-center gap-2 my-4 mt-8">
        <div className="flex flex-row justify-between gap-2 w-full">
          <div className="relative mb-4">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              $
            </span>
            <input
              type="number"
              value={tempMinPrice}
              onChange={(e) => setTempMinPrice(Number(e.target.value))}
              onBlur={handlePriceRangeChange}
              className="w-full max-w-48 pl-6 pr-3 p-2 bg-[#F5F5F5] border rounded-full focus:outline-none focus:ring-2 focus:ring-black text-right"
            />
          </div>

          <div className="flex items-center mb-4">
            <span className="font-semibold">To</span>
          </div>
          <div className="relative mb-4">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              $
            </span>
            <input
              type="number"
              value={tempMaxPrice}
              onChange={(e) => setTempMaxPrice(Number(e.target.value))}
              onBlur={handlePriceRangeChange}
              className="w-full max-w-48 pl-6 pr-3 p-2 bg-[#F5F5F5] border rounded-full focus:outline-none focus:ring-2 focus:ring-black text-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;