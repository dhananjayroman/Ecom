// src/components/PaymentMethod.jsx
import React from "react";
import "../css/PaymentMethod.css";

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="payment-method-container">
      <h3>💳 Choose Payment Option</h3>

      <div className="payment-option">
        <label onClick={() => setPaymentMethod("Card")}>
          <input
            type="radio"
            name="payment"
            value="Card"
            checked={paymentMethod === "Card"}
            onChange={() => {}}
          />
          Credit / Debit Card
        </label>
        {paymentMethod === "Card" && (
          <div className="payment-details">
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Card Holder Name" />
            <input type="text" placeholder="Expiry (MM/YY)" />
            <input type="password" placeholder="CVV" />
          </div>
        )}
      </div>

      <div className="payment-option">
        <label onClick={() => setPaymentMethod("UPI")}>
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={paymentMethod === "UPI"}
            onChange={() => {}}
          />
          UPI
        </label>
        {paymentMethod === "UPI" && (
          <div className="payment-details">
            <input type="text" placeholder="Enter UPI ID (e.g. name@upi)" />
            <p className="note">We'll request payment via your UPI app.</p>
          </div>
        )}
      </div>

      <div className="payment-option">
        <label onClick={() => setPaymentMethod("CashOnDelivery")}>
          <input
            type="radio"
            name="payment"
            value="CashOnDelivery"
            checked={paymentMethod === "CashOnDelivery"}
            onChange={() => {}}
          />
          Cash on Delivery (COD)
        </label>
        {paymentMethod === "CashOnDelivery" && (
          <div className="payment-details">
            <p>Pay with cash when your order is delivered.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;

