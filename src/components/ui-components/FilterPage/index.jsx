import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [minPrice, setMinPrice] = useState(
    parseInt(searchParams.get("minPrice")) || 0
  );
  const [maxPrice, setMaxPrice] = useState(
    parseInt(searchParams.get("maxPrice")) || 400
  );
  const [tempMinPrice, setTempMinPrice] = useState(minPrice);
  const [tempMaxPrice, setTempMaxPrice] = useState(maxPrice);

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

    const minPriceParam = parseInt(searchParams.get("minPrice")) || 0;
    setMinPrice(minPriceParam);

    const maxPriceParam = parseInt(searchParams.get("maxPrice")) || 400;
    setMaxPrice(maxPriceParam);

    if (minPriceParam === 0 && maxPriceParam === 400) {
      setTempMinPrice(0);
      setTempMaxPrice(400);
    }

    // minPrice=205&maxPrice=400

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

  const handlePriceRangeChange = () => {
    if (tempMinPrice <= tempMaxPrice) {
      setMinPrice(tempMinPrice);
      setMaxPrice(tempMaxPrice);
      searchParams.set("minPrice", tempMinPrice);
      searchParams.set("maxPrice", tempMaxPrice);
      const path = window.location.pathname + "?" + searchParams.toString();
      navigate(path);
    } else {
      alert("Min price should be less than or equal to Max price");
      const max = parseInt(searchParams.get("maxPrice")) || 400;
      setTempMaxPrice(max);
      const min = parseInt(searchParams.get("minPrice")) || 0;
      setTempMinPrice(min);
    }
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
    <div className="p-4">
      {/* Stock Filter Section */}
      <div className="border-b pb-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsStockOpen(!isStockOpen)}
        >
          <h2 className="text-lg font-semibold">Accessibility</h2>
          {isStockOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        {isStockOpen && (
          <div className="mt-4">
            <div className="mb-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={inStock}
                  onChange={handleInStockChange}
                  className="form-checkbox bg-black h-5 w-5 text-black rounded focus:ring-black"
                />
                <span className="text-gray-700 font-medium">In Stock</span>
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
                <span className="text-gray-700 font-medium">Out of Stock</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Price Filter Section */}
      <div className="border-b pb-4">
        <div
          className="flex items-center justify-between cursor-pointer mt-6"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          <h2 className="text-lg font-semibold">Price</h2>
          {isPriceOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        {isPriceOpen && (
          <div className="mt-4 flex flex-col space-y-4">
            <div className="flex flex-row justify-between">
              <div className="mb-4 mr-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Min Price
                </label>
                <input
                  type="number"
                  value={tempMinPrice}
                  onChange={(e) => setTempMinPrice(Number(e.target.value))}
                  onBlur={handlePriceRangeChange}
                  className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Max Price
                </label>
                <input
                  type="number"
                  value={tempMaxPrice}
                  onChange={(e) => setTempMaxPrice(Number(e.target.value))}
                  onBlur={handlePriceRangeChange}
                  className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="400"
                value={tempMinPrice}
                onChange={(e) => setTempMinPrice(Number(e.target.value))}
                onMouseUp={handlePriceRangeChange}
                className="w-full accent-black"
              />
              <input
                type="range"
                min="0"
                max="400"
                value={tempMaxPrice}
                onChange={(e) => setTempMaxPrice(Number(e.target.value))}
                onMouseUp={handlePriceRangeChange}
                className="w-full accent-black"
              />
            </div>
          </div>
        )}
      </div>

      {/* Size Filter Section */}
      <div className="border-b pb-4 mt-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsSizeOpen(!isSizeOpen)}
        >
          <h2 className="text-lg font-semibold">Size</h2>
          {isSizeOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        {isSizeOpen && (
          <div className="mt-4 space-y-2">
            {["50ml", "100ml", "150ml", "200ml", "250ml"].map((size) => (
              <label key={size} className="flex items-center space-x-2">
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

      {/* Product Type Filter Section */}
      <div className="border-b pb-4 mt-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsProductTypeOpen(!isProductTypeOpen)}
        >
          <h2 className="text-lg font-semibold">Product Type</h2>
          {isProductTypeOpen ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        {isProductTypeOpen && (
          <div className="mt-4 space-y-2">
            {["Oil", "Serum", "Tools", "Skincare"].map((productType) => (
              <label key={productType} className="flex items-center space-x-2">
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
    </div>
  );
};

export default StockAndPriceFilter;
