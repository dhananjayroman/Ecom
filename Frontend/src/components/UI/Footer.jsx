import React from "react";
import "./Footer.css"; // Import the footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out to us for support, inquiries, or just to say hello.</p>

      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>

      <div className="footer-social">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>

      <p className="small-text">© 2025 MyShop, All rights reserved.</p>
    </footer>
  );
};

export default Footer;

