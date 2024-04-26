import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);

  const styled = {
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
  };

  return (
    <div className="content" style={styled}>
      정처기합격은 수제비
    </div>
  );
};

export default Content;
