import React from "react";
import { Link } from "react-router-dom";
import "../css/OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="amazon-order-success">
      <div className="success-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          alt="success"
          className="success-icon"
        />
        <h2>Your order has been placed!</h2>
        <p>Thank you for shopping with us. A confirmation email has been sent.</p>
        <p className="delivery">Expected Delivery: <strong>3–5 business days</strong></p>

        <Link to="/" className="back-home-btn">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default OrderSuccess;


