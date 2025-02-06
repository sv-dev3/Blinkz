import React, { useEffect, useState } from "react";
import DynamicCategoryLayout from "./DynamicCategoryLayout";
import { allCategories, dummyData } from "src/helpers/dummyData";
import { capitalizeCategory } from "src/helpers/functions";
import { useLocation, useNavigate } from "react-router-dom";
import { Filter, LoaderCircle, X } from "lucide-react";
import FilterDrawer from "src/components/ui-components/Drawer/FilterDrawer";
import Card from "src/components/ui-elements/Card";

const DynamicCategory = () => {
  const [categoryData, setCategoryData] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [sortOption, setSortOption] = useState("increaseAlphabetical");
  const [viewData, setViewData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const category = pathSegments[1];
    const formattedCategory = capitalizeCategory(category);
    if (formattedCategory) {
      const filteredCategory = allCategories.find(
        (item) => item?.name === formattedCategory
      );
      setCategoryData(filteredCategory);
      setLoading(false);
    }
    setLoading(false);
  }, [location]);

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

    let filtered = dummyData;

    if (categoryData) {
      filtered = filtered.filter((item) => item.category === categoryData.name);
    }

    filtered =
      categoryData &&
      filtered.filter((item) => {
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
    if (categoryData) {
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
    }

    setFilteredProducts(filtered);
    setLoading(false);
  }, [location.search, sortOption, categoryData]);

  useEffect(() => {
    if (filteredProducts) {
      setViewData(showAll ? filteredProducts : filteredProducts.slice(0, 4));
    }
  }, [filteredProducts, showAll]);

  const filteredCount = filteredProducts && filteredProducts.length;
  const totalProducts =
    dummyData &&
    dummyData?.filter((item) => item?.category === categoryData?.name).length;

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <LoaderCircle size={48} className="animate-spin text-black font-bold" />
      </div>
    );
  }

  return (
    <DynamicCategoryLayout>
      <div>
        {categoryData ? (
          <div className="mb-8">
            <div className="relative isolate overflow-hidden rounded-2xl h-[200px] md:h-[350px] hover:cursor-pointer group">
              <img
                src={categoryData.img}
                alt={categoryData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center px-3 py-2 rounded-md">
                <h4 className="text-white text-[22px] md:text-[32px] capitalize font-outfitMedium">
                  {categoryData.name}
                </h4>
              </div>
            </div>
            <h1 className="font-bold mt-4 text-[25px] md:text-[40px] font-outfitLight">
              {categoryData?.name}
            </h1>
            <p className="my-4 text-[15px] md:text-[22px] font-outfitLight">
              Well cared for skin is the key to clean, natural beauty.{" "}
            </p>

            {/* display products here  */}
            <div className=""></div>
            <div className="lg:col-span-9">
              {/* Display product count */}
              <div className="flex flex-col justify-left items-left flex-wrap mb-4">
                <div className="flex justify-between flex-wrap">
                  <div className="flex w-72 items-center">
                    <button
                      onClick={() => setIsFilterDrawerOpen(true)}
                      className="flex items-center bg-white text-black rounded-full border border-black px-4 py-2"
                    >
                      <Filter className="mr-2" />
                      Filters
                    </button>
                  </div>
                  {/* sort products  */}
                  <div className="flex flex-wrap gap-x-8 items-center">
                    {totalProducts > 0 && (
                      <p className="text-sm sm:text-base text-gray-800 font-outfitLight">
                        {filteredCount} of {totalProducts} products
                      </p>
                    )}
                    <div className="flex flex-wrap justify-between items-center">
                    <p className="font-outfitMedium text-sm sm:text-base">Sort By:</p>
                    <select
                      className="p-2"
                      value={sortOption}
                      onChange={(event) => setSortOption(event.target.value)}
                    >
                      {sortingDropdownOptions?.map((item) => (
                        <option value={item?.key}>{item?.value}</option>
                      ))}
                    </select>
                    </div>
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
                        className=" text-gray-800 text-[12px] font-outfitRegular underline underline-offset-4 px-3 py-1"
                      >
                        Remove All
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-row flex-wrap sm:gap-x-[15px] lg:gap-x-[30px] gap-y-8 mt-6">
                {viewData &&
                  viewData.map((item, index) => (
                    <Card key={index} data={item} />
                  ))}
                {/* When No Products Found  */}
                {categoryData &&
                  totalProducts > 0 &&
                  filteredProducts &&
                  filteredProducts.length === 0 && (
                    <h1>No Products Found with applied Filters</h1>
                  )}
                {categoryData && totalProducts === 0 && (
                  <span>
                    No Products associated with category{" "}
                    <span className="font-bold">{categoryData?.name}</span>
                  </span>
                )}
              </div>
              {filteredProducts &&
                !showAll &&
                viewData.length < filteredProducts.length && (
                  <button
                    onClick={() => setShowAll(true)}
                    className="bg-black text-white p-2 rounded-full max-w-48 my-8"
                  >
                    Show All
                  </button>
                )}
            </div>
          </div>
        ) : (
          <div className="flex min-h-96 items-center justify-center">
            <h1 className="text-center text-[22px] md:text-[35px] font-bold">
              No Products Found with this Category
            </h1>
          </div>
        )}
      </div>
      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
      />
    </DynamicCategoryLayout>
  );
};

export default DynamicCategory;
