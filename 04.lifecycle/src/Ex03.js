import React, { useState, useEffect } from "react";
import api from "./api";

const Ex03 = () => {
  const [movieList, setMovieList] = useState([]);
  const movieUrl =
    "/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=" +
    process.env.REACT_APP_MOVIE_API_KEY +
    "&targetDt=20240424";
  const requestMovieData2 = async () => {
    const response = await api.get(movieUrl);
    console.log(response.data);
    setMovieList(response.data.boxOfficeResult.dailyBoxOfficeList);
  };
  useEffect(() => {
    requestMovieData2();
  }, []);
  return (
    <div>
      <h1>영화 순위</h1>
      {movieList.map((item) => (
        <p key={item.rank}>
          {item.rank}.{item.movieNm} | {item.openDt}
        </p>
      ))}
    </div>
  );
};
export default Ex03;
