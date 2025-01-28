import React from "react";
import { X } from "lucide-react";
import FilterComponent from "../FilterPage";

const FilterDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`font-outfitMedium fixed inset-0 bg-black bg-opacity-50 z-[1100] transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-[450px] bg-white shadow-lg z-[1100] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-outfitSemiBold">Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>
        <div className="overflow-auto h-full">
          <h3 className="font-semibold text-lg mb-4">Filters</h3>
          <FilterComponent />
        </div>
      </div>
    </>
  );
};

export default FilterDrawer;
