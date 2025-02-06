import React, { useEffect, useState } from "react";
import { ChevronDown, Search, ShoppingCart, User, Menu } from "lucide-react"; // Import Lucide icons
import logo from "src/assets/images/logo.png";
import { Link } from "react-router-dom";
import NavDrawer from "../Drawer/NavDrawer";
import MegaMenu from "src/components/ui-elements/MegaMenu";
import SkinOne from "src/assets/images/menu-collection-1-min.webp";
import SkinTwo from "src/assets/images/menu-collection-2-min.webp";
import SkinThree from "src/assets/images/menu-collection-3-min.webp";
import SearchDrawer from "../Drawer/SearchDrawer";
import CartDrawer from "../Drawer/CartDrawer";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Calculate the total quantity of items in the cart
    const totalQuantity = cart.reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    );

    setCartCount(totalQuantity);
  };

  // UseEffect to update on mount and when the custom event fires
  useEffect(() => {
    // Set the initial cart count
    updateCartCount();
    const handleStorageChange = () => updateCartCount();
    window.addEventListener("cartUpdated", handleStorageChange);
    return () => window.removeEventListener("cartUpdated", handleStorageChange);
  }, []);

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/category/all",
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
          { heading: "Skincare", link: "/category/skincare" },
          { name: "Cleansers", link: "/category/cleansers" },
          { name: "Treatments", link: "/category/treatments" },
          { name: "Eye Care", link: "/category/eye-care" },
          { name: "Moisturizers", link: "/category/moisturizers" },
          { name: "Accessories", link: "/category/accessories" },
          { name: "Shop All", link: "/category/all" },
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
        // carouselData: homeSliderData,
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

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const toggleSearchDrawer = () => setIsSearchDrawerOpen(!isSearchDrawerOpen);
  const toggleCartDrawer = () => setIsCartDrawerOpen(!isCartDrawerOpen);

  return (
    <nav
      className={`sticky bg-gray-100 text-black p-4 w-full z-[1039]  mb-4 md:mb-12`}
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
                <div className="absolute left-0 right-0 w-full hidden group-hover:block hover:block">
                  <MegaMenu menuItems={[item]} />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section: Icons */}
        <div className="flex space-x-6">
          {/* search button  */}
          <button
            onClick={toggleSearchDrawer}
            className="relative text-xl hover:text-purple-600 transition duration-300"
            title={"Search"}
          >
            <Search size={24} />
          </button>

          {/* cart button  */}
          <button
            onClick={toggleCartDrawer}
            className="relative text-xl hover:text-purple-600 transition duration-300"
            title={"Search"}
          >
            <ShoppingCart size={24} />
            <span className="absolute top-0 font-outfitLight -right-7 text-[11px] p-2 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
              {cartCount}
            </span>
          </button>

          <button
            // onClick={}
            className="relative text-xl hover:text-purple-600 transition duration-300"
            title={"Search"}
          >
            <Link to={"/profile"}>
              <User size={24} />
            </Link>
          </button>
          {/* Drawer Menu button  */}
          <button
            className="block md:hidden text-xl hover:text-purple-600 transition duration-300"
            onClick={toggleDrawer}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Nav Drawer */}
      <NavDrawer
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
        menuItems={menuItems}
      />

      {/* search Drawer  */}
      <SearchDrawer isOpen={isSearchDrawerOpen} onClose={toggleSearchDrawer} />
      {/* cart drawer  */}
      <CartDrawer isOpen={isCartDrawerOpen} onClose={toggleCartDrawer} />
    </nav>
  );
};

export default Navbar;
