import React from "react";
import Page from "./components/Page";
import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Ex02 = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </div>
  );
};

export default Ex02;
