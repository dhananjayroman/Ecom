import React, { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";

const products = [
  { id: 1, name: "iPhone 14", price: "$799" },
  { id: 2, name: "Samsung Galaxy S23", price: "$749" },
  { id: 3, name: "OnePlus 11", price: "$699" },
  { id: 4, name: "Google Pixel 7", price: "$599" },
  // Add more products here
];

const Product = () => {
  const { searchTerm } = useContext(SearchContext);

  // Filter based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>All Products</h2>
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id}>
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </li>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default Product;

