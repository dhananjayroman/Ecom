import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    const totalAmount = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const orderData = {
      totalAmount,
      items: cartItems,
    };

    try {
      await axios.post("https://ecom-arhe.onrender.com/order", orderData);
      alert("✅ Order placed successfully!");
      navigate("/order-success");
      console.log(orderData);
    } catch (err) {
      console.error(err);
      alert("❌ Error placing order");
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-msg">No items in the cart.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} className="cart-img" />
                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p><strong>Brand:</strong> {item.brand}</p>
                  <p><strong>Price:</strong> ₹{item.price}</p>
                  <p><strong>Category:</strong> {item.category}</p>
                  <p><strong>Stock Status:</strong> {item.availabilityStatus || "In Stock"}</p>
                  <p><strong>Return Policy:</strong> {item.returnPolicy || "No Info"}</p>

                  {/* ✅ FIXED RATING OBJECT */}
                  <p><strong>Rating:</strong> {item.rating?.rate} ⭐ ({item.rating?.count} reviews)</p>

                  <p><strong>Quantity:</strong>
                    <button className="qty-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                  </p>

                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="cart-total">Total: ₹{total.toFixed(2)}</h3>

          <button className="place-order-btn" onClick={handlePlaceOrder}>
            ✅ Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;






