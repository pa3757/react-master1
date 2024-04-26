import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Welcome to Product</h1>
      <p>Home Page</p>
      <Link to={"/home"}>Home으로 이동</Link>
      <br />
      <Link to={"/detail?1"}>첫번째 제품 상세보기</Link>
      <br />
      <Link to={"/detail?num=2"}>두번째 제품 상세보기</Link>
      <br />
      <Link to={"/detail?num=3"}>세번째 제품 상세보기</Link>
    </div>
  );
};

export default Product;
