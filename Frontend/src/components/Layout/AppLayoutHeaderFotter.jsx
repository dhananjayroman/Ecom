import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../UI/Header"
import Footer from "../UI/Footer"

export const AppLayoutHeaderFooter = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Header />}
      <main>
        <Outlet />
      </main>
      {!isLoginPage && <Footer />}
    </>
  );
};





