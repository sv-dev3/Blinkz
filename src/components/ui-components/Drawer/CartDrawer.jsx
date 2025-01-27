import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const CartDrawer = ({ isOpen, onClose }) => {
  const [cartData, setCartData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getCartData = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartData(cart);
    updateCartSummary(cart); // Update cart count and total when data changes
  };

  const updateCartSummary = (cart) => {
    // Calculate the total quantity and total price
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) =>
        sum +
        item.quantity *
          parseFloat(item.price.replace("$", "").replace(",", "")),
      0
    );
    setCartCount(totalQuantity);
    setCartTotal(totalPrice.toFixed(2));
  };
  console.log("Count : ", cartCount);

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from being less than 1

    // Find the index of the item in the cart
    const updatedCart = [...cartData];
    const index = updatedCart.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (index !== -1) {
      updatedCart[index].quantity = newQuantity;

      // Update the cart in localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Update the state with the new cart data
      setCartData(updatedCart);
      updateCartSummary(updatedCart); // Update the summary (count and total)
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };

  const handleIncrement = (item) => {
    const newQuantity = item.quantity + 1;
    handleQuantityChange(item, newQuantity);
  };

  const handleDecrement = (item) => {
    const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
    handleQuantityChange(item, newQuantity);
  };

  const handleRemove = (item) => {
    const updatedCart = cartData.filter(
      (cartItem) => cartItem.name !== item.name
    );

    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update the state with the new cart data
    setCartData(updatedCart);
    updateCartSummary(updatedCart); // Update the summary (count and total)
    window.dispatchEvent(new Event("cartUpdated"));
  };

  useEffect(() => {
    // Set the initial cart data
    getCartData();

    const handleStorageChange = () => getCartData();
    window.addEventListener("cartUpdated", handleStorageChange);

    return () => window.removeEventListener("cartUpdated", handleStorageChange);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[1040] transition-opacity ${
          isOpen ? "opacity-200 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-lg z-[1040] transform font-outfit ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="overflow-auto h-full px-4">
          {cartData.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <h1 className="font-bold text-2xl">Your cart is empty</h1>
            </div>
          ) : (
            cartData.map((item, index) => (
              // <div
              //   key={index}
              //   className="flex items-center justify-between py-3 border-b overflow-auto"
              // >
              //   <div className="flex items-center justify-between">
              //     <img
              //       src={item.image}
              //       alt={item.name}
              //       className="w-16 h-16 object-cover"
              //     />
              //     <div className="flex flex-col ml-3">
              //       <h4 className="font-semibold">{item.name}</h4>
              //       <p className="text-sm text-gray-600">{item.discount}</p>
              //       <p className="font-semibold">
              //         {item.price} * {item?.quantity}
              //       </p>
              //     </div>
              //   </div>
              //   <div className="flex items-center justify-end space-x-2">
              //     <button
              //       onClick={() => handleDecrement(item)}
              //       className="px-2 py-1 bg-gray-300 text-black rounded"
              //     >
              //       -
              //     </button>
              //     <input
              //       type="number"
              //       value={item.quantity}
              //       min="1"
              //       className="w-12 text-center border border-gray-300 rounded"
              //       onChange={(e) =>
              //         handleQuantityChange(
              //           item,
              //           Math.max(1, parseInt(e.target.value))
              //         )
              //       }
              //     />
              //     <button
              //       onClick={() => handleIncrement(item)}
              //       className="px-2 py-1 bg-gray-300 text-black rounded"
              //     >
              //       +
              //     </button>

              //     <button
              //       onClick={() => handleRemove(item)}
              //       className="ml-4 text-red-500 hover:text-red-700"
              //     >
              //       Remove
              //     </button>
              //   </div>
              // </div>
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between py-3 border-b overflow-auto"
              >
                <div className="flex flex-row items-center sm:items-start justify-left w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover mb-2 sm:mb-0 mr-3"
                  />
                  <div className="flex flex-col text-left">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.discount}</p>
                    <p className="font-semibold">
                      {item.price} * {item?.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:justify-end space-x-2 mt-3 sm:mt-0 w-full sm:w-auto">
                  <button
                    onClick={() => handleDecrement(item)}
                    className="px-2 py-1 bg-gray-300 text-black rounded"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="w-12 text-center border border-gray-300 rounded"
                    onChange={(e) =>
                      handleQuantityChange(
                        item,
                        Math.max(1, parseInt(e.target.value))
                      )
                    }
                  />
                  <button
                    onClick={() => handleIncrement(item)}
                    className="px-2 py-1 bg-gray-300 text-black rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => handleRemove(item)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
          {/* Cart Summary */}
          {cartData && cartData.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex justify-between text-lg font-semibold mt-2">
                <h1 className="text-xl">Estimated Total</h1>
                <h1 className="text-xl">${cartTotal}</h1>
              </div>
              <div className="flex justify-around mt-4">
                <button
                  className="px-7 py-2.5 bg-gray-300 hover:bg-black hover:text-white text-black transition rounded-full mt-8 text-[16px] font-outfitSemiBold uppercase"
                  onClick={() => alert("Handle View Cart")}
                >
                  View Cart
                </button>
                <button
                  className="px-12 py-2.5 bg-black border border-[#000] text-white transition rounded-full mt-8 text-[16px] font-outfitSemiBold uppercase"
                  onClick={() => alert("Handle Checkout")}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
