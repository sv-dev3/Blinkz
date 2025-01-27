import { Search } from "lucide-react";
import { useState } from "react";
import CartDrawer from "../ui-components/Drawer/CartDrawer";
import ChooseOptionsModal from "../ui-components/Drawer/ChooseOptionsDrawer";

const Card = ({ data, height = "h-[300px]", animateButtons = true }) => {
  const [hover, setHover] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isOptionDrawerOpen, setIsOptionDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [quantity, setQuantity] = useState(1);

  const toggleCartDrawer = () => setIsCartDrawerOpen(!isCartDrawerOpen);
  const toggleOptionDrawer = () => {
    setIsOptionDrawerOpen(!isOptionDrawerOpen);
  };

  const handleAddToCart = (data, selectedQuantity = "50ml", quantity = 1) => {
    // Retrieve the existing cart from localStorage or initialize it as an empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.name === data.name);

    if (existingItemIndex !== -1) {
      // If the item exists, increment its quantity
      cart[existingItemIndex].quantity += quantity;
      cart[existingItemIndex].selectedQuantity = selectedQuantity;
    } else {
      // If the item does not exist, add it with a default quantity of 1
      cart.push({ ...data, selectedQuantity, quantity });
    }

    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    toggleCartDrawer();
    setSelectedQuantity("");
    setSelectedItem(null);
  };

  const handleChooseOptions = (item) => {
    setSelectedItem(item);
    toggleOptionDrawer();
  };

  return (
    <div
      className=" w-full pb-4 bg-gray-100 rounded-xl cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Tags */}
      <div className="absolute top-[15px] left-[15px] space-x-2 flex flex-wrap gap-2 z-[100]">
        {data?.tags &&
          data?.tags.map((tag, index) => {
            const bgColor =
              tag.type === "discount"
                ? "bg-red-600"
                : tag.type === "highlight"
                ? "bg-green-600"
                : "bg-gray-800";

            return (
              <span
                key={index}
                className={`text-sm font-outfitRegular ${bgColor} text-white px-2 py-1 rounded-full`}
              >
                {tag.value}
              </span>
            );
          })}
      </div>

      {/* Search Button */}
      {animateButtons && (
        <div
          className={`absolute top-[15px] right-[15px] transition-all duration-1000 z-30 transform ${
            hover ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <button className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-1000">
            <Search />
          </button>
        </div>
      )}

      {/* Image */}
      <div className={`${height} relative overflow-hidden`}>
        <img
          src={hover ? data?.image : data?.hoverImage}
          alt="Product"
          className="h-full w-full object-cover rounded-md cursor-pointer transform hover:scale-110 hover:rotate-1"
          style={{
            willChange: "transform",
            transition: "transform 0.8s ease-in-out", // Change '1s' to your desired duration
          }}
        />
        {animateButtons && (
          <div
            className={`absolute h-16 inset-x-0 bottom-0 flex items-center justify-center bg-transparent bg-opacity-5 transition-all transform ${
              hover ? "translate-y-0 opacity-80" : "translate-y-full opacity-0"
            }`}
            style={{
              transition: "transform 0.6s ease-in-out, opacity 1s ease-in-out",
            }}
          >
            {data?.multipleQuantity ? (
              // choose option if quantity is multiple
              <button
                className="text-lg font-outfitBold bg-black w-full mx-8 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-200 hover:text-black transition"
                onClick={() => handleChooseOptions(data)}
                style={{
                  transition:
                    "background-color 1s ease-in-out, color 1s ease-in-out",
                }}
              >
                Choose options
              </button>
            ) : (
              // if not then directly add to cart
              <button
                className="text-lg font-outfitBold bg-black w-full mx-8 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-200 hover:text-black transition"
                onClick={() => handleAddToCart(data)}
                style={{
                  transition:
                    "background-color 1s ease-in-out, color 1s ease-in-out",
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Discount */}
        <div className="mb-1 text-[12px] uppercase text-left text-sm font-outfitMedium text-black">
          {data?.type}
        </div>
        {/* Name */}
        <div className="mb-2 text-[20px] font-outfitSemiBold text-black leading-[normal]">
          {data?.name}
        </div>
        <div className="  font-outfitSemiBold text-gray-900 flex space-x-3 items-center">
          <span className="text-gray-900 font-outfitBold text-[16px]">
            {`${data?.price}`}
          </span>
          <span className="text-gray-500 font-outfitRegular text-[13px] line-through">
            {`${data?.price}`}
          </span>
        </div>
      </div>

      <CartDrawer isOpen={isCartDrawerOpen} onClose={toggleCartDrawer} />
      <ChooseOptionsModal
        isOpen={isOptionDrawerOpen}
        onClose={toggleOptionDrawer}
        item={selectedItem}
        onAddToCart={(selectedQuantity, quantity) =>
          handleAddToCart(data, selectedQuantity, quantity)
        }
        setSelectedQuantity={setSelectedQuantity}
        selectedQuantity={selectedQuantity}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
};

export default Card;
