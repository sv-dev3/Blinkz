import React from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";

const Drawer = ({ isOpen, onClose, menuItems }) => {
  return (
    <>
      <div
        className={`font-outfitMedium fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 left-0 h-full w-72 md:w-xl bg-white shadow-lg z-30 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-outfitSemiBold">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="p-4 space-y-4 font-outfitMedium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <div className="flex items-center justify-between">
                <Link
                  to={item.link}
                  className="block text-lg text-gray-700 hover:text-purple-600 transition duration-300"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
                {item.subMenu && (
                  <ChevronDown
                    size={16}
                    className="ml-2 text-gray-500 group-hover:text-purple-600"
                  />
                )}
              </div>
              {/* Submenu */}
              {item.subMenu && (
                <ul className="mt-2 space-y-2 pl-4">
                  {/* {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.link}
                        className="block text-md text-gray-500 hover:text-purple-600 transition duration-300"
                        onClick={onClose}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))} */}
                  Submenu will display here
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Drawer;
