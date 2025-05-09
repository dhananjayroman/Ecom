import React from "react";
import "../css/OrderSuccess.css";

const OrderSuccess = () => {
  const particleCount = 30; // Number of particles

  return (
    <div className="order-success-container">
      <div className="order-card">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Thank you for shopping with us.</p>
        <p>Your order will be delivered soon. 🚚</p>
      </div>

      <div className="particles">
        {Array.from({ length: particleCount }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: i % 2 === 0 ? "#4caf50" : "#81c784",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default OrderSuccess;

