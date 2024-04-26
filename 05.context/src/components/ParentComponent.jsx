import React from "react";
import ChildComponent1 from "./ChildComponent1";
import { useContext } from "react";
import { InputContext } from "../context/inputContext";

const ParentComponent = () => {
  console.log("ParentComponent 렌더링");
  const { setContent } = useContext(InputContext);
  return (
    <div>
      <ChildComponent1 />
      <input type="text" onChange={(e) => setContent(e.target.value)} />
    </div>
  );
};

export default ParentComponent;
