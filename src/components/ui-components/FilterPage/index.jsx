import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const FilterComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  // Handle changes when the user selects/deselects checkboxes
  useEffect(() => {
    // Create a new instance of URLSearchParams to manipulate search parameters
    const newSearchParams = new URLSearchParams(searchParams);

    if (inStock) {
      newSearchParams.set("stockStatus", "inStock");
    } else {
      newSearchParams.delete("stockStatus");
    }

    if (outOfStock) {
      newSearchParams.set("stockStatus", "outOfStock");
    } else {
      newSearchParams.delete("stockStatus");
    }

    // Update the searchParams state and navigate
    setSearchParams(newSearchParams);
    navigate(`${location.pathname}?${newSearchParams.toString()}`);
  }, [inStock, outOfStock, searchParams, location, navigate, setSearchParams]);

  return (
    <div className="">
      <div>
        <label>
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />
          In Stock
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={outOfStock}
            onChange={(e) => setOutOfStock(e.target.checked)}
          />
          Out of Stock
        </label>
      </div>
    </div>
  );
};

export default FilterComponent;
