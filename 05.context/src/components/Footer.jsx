import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const styled = {
    backgroundColor: isDark ? "black" : "lightgray",
    color: isDark ? "white" : "black",
  };
  return (
    <div className="footer" style={styled}>
      <button className="button" onClick={() => setIsDark(!isDark)}>
        {isDark ? "White Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Footer;
