import { ChevronRight, LoaderCircle, Minus, Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartDrawer from "src/components/ui-components/Drawer/CartDrawer";
import ChooseOptionSlider from "src/components/ui-elements/ChooseOptionsSlider";
import Rating from "src/components/ui-elements/Rating";
import { dummyData } from "src/helpers/dummyData";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null); // Default to the first size
  const [quantity, setQuantity] = useState(1);
  const [isOverViewOpen, setIsOverViewOpen] = useState(false);

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const toggleCartDrawer = () => setIsCartDrawerOpen(!isCartDrawerOpen);

  const handleSizeSelect = (size) => {
    setSelectedSize(size); // Update the selected size
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const foundProduct =
        dummyData &&
        dummyData.find((item) => item.id.toString() === id.toString());
      setProduct(foundProduct);
      setLoading(false);
    }, 500);
  }, [id]);

  useEffect(() => {
    if (product && product.quantityOptions?.length > 0) {
      setSelectedSize(product.quantityOptions[0]);
    }
  }, [product]);

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1)); // Prevent going below 1
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Increment quantity
  };

  const handleQuantityChange = (item, newQuantity) => {
    setQuantity(newQuantity); // Update quantity from the input
  };

  const handleAddToCartClick = () => {
    const dataItem = { ...product, quantity, selectedQuantity: selectedSize };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex(
      (item) => item.name === product.name
    );

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
      cart[existingItemIndex].selectedQuantity = selectedSize;
    } else {
      cart.push(dataItem);
    }
    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Trigger cart update event
    window.dispatchEvent(new Event("cartUpdated"));
    // alert("Item Added To Cart Successfully");
    setIsCartDrawerOpen(true);
    setSelectedSize(null);
    setQuantity(1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <LoaderCircle size={48} className="animate-spin text-black font-bold" />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const openModal = (imageUrl) => {
    setModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Responsive Layout */}
      <div className="flex flex-row m-4 gap-x-4 text-gray-800 justify-center items-center flex-wrap cursor-pointer font-outfitLight text-md mb-16">
        <span>Home</span>
        <ChevronRight size={16}/>
        <span>Accessories</span>
        <ChevronRight size={16}/>
        <span>{product?.name}</span>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Product Image */}
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            loading="lazy"
            src={product?.image}
            alt={product.name}
            className="w-full max-w-[500px] max-h-[400px] cursor-pointer rounded-xl"
            onClick={() => openModal(product?.image)}
          />

          {/* Horizontal Thumbnail Images */}
          {product.sliderImages && product.sliderImages.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {product.sliderImages.map((img, index) => (
                <img
                  key={index}
                  src={img.imageUrl}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-[220px] h-[220px] object-cover rounded-xl cursor-pointer border-2 hover:border-gray-500`}
                  onClick={() => openModal(img.imageUrl)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Product Details */}
        <div className="md:w-1/2 relative">
          <div className="space-r-2 flex flex-wrap gap-2 z-[100]">
            {product?.tags &&
              product?.tags.map((tag, index) => {
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
          <h1 className="text-5xl font-outfitSemiBold mb-3">{product.name}</h1>
          <Rating className="mb-3" />
          <p className="font-outfitSemiBold text-2xl text-red-500 my-4">${product.price}</p>
          <p className="text-gray-600 text-lg font-outfitRegular my-4">{product.description}</p>
          <p className="text-lg font-outfitSemiBold my-4">Type : <span className="text-lg font-outfitRegular">{product.type}</span></p>
          <div className="flex gap-2 items-center my-5">
            <span class="relative flex size-3">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
              <span class="relative inline-flex size-3 rounded-full bg-green-600"></span>
            </span> 
            <span
              className={product.inStock ? "text-green-600 font-outfitLight text-md" : "text-red-600 font-outfitLight text-md"}
            >
           {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          {/* Available Sizes */}
          {product?.multipleQuantity && product?.quantityOptions.length > 0 && (
            <div className="flex items-center gap-3 my-3">
              <p className="text-lg font-outfitSemiBold">Sizes:</p>
              <div className="flex gap-3 ">
                {product?.quantityOptions &&
                  product?.quantityOptions?.length > 0 &&
                  product?.quantityOptions.map((size, index) => (
                    <span
                      key={index}
                      onClick={() => handleSizeSelect(size)} // Handle size selection
                      className={`px-4 py-2 text-sm rounded-full cursor-pointer font-outfitRegular ${
                        size === selectedSize
                          ? "bg-black text-white" // Selected size
                          : "bg-gray-200 text-black" // Non-selected size
                      }`}
                    >
                      {size}
                    </span>
                  ))}
              </div>
            </div>
          )}

          <div className="flex items-center space-x-4 my-3">
            <div className=" border border-gray-200 rounded-full flex items-center px-2 my-4">
            <button
              onClick={() => handleDecrement(product)}
              className={`  font-outfitRegular rounded text-gray-800 text-xl ${
                product?.inStock
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
              disabled={product?.outOfStock}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              min="1"
              readOnly={product?.outOfStock}
              className={`w-12 p-2 text-center text-md sm:text-xl appearance-none font-outfitRegular text-gray-800  ${
                product?.inStock
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
              onChange={(e) =>
                handleQuantityChange(
                  product,
                  Math.max(1, parseInt(e.target.value, 10) || 1) // Handle invalid input gracefully
                )
              }
            />
            <button
              onClick={() => handleIncrement(product)}
              className={`font-outfitRegular text-gray-800 rounded text-xl ${
                product?.inStock
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
              disabled={product?.outOfStock}
            >
              +
            </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCartClick}
              disabled={product?.outOfStock}
              className={`flex-1 px-12 py-3 font-outfitSemiBold bg-gray-200 hover:bg-black hover:text-white text-black  rounded-full w-72 sm:w-96 ${
                product?.inStock
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              Add to Cart
            </button>
          </div>
          <div>
            <button
              // onClick={handleAddToCartClick}
              className="bg-black text-white px-12 py-3 font-outfitSemiBold rounded-full w-full hover:bg-white hover:text-black border border-black"
            >
              Buy Now
            </button>
          </div>
          <div
            className="flex items-center justify-between cursor-pointer mt-16"
            onClick={() => setIsOverViewOpen(!isOverViewOpen)}
          >
            <h2 className="text-2xl font-outfitSemiBold text-gray-800">
              Overview
            </h2>
            {!isOverViewOpen ? <Plus size={20} /> : <Minus size={20} />}
          </div>
          {isOverViewOpen && (
            <div className="mt-4">
              <h1 className="text-md font-outfitRegular text-gray-500 ">{product.description}</h1>
            </div>
          )}
        </div>
      </div>
      {modalOpen && (
        <div
          className="fixed bg-white inset-0 flex items-center justify-center z-[2000]"
          onClick={() => setModalOpen(false)}
        >
          <div className="mt-8 p-4 pb-8 rounded-lg relative max-w-[600px] max-h-[400px] w-full h-full flex justify-center items-center">
            <ChooseOptionSlider sliderImages={product?.sliderImages} />
          </div>
          <button
            className="absolute top-10 right-10 text-gray-600 hover:text-black z-[20000]"
            onClick={() => setModalOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
      )}
      <CartDrawer isOpen={isCartDrawerOpen} onClose={toggleCartDrawer} />
    </div>
  );
};

export default ProductDetails;
