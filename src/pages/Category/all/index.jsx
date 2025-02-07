import { Filter, X,Bird } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // useNavigate for URL manipulation
import FilterDrawer from "src/components/ui-components/Drawer/FilterDrawer";
import FilterComponent from "src/components/ui-components/FilterPage";
import Card from "src/components/ui-elements/Card";
import { dummyData } from "src/helpers/dummyData";
import AllCategoryLayout from "./AllCategoryLayout";

const AppProducts = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate for programmatic navigation
  const [filteredProducts, setFilteredProducts] = useState(dummyData);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [sortOption, setSortOption] = useState("increaseAlphabetical");
  const [viewData, setViewData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const inStockFilter = urlParams.get("inStock");
    const outOfStockFilter = urlParams.get("outOfStock");
    const minPrice = parseFloat(urlParams.get("minPrice"));
    const maxPrice = parseFloat(urlParams.get("maxPrice"));
    const sizeFilters = urlParams.getAll("size");
    const types = urlParams.getAll("productType");

    setSelectedSizes(sizeFilters);
    setProductTypes(types);

    let filtered = dummyData.filter((item) => {
      const inStock = inStockFilter === "true" ? item.inStock : true;
      const outOfStock = outOfStockFilter === "true" ? item.outOfStock : true;
      const priceInRange =
        (!minPrice || item.price >= minPrice) &&
        (!maxPrice || item.price <= maxPrice);

      const sizeMatches =
        sizeFilters && sizeFilters.length > 0
          ? sizeFilters.some((size) => item?.quantityOptions?.includes(size))
          : true;

      const typeMatches =
        types && types?.length > 0
          ? types.some((type) => item?.type.toString() === type.toString())
          : true;

      if (inStockFilter === "true" && outOfStockFilter === "true") {
        return (
          (item.inStock || item.outOfStock) &&
          priceInRange &&
          sizeMatches &&
          typeMatches
        );
      }

      return (
        inStock && outOfStock && priceInRange && sizeMatches && typeMatches
      );
    });

    // Apply sorting
    if (sortOption === "increaseAlphabetical") {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "decreaseAlphabetical") {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "lowToHigh") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "featured") {
      filtered = filtered.filter((product) => product.isFeatured);
    } else if (sortOption === "bestSeller") {
      filtered = filtered.filter((product) => product.isBestSeller);
    } else if (sortOption === "latest") {
      filtered = filtered.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortOption === "oldest") {
      filtered = filtered.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    }

    setFilteredProducts(filtered);
  }, [location.search, sortOption]);

  useEffect(() => {
    if (filteredProducts) {
      setViewData(showAll ? filteredProducts : filteredProducts.slice(0, 6));
    }
  }, [filteredProducts, showAll]);

  const totalProducts = dummyData.length;
  const filteredCount = filteredProducts.length;

  const removeFilter = (filterName) => {
    const urlParams = new URLSearchParams(location.search);
    urlParams.delete(filterName);
    navigate(`${location.pathname}?${urlParams.toString()}`); // navigate to updated URL
  };

  const removePriceFilter = () => {
    const urlParams = new URLSearchParams(location.search);
    urlParams.delete("minPrice");
    urlParams.delete("maxPrice");
    navigate(`${location.pathname}?${urlParams.toString()}`);
  };

  const removeSizeFilter = (size) => {
    const urlParams = new URLSearchParams(location.search);
    const updatedSizes = selectedSizes.filter((s) => s !== size);
    setSelectedSizes(updatedSizes);
    urlParams.delete("size"); // Remove all existing size filters
    updatedSizes.forEach((s) => urlParams.append("size", s)); // Add the updated sizes
    navigate(`${location.pathname}?${urlParams.toString()}`);
  };

  const removeTypeFilter = (type) => {
    const urlParams = new URLSearchParams(location.search);
    const types = urlParams.getAll("productType");
    const updatedTypes = types.filter((t) => t !== type); // Remove the selected type

    urlParams.delete("productType"); // Clear existing productType filters
    updatedTypes.forEach((t) => urlParams.append("productType", t)); // Re-add updated filters

    navigate(`${location.pathname}?${urlParams.toString()}`);
  };

  const removeAllFilters = () => {
    navigate(`${location.pathname}`);
  };

  const urlParams = new URLSearchParams(location.search);
  const minPrice = urlParams.get("minPrice");
  const maxPrice = urlParams.get("maxPrice");
  const inStock = urlParams.get("inStock");
  const outOfStock = urlParams.get("outOfStock");

  // const sortingDropdownOptions = [{key : 'increaseAlphabetical', value : 'Alphabatical, A-z'}]
  const sortingDropdownOptions = [
    { key: "featured", value: "Featured" },
    { key: "bestSeller", value: "Best Seller" },
    { key: "increaseAlphabetical", value: "Alphabetical, A-Z" },
    { key: "decreaseAlphabetical", value: "Alphabetical, Z-A" },
    { key: "lowToHigh", value: "Price: Low to High" },
    { key: "highToLow", value: "Price: High to Low" },
    { key: "latest", value: "Date, New to Old" },
    { key: "oldest", value: "Date, Old to New" },
  ];

  return (
    <>
      <AllCategoryLayout>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          {/* Filters Section */}
          <div className="lg:col-span-3 hidden lg:block pt-0 pr-4 rounded ">
            <div className="sticky top-60">
            <h3 className="font-semibold text-lg mb-4">Filters</h3>
            <FilterComponent />
          </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsFilterDrawerOpen(true)}
              className="flex items-center bg-white text-black rounded-full border border-gray-300 px-4 py-2"
            >
              <Filter size={16} className="mr-2" />
              Filters
            </button>
          </div>

          {/* Cards Section */}
          <div className="lg:col-span-9">
            {/* Display product count */}
            <div className="flex flex-col justify-left items-left flex-wrap mb-4">
              <div className="flex justify-between items-center">
                <p className="text-sm sm:text-lg text-gray-800 font-outfitLight mb-4 ">
                  {filteredCount} of {totalProducts} products
                </p>
                {/* sort products  */}
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <p className="font-outfitMedium text-sm sm:text-base">Sort By: </p>
                  <select
                    className=" p-2 text-sm sm:text-base"
                    value={sortOption}
                    onChange={(event) => setSortOption(event.target.value)}
                  >
                    {sortingDropdownOptions?.map((item) => (
                      <option value={item?.key}>{item?.value}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Filters Header Section */}
              <div className="flex gap-[5px] flex-wrap font-outfitRegular text-gray-800 text-md">
                {minPrice && maxPrice && (
                  <button
                    onClick={removePriceFilter}
                    className="bg-white text-black rounded-full px-3 py-1 flex items-center border border-gray-200 text-[14px]"
                  >
                    ${minPrice} - ${maxPrice}
                    <span className="ml-2 text-gray-500 font-outfitLight">
                      {" "}
                      <X size={16} />
                    </span>
                  </button>
                )}
                {inStock === "true" && (
                  <button
                    onClick={() => removeFilter("inStock")}
                    className="bg-white text-black rounded-full px-3 py-1 flex items-center border border-gray-200 text-[14px]"
                  >
                    In Stock
                    <span className="ml-2 text-gray-500 font-outfitLight">
                      {" "}
                      <X size={16} />
                    </span>
                  </button>
                )}
                {outOfStock === "true" && (
                  <button
                    onClick={() => removeFilter("outOfStock")}
                    className="bg-white text-black rounded-full px-3 py-1 flex items-center border border-gray-200 text-[14px]"
                  >
                    Out of Stock
                    <span className="ml-2 text-gray-500 font-outfitLight">
                      {" "}
                      <X size={16} />
                    </span>
                  </button>
                )}
                <div className="flex gap-[5px] flex-wrap">
                  {selectedSizes.length > 0 &&
                    selectedSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => removeSizeFilter(size)}
                        className="bg-white text-black rounded-full px-3 py-1 flex items-center border border-gray-200 text-[12px] lg:text-[14px]"
                      >
                        {size}
                        <span className="ml-2 text-gray-500 font-outfitLight">
                          {" "}
                          <X size={14} />
                        </span>
                      </button>
                    ))}

                  {productTypes.length > 0 &&
                    productTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => removeTypeFilter(type)}
                        className="bg-white text-black rounded-full px-3 py-1 flex items-center border border-gray-200  text-[12px] lg:text-[14px]"
                      >
                        {type}
                        <span className="ml-2 text-gray-500 font-outfitLight">
                          {" "}
                          <X size={14} />
                        </span>
                      </button>
                    ))}
                  {(minPrice ||
                    maxPrice ||
                    inStock ||
                    outOfStock ||
                    selectedSizes.length > 0) && (
                    <button
                      onClick={removeAllFilters}
                      className=" text-gray-800 text-[12px] sm:text-[16px] font-outfitRegular underline underline-offset-4 px-3 py-1"
                    >
                      Remove All
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 pb-8">
              {viewData &&
                viewData.map((item, index) => <Card key={index} data={item} />)} 
                </div>
                <div className="text-center">
                {filteredProducts &&
                !showAll &&
                viewData.length < filteredProducts.length && (
                  <button
                    onClick={() => setShowAll(true)}
                    className="bg-black text-white px-8 font-outfitRegular py-2 rounded-full"
                  >
                    Show All
                  </button>
                )}
                </div>

              {/* When No Products Found  */}
              {filteredProducts && filteredProducts.length === 0 && (
                <div className="flex flex-col space-y-3 items-center py-12 sm:py-20">
                <div className="mb-3 text-center">
                  <Bird size={64} className="mb-3 mx-auto"/>
                  <h1 className="mb-3 text-xl font-outfitMedium">No products match those filters.</h1>
                  <p>Use fewer filters or</p>
                </div>
                {(minPrice ||
                    maxPrice ||
                    inStock ||
                    outOfStock ||
                    (productTypes && productTypes.length > 0) ||
                    selectedSizes.length > 0) && (
                    <button
                      onClick={removeAllFilters}
                      className="text-[12px] sm:text-[16px] font-outfitRegular bg-black text-white rounded-full max-w-32 px-5 py-2"
                    >
                      Remove All
                    </button>
                  )}
                </div>
              )}
            
          </div>
        </div>
      </AllCategoryLayout>

      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
      />
    </>
  );
};
export default AppProducts;
