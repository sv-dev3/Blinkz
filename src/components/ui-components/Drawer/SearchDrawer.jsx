import React, { useState } from "react";
import { Search, X } from "lucide-react";
import SearchProductCard from "src/components/ui-elements/SearchProductCard";
import { dummyData } from "src/helpers/dummyData";

const SearchDrawer = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = dummyData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-lg z-30 transform font-outfit ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between px-4 py-8 ">
        <h1 className="text-[14px] md:text-[24px] lg:text-2xl font-semibold text-center font-outfitSemiBold">Search</h1>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-auto h-full">
          {/* Search Box */}
          <div className="px-4 py-8  relative border-b">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 py-4 border rounded-full border-1 bg-gray-100 text-black  font-outfitRegular placeholder:text-[#707070]"
            />
            <div className="absolute top-[50px] left-[33px]">
              <Search />
            </div>
          </div>
          <div className="pt-2 pb-4 mx-4">
            <h1 className="font-outfitRegular">Most Searched Products</h1>
          </div>

          {/* Product List */}
          <div className="pb-2 space-y-4 overflow-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <SearchProductCard
                  key={index}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                />
              ))
            ) : (
              // Component when no filtered products found
              <div className="text-center">
                <p className="text-center text-gray-500">
                  No products found with the name "{searchQuery}"
                  <br />
                  Check the spelling or use a different word or phrase.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDrawer;
