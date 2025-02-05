import { Filter,X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // useNavigate for URL manipulation
import FilterDrawer from "src/components/ui-components/Drawer/FilterDrawer";
import FilterComponent from "src/components/ui-components/FilterPage";
import Card from "src/components/ui-elements/Card";
import { dummyData } from "src/helpers/dummyData";
import CategoryLayout from "src/layout/CategoryLayout";

const AppProducts = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate for programmatic navigation
  const [filteredProducts, setFilteredProducts] = useState(dummyData);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

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

    const filtered = dummyData.filter((item) => {
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

    setFilteredProducts(filtered);
  }, [location.search]);

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

  return (
    <>
      <CategoryLayout>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Filters Section */}
          <div className="lg:col-span-3 hidden lg:block pt-0  pr-4 rounded">
            <h3 className="font-semibold text-lg mb-4">Filters</h3>
            <FilterComponent />
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsFilterDrawerOpen(true)}
              className="flex items-center bg-white text-black rounded-full border border-black px-4 py-2"
            >
              <Filter className="mr-2" />
              Filters
            </button>
          </div>

          {/* Cards Section */}
          <div className="lg:col-span-9">
            {/* Display product count */}
            <div className="flex flex-col justify-left items-left flex-wrap mb-4">
              <p className="text-lg text-gray-800 font-outfitLight mb-4 ">
                {filteredCount} of {totalProducts} products
              </p>
              {/* Filters Header Section */}
              <div className="flex gap-[5px] flex-wrap font-outfitRegular text-gray-800 text-md">
                {minPrice && maxPrice && (
                  <button
                    onClick={removePriceFilter}
                    className="bg-white text-black rounded-full px-3 py-1 flex items-center border border-gray-200 text-[14px]"
                  >
                    ${minPrice} - ${maxPrice}
                    <span className="ml-2 text-gray-500 font-outfitLight"> <X size={16} /></span>
                  </button>
                )}
                {inStock === "true" && (
                  <button
                    onClick={() => removeFilter("inStock")}
                    className="bg-white text-black rounded-full px-3 py-1 flex items-center border border-gray-200 text-[14px]"
                  >
                    In Stock
                    <span className="ml-2 text-gray-500 font-outfitLight"> <X size={16} /></span>
                  </button>
                )}
                {outOfStock === "true" && (
                  <button
                    onClick={() => removeFilter("outOfStock")}
                    className="bg-white text-black rounded-full px-3 py-1 flex items-center border border-gray-200 text-[14px]"
                  >
                    Out of Stock
                    <span className="ml-2 text-gray-500 font-outfitLight"> <X size={16} /></span>
                  </button>
                )}
                <div className="flex gap-[5px] flex-wrap">
  {selectedSizes.length > 0 && selectedSizes.map((size) => (
    <button
      key={size}
      onClick={() => removeSizeFilter(size)}
      className="bg-white text-black rounded-full px-3 py-1 flex items-center border border-gray-200 text-[12px] lg:text-[14px]"
    >
      {size}
      <span className="ml-2 text-gray-500 font-outfitLight"> <X size={14} /></span>
    </button>
  ))}

  {productTypes.length > 0 && productTypes.map((type) => (
    <button
      key={type}
      onClick={() => removeTypeFilter(type)}
      className="bg-white text-black rounded-full px-3 py-1 flex items-center border border-gray-200  text-[12px] lg:text-[14px]"
    >
      {type}
      <span className="ml-2 text-gray-500 font-outfitLight"> <X size={14} /></span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
              {filteredProducts &&
                filteredProducts.map((item, index) => (
                  <Card key={index} data={item} />
                ))}

              {/* When No Products Found  */}
              {filteredProducts && filteredProducts.length === 0 && (
                <h1>No Products Found with applied Filters</h1>
              )}
            </div>
          </div>
        </div>
      </CategoryLayout>

      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
      />
    </>
    
  );
};
export default AppProducts;
