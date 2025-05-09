import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../css/Home.css';
//import { CartContext } from './CartContext'; // adjust path if needed
import { CartContext } from '../Context/CartContext';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const { addToCart, getProductCount } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products]);

  const splitDescription = (description) => {
    return description.split('.').map((line, index) => (
      line.trim() && <p key={index}>{line.trim()}.</p>
    ));
  };

  return (
    <div className="home-container">
      <h2>Featured Products</h2>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-slideshow">
          <div className="product-item">
            <img
              src={products[currentProductIndex].image}
              alt={products[currentProductIndex].title}
              className="product-image"
            />
            <div className="product-info">
              <h3>{products[currentProductIndex].title}</h3>
              <div className="product-description">
                {splitDescription(products[currentProductIndex].description)}
              </div>
              <p><strong>${products[currentProductIndex].price}</strong></p>

              <div className="product-count">
                {getProductCount(products[currentProductIndex].id) > 0 ? (
                  <span>
                    In Cart: {getProductCount(products[currentProductIndex].id)}
                  </span>
                ) : (
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(products[currentProductIndex])}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;



