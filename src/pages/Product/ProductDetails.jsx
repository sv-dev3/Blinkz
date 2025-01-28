import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyData } from "src/helpers/dummyData";
// import { dummyData } from "./dummyData"; // Import your dummyData array

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setLoading(true); // Start loading
    // Simulate a delay to mimic fetching from an API
    setTimeout(() => {
      const foundProduct =
        dummyData &&
        dummyData.find(
          (item) => item.id.toString() === id.toString() // Convert id to number for comparison
        );
      setProduct(foundProduct);
      setLoading(false); // Stop loading
    }, 500); // Adjust delay as needed
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  if (!product) {
    return <div>Product not found.</div>; // Display message if product is not found
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} height={100} width={100} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discount}</p>
      <p>Type: {product.type}</p>
      <p>In Stock: {product.inStock ? "Yes" : "No"}</p>
      <p>Out of Stock: {product.outOfStock ? "Yes" : "No"}</p>
      {product.multipleQuantity && (
        <div>
          <p>Available Sizes:</p>
          <ul>
            {product.quantityOptions.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
        </div>
      )}
      {product.tags && product.tags.length > 0 && (
        <div>
          <p>Tags:</p>
          <ul>
            {product.tags.map((tag, index) => (
              <li key={index}>
                {tag.type}: {tag.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
