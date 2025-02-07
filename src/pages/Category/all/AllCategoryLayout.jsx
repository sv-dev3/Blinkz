import { ChevronLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import CategorySlider from "src/components/ui-components/CategorySlider";
import { allCategories } from "src/helpers/dummyData";

const AllCategoryLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-2 sm:px-4 font-outfitLight">
      <div className="breadcrumb flex justify-center items-center space-x-2 text-md font-outfitLight text-gray-800">
        <Link to={"/"} className="cursor-pointer text-black my-2">
          Home
        </Link>
        <span className="cursor-pointer text-black my-2">
          <ChevronLeft className="rotate-180" />
        </span>
        <Link to={"/category/all"} className="cursor-pointer text-black my-2">
          Shop All
        </Link>
      </div>
      <h1 className="text-center font-bold mt-4 mb-2 text-[25px] md:text-[40px] font-outfitLight">
        Shop All
      </h1>
      <p className="text-center mb-4 text-[15px] md:text-[22px] font-outfitLight">
        Well cared for skin is the key to clean, natural beauty.{" "}
      </p>
      <div className="mt-8 mb-12">
        {allCategories && allCategories.length > 0 && (
          <CategorySlider sliderData={allCategories.slice(0, 6)} />
        )}
      </div>
      <div className="my-8">{children}</div>
    </div>
  );
};

export default AllCategoryLayout;
