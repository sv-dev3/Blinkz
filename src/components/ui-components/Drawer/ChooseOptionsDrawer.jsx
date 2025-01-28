import React, { useEffect } from "react";
import { X } from "lucide-react";
import { homeSliderData } from "src/helpers/dummyData";
import ChooseOptionSlider from "src/components/ui-elements/ChooseOptionsSlider";
import { useNavigate } from "react-router-dom";

const ChooseOptionsModal = ({
  isOpen,
  onClose,
  item,
  onAddToCart,
  setSelectedQuantity,
  selectedQuantity,
  quantity,
  setQuantity,
}) => {
  const navigate = useNavigate();
  const handleAddToCartClick = () => {
    if (!item || !item.quantityOptions || !setSelectedQuantity) return;
    onAddToCart(selectedQuantity, quantity);
    onClose();
  };

  const handleViewDetails = () => {
    navigate(`/product/${item?.id}`);
    onClose();
  };

  useEffect(() => {
    if (
      item?.quantityOptions &&
      item?.quantityOptions.length > 0 &&
      !selectedQuantity
    ) {
      setSelectedQuantity(item.quantityOptions[0]); // Set first quantity option as default
    }
  }, [item, selectedQuantity, setSelectedQuantity]);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = (item) => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityChange = (item, newValue) => {
    setQuantity(newValue);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[1040] transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-lg z-[1040] transform font-outfit ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-2xl font-bold">Choose Options</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-auto h-full pb-24 font-outfitRegular">
          <div className="flex flex-col p-4">
            <ChooseOptionSlider sliderImages={homeSliderData} />

            {/* Product name  */}
            <h4 className="font-outfitMedium text-3xl mb-4">{item?.name}</h4>
            <div className="  font-outfitSemiBold text-gray-900 flex space-x-3 items-center">
              <span className="text-red-500 font-outfit text-[20px]">
                {`$${item?.price}`}
              </span>
              <span className="text-gray-500 font-outfitRegular text-[18px] line-through">
                {`$${item?.price}`}
              </span>
            </div>
            <p className="text-md font-outfitRegular">{item?.description}</p>
            <div className="flex flex-row my-4">
              <span className="font-outfitBold">Size : </span>
              <span className="mx-4">{selectedQuantity}</span>
            </div>
            {/* Quantity Options */}
            <div className="space-x-4 mb-4">
              {item?.quantityOptions?.map((option, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded-full hover:bg-black hover:text-white ${
                    selectedQuantity === option
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setSelectedQuantity(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={() => handleDecrement(item)}
                className="px-2 py-1 bg-gray-300 text-black rounded"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                min="1"
                className="w-12 text-center border border-gray-300 rounded"
                onChange={(e) =>
                  handleQuantityChange(
                    item,
                    Math.max(1, parseInt(e.target.value, 10) || 1) // Handle invalid input gracefully
                  )
                }
              />
              <button
                onClick={() => handleIncrement(item)}
                className="px-2 py-1 bg-gray-300 text-black rounded"
              >
                +
              </button>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCartClick}
                className="bg-black text-white py-2 px-6 rounded-full shadow-md w-72 sm:w-96"
              >
                Add to Cart
              </button>
            </div>

            {/* Buy Now  */}
            <div>
              <button
                // onClick={handleAddToCartClick}
                className="bg-black text-white py-2 px-6 rounded-full w-full hover:bg-white hover:text-black border border-black"
              >
                Buy Now
              </button>
            </div>
            <div className="mt-4">
              <button
                onClick={handleViewDetails}
                className="bg-black text-white py-2 px-6 rounded-full w-full hover:bg-white hover:text-black border border-black"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseOptionsModal;
