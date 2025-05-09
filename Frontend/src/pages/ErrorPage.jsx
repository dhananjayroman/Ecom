import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-cartoon-page">
      <div className="cartoon-container">
        <img
          src="https://assets7.lottiefiles.com/private_files/lf30_m6j5igxb.json"
          alt="Shopping Cart Animation"
          className="cartoon-animation"
        />
        <h1 className="error-title">Oops! Page Not Found</h1>
        <p className="error-message">
          Looks like you’re lost in the mall. Let’s get you back on track!
        </p>
        <button className="home-btn" onClick={() => navigate("/home")}>
          🛍️ Back to Shop
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

