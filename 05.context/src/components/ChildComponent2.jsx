import React from "react";
import { useContext } from "react";
import { InputContext } from "../context/inputContext";

const ChildComponent2 = () => {
  console.log("ChildComponent2 렌더링");
  const { content } = useContext(InputContext);
  return <div>{content}</div>;
};

export default ChildComponent2;
