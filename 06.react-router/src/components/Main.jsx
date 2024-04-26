import React from "react";
import { useContext } from "react";
import { JoinContext } from "../context/JoinContext";
import { Link } from "react-router-dom";

const Main = () => {
  const { nick } = useContext(JoinContext);
  return (
    <div>
      <h1>Main</h1>
      <p>{nick}님 환영합니다</p>
      <Link to={"/home"}>home으로이동</Link>
    </div>
  );
};

export default Main;
