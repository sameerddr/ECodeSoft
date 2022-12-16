import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Content from "../Content/Content";

const Home = ({ sets }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sets(false);
    navigate("/");
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <Content />
    </>
  );
};

export default Home;
