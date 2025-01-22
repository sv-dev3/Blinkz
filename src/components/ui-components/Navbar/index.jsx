import React, { useState } from "react";
import { ChevronDown, Search, ShoppingCart, User, Menu } from "lucide-react"; // Import Lucide icons
import logo from "src/assets/images/logo.png";
import { Link } from "react-router-dom";
import Drawer from "../Drawer";
import MegaMenu from "src/components/ui-elements/MegaMenu";
import third from "src/assets/images/card8.webp";
import SkinOne from "src/assets/images/menu-collection-1-min.webp";
import SkinTwo from "src/assets/images/menu-collection-2-min.webp";
import SkinThree from "src/assets/images/menu-collection-3-min.webp";
import { homeSliderData } from "src/helpers/dummyData";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
      subMenu: true,
      subMenuGridData: {
        name: "About Grid",
        row1: [
          { heading: "Best Sellers", link: "/test" },
          { heading: "New Arrivals", link: "/test" },
          { heading: "Bundles", link: "/test" },
          { heading: "Trending", link: "/test" },
        ],
        row2: [
          { heading: "Skincare", link: "/test" },
          { name: "Cleansers", link: "/test" },
          { name: "Treatments", link: "/test" },
          { name: "Eye care", link: "/test" },
          { name: "Moisturizers", link: "/test" },
          { name: "Accessories", link: "/test" },
          { name: "Shop All", link: "/test" },
        ],
        row3: [
          { heading: "Makeup", link: "/test" },
          { name: "Face", link: "/test" },
          { name: "Cheek", link: "/test" },
          { name: "Lip", link: "/test" },
          { name: "Eye", link: "/test" },
          { name: "Makeup Remover", link: "/test" },
          { name: "Accessories", link: "/test" },
          { name: "Shop All", link: "/test" },
        ],
        carouselData: homeSliderData,
      },
      drawerSubMenu: [
        { heading: "Best Sellers", link: "/test" },
        { heading: "New Arrivals", link: "/test" },
        { heading: "Bundles", link: "/test" },
        { heading: "Trending", link: "/test" },
      ],
    },
    {
      name: "Services",
      link: "/services",
      subMenu: true,
      subMenuCardData: [
        {
          heading: "Sensitive Skin",
          subheading: "Care for Your Skin",
          img: SkinOne,
        },
        {
          heading: "Sensitive Skin",
          subheading: "Skincare Advance",
          img: SkinTwo,
        },
        {
          heading: "Sensitive Skin",
          subheading: "Natural Self Care",
          img: SkinThree,
        },
      ],
      drawerSubMenu: [
        { heading: "Sensitive Skin", link: "/test" },
        { heading: "Sensitive Skin", link: "/test" },
        { heading: "BunSensitive Skin", link: "/test" },
        { heading: "Sensitive Skin", link: "/test" },
      ],
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  // Icons
  const icons = [
    {
      name: "Search",
      icon: <Search size={24} />,
      action: () => alert("Search clicked"),
    },
    {
      name: "Cart",
      icon: <ShoppingCart size={24} />,
      action: () => alert("Cart clicked"),
      count: 2,
    },
    {
      name: "Profile",
      icon: <User size={24} />,
      action: () => alert("Profile clicked"),
    },
  ];

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <nav
      className={`sticky bg-gray-100 text-black p-4 w-full z-[1039] mb-12`}
      style={{ top: "0" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="siteLogo" />
          </Link>
        </div>
        {/* middle section  */}
        <ul className="hidden md:flex gap-x-4">
          {menuItems.map((item, index) => (
            <li key={index} className="group px-4 py-2">
              <Link
                to={item.link}
                className="relative hover:text-purple-600 transition duration-300 text-lg font-outfitMedium"
              >
                {item.name}
                {item.subMenu && (
                  <ChevronDown
                    size={16}
                    className="ml-1 inline-block hover:rotate-180"
                  />
                )}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>

              {/* Mega Menu will show only when parent li is hovered */}
              {item.subMenu && (
                <div className="absolute left-0 w-full hidden group-hover:block hover:block">
                  <MegaMenu menuItems={[item]} />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section: Icons */}
        <div className="flex space-x-6">
          {icons.map((icon, index) => (
            <button
              key={index}
              onClick={icon.action}
              className="relative text-xl hover:text-purple-600 transition duration-300"
              title={icon.name}
            >
              {icon.icon}
              {icon.count > 0 && (
                <span className="absolute top-0 font-outfitRegular -right-4 text-xs w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                  {icon.count}
                </span>
              )}
            </button>
          ))}
          <button
            className="block md:hidden text-xl hover:text-purple-600 transition duration-300"
            onClick={toggleDrawer}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Drawer Component */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
        menuItems={menuItems}
      />
    </nav>
  );
};

export default Navbar;
