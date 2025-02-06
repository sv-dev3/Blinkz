import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { capitalizeCategory } from "src/helpers/functions";

const DynamicCategoryLayout = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const category = pathSegments[1];
    if (category) {
      const formattedCategory = capitalizeCategory(category);
      setCurrentCategory(formattedCategory);
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 lg:px-0 font-outfitLight">
      <div className="breadcrumb flex justify-center items-center flex-wrap space-x-2 text-md font-outfitLight text-gray-800">
        <Link to={"/"} className="cursor-pointer text-black my-2">
          Home
        </Link>
        <span className="cursor-pointer text-black my-2">
          <ChevronLeft className="rotate-180" />
        </span>
        <Link to={"/category/all"} className="cursor-pointer text-black my-2">
          Collection
        </Link>
        <span className="cursor-pointer text-black my-2">
          <ChevronLeft className="rotate-180" />
        </span>
        {currentCategory && (
          <Link to={"/category/all"} className="cursor-pointer text-black my-2">
            {currentCategory}
          </Link>
        )}
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
};

export default DynamicCategoryLayout;
