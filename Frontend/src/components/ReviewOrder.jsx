import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/ReviewOrder.css";
import PaymentMethod from "./PaymentMethod"; // <-- Import here

const ReviewOrder = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [offerApplied, setOfferApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = offerApplied ? total * 0.9 : total;

  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      alert("⚠️ Please select a payment method.");
      return;
    }

    const orderData = {
      totalAmount: discountedTotal,
      paymentMethod,
      items: cartItems,
    };

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/order`, orderData);
      alert("✅ Order placed successfully!");
      navigate("/order-success");
    } catch (err) {
      console.error("❌ Error placing order:", err);
      alert("❌ Error placing order");
    }
  };

  return (
    <div className="review-container">
      <h2>🧾 Review Your Order</h2>
      <ul className="review-list">
        {cartItems.map((item) => (
          <li key={item.id} className="review-item">
            <span>{item.title} x {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </li>
        ))}
      </ul>

      <div className="offer-section">
        <h4>🎁 Offers</h4>
        <p>Use code <strong>FESTIVE10</strong> for 10% off</p>
        {!offerApplied && (
          <button onClick={() => setOfferApplied(true)}>Apply FESTIVE10</button>
        )}
        {offerApplied && <p className="success">✅ Offer applied</p>}
      </div>

      <PaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />

      <h3>Total: ₹{discountedTotal.toFixed(2)}</h3>

      <button className="final-order-btn" onClick={handlePlaceOrder}>
        ✅ Confirm & Place Order
      </button>
    </div>
  );
};

export default ReviewOrder;

