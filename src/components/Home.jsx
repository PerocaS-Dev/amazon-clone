import React from "react";
import { Route } from "react-router-dom";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61lWAhb4teL._SX3000_.jpg"
          alt=" mothers day image"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
