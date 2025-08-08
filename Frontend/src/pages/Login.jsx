import React, { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    try {
  // eslint-disable-next-line no-unused-vars
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
    phoneNumber: phone,
  });

  localStorage.setItem("isLoggedIn", "true"); // Store login state
  alert("Login success");
  navigate("/home"); // Redirect to home after login
} catch (error) {
  console.error("Login failed:", error.response?.data?.message || error.message);
  setError("Login failed. Please try again.");
}
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="icon-circle">
          <i className="fas fa-camera"></i>
        </div>
        <h2>Log in for MyShop</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="country-code">+91</span>
            <input
              type="tel"
              maxLength="10"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value.replace(/\D/g, ""));
                setError("");
              }}
              required
            />
          </div>
          {error && <p className="error-msg">{error}</p>}
          <button type="submit" className="submit-btn" disabled={!phone}>
            Continue
          </button>
        </form>
        <p className="terms">
          By continuing, you confirm that you are above 18 years of age and agree to the Flipkart's{" "}
          <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;








