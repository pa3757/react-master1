import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Welcome to Product</h1>
      <p>Home Page</p>
      <Link to={"/"}>Home으로 이동</Link>
    </div>
  );
};

export default Product;
