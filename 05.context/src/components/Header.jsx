import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);

  const styled = {
    backgroundColor: isDark ? "black" : "lightgray",
    color: isDark ? "white" : "black",
  };
  return (
    <div className="header" style={styled}>
      <h1>Welcome Cloud 2nd</h1>
    </div>
  );
};

export default Header;
