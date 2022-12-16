import React from "react";
import Login from "../Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Auth from "../Auth/Auth";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} end />\{" "}
      </Routes>
    </div>
  );
};

export default Layout;
