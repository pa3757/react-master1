import React, { useState } from "react";
import Search from "./components/Search";
import { Route, Routes } from "react-router-dom";
import { searchContext } from "./context/searchContext";
import SearchShow from "./components/SearchShow";

const App = () => {
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  return (
    <div>
      <h1>Naver Search API</h1>
      <searchContext.Provider value={{ type, search, setType, setSearch }}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<SearchShow />} />
        </Routes>
      </searchContext.Provider>
    </div>
  );
};

export default App;
