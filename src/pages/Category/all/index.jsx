import React from "react";
import FilterComponent from "src/components/ui-components/FilterPage";
import Card from "src/components/ui-elements/Card";
import { dummyData } from "src/helpers/dummyData";
import CategoryLayout from "src/layout/CategoryLayout";

const AppProducts = () => {
  return (
    <CategoryLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Filters Section */}
        <div className="lg:col-span-3 bg-gray-100 p-4 rounded">
          <h3 className="font-semibold text-lg mb-4">Filters</h3>
          {/* Add your filter options here */}
          {/* <div>
            <label className="block mb-2 text-sm font-medium">Category</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="">All Categories</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium">
              Price Range
            </label>
            <input
              type="range"
              className="w-full"
              min="0"
              max="100"
              step="1"
              defaultValue="50"
            />
          </div> */}
          <FilterComponent />
        </div>

        {/* Cards Section */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {dummyData &&
              dummyData.map((item, index) => <Card key={index} data={item} />)}
          </div>
        </div>
      </div>
    </CategoryLayout>
  );
};

export default AppProducts;
