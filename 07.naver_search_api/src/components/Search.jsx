import React, { useContext } from "react";
import { searchContext } from "../context/searchContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Search = () => {
  const { setSearch, setType } = useContext(searchContext);
  const navigate = useNavigate();

  const searchData = (e) => {
    setType(e);
    navigate("/search");
  };

  return (
    <div>
      <Button variant="success" onClick={() => searchData("news")}>
        뉴스
      </Button>
      <Button variant="warning" onClick={() => searchData("blog")}>
        블로그
      </Button>
      <Button variant="danger" onClick={() => searchData("encyc")}>
        백과사전
      </Button>
      <br></br>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default Search;
