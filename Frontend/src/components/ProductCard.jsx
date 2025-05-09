import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useContext(CartContext);

  // Ensure cart is an array even if it's undefined
  const cartItems = cart || []; // Default to an empty array if cart is undefined

  // Find if the product already exists in the cart
  const productInCart = cartItems.find(item => item.id === product.id);
  const productCount = productInCart ? productInCart.quantity : 0;

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">₹ {product.price}</p>
        <p className="product-rating">⭐ {product.rating}</p>
        <p className={`availability ${product.availabilityStatus === 'Low Stock' ? 'low-stock' : 'in-stock'}`}>
          {product.availabilityStatus}
        </p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Return Policy:</strong> {product.returnPolicy}</p>

        {/* Show the product count */}
        <div className="product-count">
          {productCount > 0 ? (
            <span>In Cart: {productCount}</span>
          ) : (
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;











