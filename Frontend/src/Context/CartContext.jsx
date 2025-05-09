import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        // If the product is already in the cart, increase quantity
        const updatedItems = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        alert(`${product.title} quantity increased to ${itemExists.quantity + 1}`);
        return updatedItems;
      } else {
        // If the product is not in the cart, add it
        const newItem = { ...product, quantity: 1 };
        alert(`${product.title} added to cart`);
        return [...prevItems, newItem];
      }
    });
  };

  // Remove item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(item => item.id !== id);
      alert("Item removed from cart");
      return updatedItems;
    });
  };

  // Increase quantity of a product in the cart
  const increaseQuantity = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      alert("Quantity increased!");
      return updatedItems;
    });
  };

  // Decrease quantity of a product in the cart
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
      alert("Quantity decreased!");
      return updatedItems;
    });
  };

  const getProductCount = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };
  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getProductCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


