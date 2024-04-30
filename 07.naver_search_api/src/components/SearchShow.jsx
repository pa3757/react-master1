import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { searchContext } from "../context/searchContext";

const Searchshow = () => {
  const [data, setData] = useState([]);
  const { type, search } = useContext(searchContext);

  const getSearchData = async () => {
    const url = `v1/search/${type}.json`;
    const option = {
      headers: {
        "X-Naver-Client-Id": "ZCfRIw7Wpu_0ag4fnzdc",
        "X-Naver-Client-Secret": "gyhmonhC3q",
      },
      params: {
        query: search,
      },
    };
    const res = await axios.get(url, option);

    console.log(res.data.items);

    setData(res.data.items);
  };

  useEffect(() => {
    getSearchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Searchshow;
