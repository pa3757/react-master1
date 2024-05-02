import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Join from "./components/Join";
import MyWebToon from "./components/MyWebToon";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/webtoon" element={<MyWebToon />} />
      </Routes>
    </div>
  );
};

export default App;
