import React from "react";
import ParentComponent from "./components/ParentComponent";
import { useState } from "react";
import { InputContext } from "./context/inputContext";

const Ex01 = () => {
  const [content, setContent] = useState("");
  console.log(content);
  return (
    <div>
      <InputContext.Provider value={{ content, setContent }}>
        <ParentComponent />
      </InputContext.Provider>
    </div>
  );
};

export default Ex01;
