import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList"; // ProductList Component
import Home from "./pages/Home"; // Home page component
import About from "./pages/About"; // About page component
import Contact from "./pages/Contact"; // Contact page component
import Cart from "./pages/Cart"; // Cart page component
import OrderSuccess from "./pages/OrderSuccess"; // OrderSuccess page component
import Login from "./pages/Login"; // Login page component
import { AppLayoutHeaderFooter } from "./components/Layout/AppLayoutHeaderFotter"; // Layout Component
import { SearchProvider } from "./Context/SearchContext"; // Search Context
import "./App.css"; // App styling

import ErrorPage from "./pages/ErrorPage";
import { CartContext, CartProvider } from "./Context/CartContext";
import ReviewOrder from "./components/ReviewOrder";


const App = () => {
  const [products, setProducts] = useState([]); // State to store products

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products"); // API call to fetch products
      const data = await res.json(); // Parsing response as JSON
      return data.products; // Returning the products
    } catch (error) {
      console.error("API fetch error:", error); // Logging any errors
      return null; // Returning null in case of error
    }
  };

  // Fetch products on initial render
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(); // Fetch products
      if (data) {
        setProducts(data); // Update the products state
      }
    };
    getProducts(); // Call the function to fetch products
  }, []);

  // Define the router with React Router v6
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayoutHeaderFooter />,
      errorElement:<ErrorPage/>,
     // Layout component wrapping the entire app
      children: [
        {
          path: "/", 
          element: <Login />, // Route for login page
        },
        {
          path: "home",
          element: <Home/>
        },
        
        {
          path: "product", // Product route (No protection)
          element: <ProductList products={products} />, // Render product list
        },
        {
          path: "about",
          element: <About />, // Route for about page
        },
        {
          path: "contact",
          element: <Contact />, // Route for contact page
        },
        {
          path: "cart", // Cart route (No protection)
          element: <Cart />, // Render cart page
        },
        {
          path: "order-success", // Order success route (No protection)
          element: <OrderSuccess />, // Render order success page
        },
        {
          path:"/review-order",
          element:<ReviewOrder/>
        }
      
      ],
    },
  ]);

  return (
    <CartProvider>
    <SearchProvider>
      {/* Wrapping the app with the search context provider */}
      <RouterProvider router={router} /> {/* Setting up routing */}
    </SearchProvider>
    </CartProvider>
  );
};

export default App;