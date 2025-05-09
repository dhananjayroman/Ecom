import React, { useState, useContext } from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("isLoggedIn"); // or any auth token
  navigate("/"); // Redirect to login
};


  return (
    <header className="header">
      <div className="header-logo">MyShop</div>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={`header-nav ${menuOpen ? "active" : ""}`}>
      {/* <li><NavLink to="/" activeclassname="active">Login</NavLink></li> */}
        <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
        <li><NavLink to="/product" activeclassname="active">Products</NavLink></li>
        
        <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>

      </ul>

      {/* Show only on Product page */}
      {location.pathname === "/product" && (
        <div className="header-search">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="styled-search"
          />
        </div>
      )}

      <div className="header-cart">
        <NavLink to="/cart"><span>🛒 Cart</span></NavLink>
      </div>
    </header>
  );
};

export default Header;
