import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>🛍️ Welcome to ShopSmart</h1>
        <p>
          Your one-stop destination for smart, seamless, and satisfying online
          shopping. Whether you're looking for the latest gadgets, stylish
          fashion, or home essentials, we’ve got you covered.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-box">
          <div className="icon">🛒</div>
          <h3>Smart Cart</h3>
          <p>Add and update products effortlessly.</p>
        </div>
        <div className="feature-box">
          <div className="icon">💳</div>
          <h3>Secure Checkout</h3>
          <p>100% safe and easy payments.</p>
        </div>
        <div className="feature-box">
          <div className="icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Quick delivery to your doorstep.</p>
        </div>
        <div className="feature-box">
          <div className="icon">🔁</div>
          <h3>Easy Returns</h3>
          <p>Hassle-free 7-day return policy.</p>
        </div>
      </div>

      <div className="developer-box">
        <h2>👨‍💻 Meet the Developer</h2>
        <p>
          This app is developed by <strong>Dhananjay Roman</strong>, a
          passionate frontend developer who loves creating modern and intuitive
          web experiences. Built with React, Node.js, and MongoDB.
        </p>
      </div>
    </div>
  );
};

export default About;




