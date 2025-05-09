import React, { useContext, useMemo } from "react";
import { SearchContext } from "../Context/SearchContext";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = ({ products }) => {
  const { searchTerm } = useContext(SearchContext);

  // Efficient filtering using useMemo
  const filteredProducts = useMemo(() =>
    products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [products, searchTerm]);

  return (
    <div className="product-list-container">
      {filteredProducts.length > 0 ? (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="no-results">😔 No products found. Try another search!</p>
      )}
    </div>
  );
};

export default ProductList;












