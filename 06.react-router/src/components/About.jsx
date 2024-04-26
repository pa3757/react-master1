import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Welcome to About</h1>
      <p>Home Page</p>
      <Link to="/home">Home으로 이동</Link>
    </div>
  );
};

export default About;
