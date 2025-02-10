import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PriceRangeSlider from "./RangeFilter";

const StockAndPriceFilter = () => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [inStock, setInStock] = useState(
    searchParams.get("inStock") === "true"
  );
  const [outOfStock, setOutOfStock] = useState(
    searchParams.get("outOfStock") === "true"
  );
  const [isStockOpen, setIsStockOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isProductTypeOpen, setIsProductTypeOpen] = useState(true); // For product type accordion

  const [selectedSizes, setSelectedSizes] = useState([]); // To hold selected sizes
  const [selectedProductTypes, setSelectedProductTypes] = useState([]); // To hold selected product types

  useEffect(() => {
    // Set selected sizes from searchParams
    const sizesFromParams = searchParams.getAll("size");
    setSelectedSizes(sizesFromParams);

    const inStockParam = searchParams.get("inStock");
    setInStock(inStockParam === "true");

    const outOfStockParam = searchParams.get("outOfStock");
    setOutOfStock(outOfStockParam === "true");

    // Set selected product types from searchParams
    const productTypesFromParams = searchParams.getAll("productType");
    setSelectedProductTypes(productTypesFromParams);
  }, [searchParams]); // Run whenever searchParams change

  const handleInStockChange = (e) => {
    setInStock(e.target.checked);
    if (e.target.checked === false) {
      searchParams.delete("inStock");
    } else {
      searchParams.set("inStock", e.target.checked);
    }
    const path = searchParams.toString()
      ? window.location.pathname + "?" + searchParams.toString()
      : window.location.pathname;
    navigate(path);
  };

  const handleOutOfStockChange = (e) => {
    setOutOfStock(e.target.checked);
    if (e.target.checked === false) {
      searchParams.delete("outOfStock");
    } else {
      searchParams.set("outOfStock", e.target.checked);
    }
    const path = searchParams.toString()
      ? window.location.pathname + "?" + searchParams.toString()
      : window.location.pathname;
    navigate(path);
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    const isChecked = e.target.checked;

    let updatedSizes = [...selectedSizes];
    if (isChecked) {
      updatedSizes.push(size);
    } else {
      updatedSizes = updatedSizes.filter((s) => s !== size);
    }

    setSelectedSizes(updatedSizes);
    searchParams.delete("size");
    updatedSizes.forEach((s) => searchParams.append("size", s));
    const path = searchParams.toString()
      ? window.location.pathname + "?" + searchParams.toString()
      : window.location.pathname;
    navigate(path);
  };

  const handleProductTypeChange = (e) => {
    const productType = e.target.value;
    const isChecked = e.target.checked;

    let updatedProductTypes = [...selectedProductTypes];
    if (isChecked) {
      updatedProductTypes.push(productType);
    } else {
      updatedProductTypes = updatedProductTypes.filter(
        (pt) => pt !== productType
      );
    }

    setSelectedProductTypes(updatedProductTypes);
    searchParams.delete("productType");
    updatedProductTypes.forEach((pt) => searchParams.append("productType", pt));
    const path = searchParams.toString()
      ? window.location.pathname + "?" + searchParams.toString()
      : window.location.pathname;
    navigate(path);
  };

  return (
    <div className="pt-4 pr-4">
      {/* {/ Stock Filter Section /} */}
      <div className="border-b border-gray-300 pb-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsStockOpen(!isStockOpen)}
        >
          <h2 className="text-xl font-outfitMedium text-gray-800">
            Availability
          </h2>
          <div className="relative w-5 h-5 flex items-center justify-center">
            <div
              className={`absolute w-5 h-[2px] bg-gray-800 transition-transform duration-300 ease-in-out ${
                isStockOpen ? "rotate-0" : "rotate-[270deg]"
              }`}
            />
            <div
              className={`absolute h-[2px] w-5 bg-gray-800 transition-opacity duration-300 ease-in-out ${
                isStockOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
        {isStockOpen && (
          <div className="mt-4">
            <div className="mb-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={inStock}
                  onChange={handleInStockChange}
                  className="form-checkbox  checked:bg-black  h-5 w-5 text-black rounded focus:ring-black"
                />
                <span className="text-gray-800 font-outfitRegular text-md">
                  In Stock
                </span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={outOfStock}
                  onChange={handleOutOfStockChange}
                  className="form-checkbox h-5 w-5 text-black border-gray-300 rounded focus:ring-black"
                />
                <span className="text-gray-800 font-outfitRegular text-md">
                  Out of Stock
                </span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* {/ Price Filter Section /} */}
      <div className="border-b  border-gray-300 pb-4">
        <div
          className="flex items-center justify-between cursor-pointer mt-6"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          <h2 className="text-xl font-outfitMedium text-gray-800">Price</h2>
          <div className="relative w-5 h-5 flex items-center justify-center">
            <div
              className={`absolute w-5 h-[2px] bg-gray-800 transition-transform duration-300 ease-in-out ${
                isPriceOpen ? "rotate-0" : "rotate-[270deg]"
              }`}
            />
            <div
              className={`absolute h-[2px] w-5 bg-gray-800 transition-opacity duration-300 ease-in-out ${
                isPriceOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
        {isPriceOpen && (
          <div className="mt-4 flex flex-col space-y-4">
            <PriceRangeSlider/>
          </div>
        )}
      </div>

      {/* {/ Size Filter Section /} */}
      <div className="border-b border-gray-300 pb-4 mt-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsSizeOpen(!isSizeOpen)}
        >
          <h2 className="text-xl font-outfitMedium text-gray-800">Size</h2>
          <div className="relative w-5 h-5 flex items-center justify-center">
            <div
              className={`absolute w-5 h-[2px] bg-gray-800 transition-transform duration-300 ease-in-out ${
                isSizeOpen ? "rotate-0" : "rotate-[270deg]"
              }`}
            />
            <div
              className={`absolute h-[2px] w-5 bg-gray-800 transition-opacity duration-300 ease-in-out ${
                isSizeOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
        {isSizeOpen && (
          <div className="mt-4 space-y-2">
            {["50ml", "100ml", "150ml", "200ml", "250ml"].map((size) => (
              <label
                key={size}
                className="flex items-center space-x-2 font-outfitRegular text-[14px]"
              >
                <input
                  type="checkbox"
                  value={size}
                  checked={selectedSizes.includes(size)}
                  onChange={handleSizeChange}
                  className="form-checkbox h-5 w-5 text-black border-gray-300 rounded focus:ring-black"
                />
                <span>{size}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* {/ Product Type Filter Section /} */}
      <div className="border-b border-gray-300 pb-4 mt-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsProductTypeOpen(!isProductTypeOpen)}
        >
          <h2 className="text-xl font-outfitSemiBold text-gray-800">
            Product Type
          </h2>
          <div className="relative w-5 h-5 flex items-center justify-center">
            <div
              className={`absolute w-5 h-[2px] bg-gray-800 transition-transform duration-300 ease-in-out ${
                isProductTypeOpen ? "rotate-0" : "rotate-[270deg]"
              }`}
            />
            <div
              className={`absolute h-[2px] w-5 bg-gray-800 transition-opacity duration-300 ease-in-out ${
                isProductTypeOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
        {isProductTypeOpen && (
          <div className="mt-4 space-y-2">
            {["Oil", "Serum", "Tools", "Skincare"].map((productType) => (
              <label
                key={productType}
                className="flex items-center space-x-2 font-outfitRegular text-[14px]"
              >
                <input
                  type="checkbox"
                  value={productType}
                  checked={selectedProductTypes.includes(productType)}
                  onChange={handleProductTypeChange}
                  className="form-checkbox h-5 w-5 text-black border-gray-300 rounded focus:ring-black"
                />
                <span>{productType}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* {/ Apply Icon  /} */}
    </div>
  );
};

export default StockAndPriceFilter;
