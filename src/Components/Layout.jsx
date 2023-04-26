import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
