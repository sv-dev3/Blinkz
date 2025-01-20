import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "src/components/ui-elements/SocialIcons";

const Footer = () => {
  const aboutMenus = [
    { name: "About us", url: "/about" },
    { name: "Carrers", url: "/carrers" },
    { name: "Blog", url: "/blog" },
    { name: "Sustanability", url: "/sustanability" },
  ];

  const shopMenus = [
    { name: "New Arrivals", url: "/new" },
    { name: "Best Sellers", url: "/bestseller" },
    { name: "Sale", url: "/sale" },
    { name: "Gift", url: "/gift" },
  ];

  const customerCare = [
    { name: "Contact Us", url: "/contact" },
    { name: "FAQs", url: "/faq" },
    { name: "Return And Exchange", url: "/return" },
    { name: "Shipping info", url: "/info" },
  ];
  return (
    <footer className=" mt-0 md:mt-8 font-outfitRegular  border-gray-500 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Subscriptions Section */}
          <div>
            <h3 className="text-xl font-outfitSemiBold mb-4">Subscriptions</h3>
            <p className="mb-4 font-outfitRegular text-gray-500">
              Sign up for exclusive offers, updates, and news.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-4 px-4 bg-gray-100 rounded-full text-gray-800"
              />
              <button
                type="submit"
                className="bg-purple-600 py-4 px-2 rounded-full font-outfitRegular hover:bg-purple-800 transition text-white p-2"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-outfitSemiBold mb-4 text-gray-900">
              About
            </h3>
            <ul className="space-y-2">
              {aboutMenus?.map((item, index) => (
                <li className="relative group" key={index}>
                  <Link
                    to={item?.url}
                    className="relative text-gray-500 hover:text-purple-600 transition duration-300 text-md font-outfitRegular"
                  >
                    {item?.name}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="text-xl font-outfitSemiBold mb-4 text-gray-900">
              About
            </h3>
            <ul className="space-y-2">
              {shopMenus?.map((item, index) => (
                <li className="relative group" key={index}>
                  <Link
                    to={item?.url}
                    className="relative text-gray-500 hover:text-purple-600 transition duration-300 text-md font-outfitRegular"
                  >
                    {item?.name}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care Section */}
          <div>
            <h3 className="text-xl font-outfitSemiBold mb-4 text-gray-900">
              About
            </h3>
            <ul className="space-y-2">
              {customerCare?.map((item, index) => (
                <li className="relative group" key={index}>
                  <Link
                    to={item?.url}
                    className="text-gray-500 relative hover:text-purple-600 transition duration-300 text-md font-outfitRegular"
                  >
                    {item?.name}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Left Side */}
          <div className="text-center lg:text-left text-gray-900">
            <p>Country/region</p>
            <p>United States (USD $)</p>
            <p className="mt-2">© 2025 SLEEK GLOSSY. Powered by Shopify</p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 items-center">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
