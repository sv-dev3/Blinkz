import React, { useEffect } from "react";
import { X } from "lucide-react";

const ChooseOptionsModal = ({
  isOpen,
  onClose,
  item,
  onAddToCart,
  setSelectedQuantity,
  selectedQuantity,
}) => {
  const handleAddToCartClick = () => {
    if (!item || !item.quantityOptions || !setSelectedQuantity) return;
    onAddToCart(selectedQuantity);
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

        <div className="flex flex-col items-center p-4">
          <img
            src={item?.image}
            alt={item?.name}
            className="w-full h-56 object-cover rounded-md mb-4"
          />

          {/* Quantity Options */}
          <div className="space-x-4 mb-4">
            {item?.quantityOptions?.map((option, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded ${
                  selectedQuantity === option
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedQuantity(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCartClick}
            className="bg-black text-white py-2 px-6 rounded-full shadow-md w-48"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ChooseOptionsModal;
