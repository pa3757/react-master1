import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

/* 
    네트워크 비동기 통신을 위한 라이브러리
    1) fetchAPI
    : JavaScript에서 지원하는 라이브러리
    : 지원하지 않는 브라우저가 있기 때문에 확인 필요

    2) axios
    : React에서 사용하는 라이브러리
    : 대부분의 브라우저는 모두 지원
    : npm i axios 설치 → import axios from "axios"

    환경변수파일
    : URL, API Key, PORT 등 노출되면 안되는 값을 관리하는 환경변수 파일
    : .env 파일 생성 → 'REACT_APP_변수명=값'
    : 접근할 때  →  process.env.REACT_APP_변수명
*/

const Ex02 = () => {
  const movieUrl =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=" +
    process.env.REACT_APP_MOVIE_API_KEY +
    "&targetDt=20240424";

  const [movieList, setMovieList] = useState([]);

  console.log("API KEY : ", process.env.REACT_APP_MOVIE_API_KEY);

  const requestMovieData = async () => {
    const response = await fetch(movieUrl);
    const jsonData = await response.json();
    console.log(jsonData);

    // setMovieList(jsonData.boxOfficeResult.dailyBoxOfficeList);
  };

  const requestMovieData2 = async () => {
    const response = await axios.get(movieUrl);
    console.log(response.data);
    setMovieList(response.data.boxOfficeResult.dailyBoxOfficeList);
  };

  useEffect(() => {
    requestMovieData();
    requestMovieData2();
  }, []);

  return (
    <div>
      <h1>영화 순위</h1>
      {movieList.map((item, index) => (
        <p>
          {item.rank}.{item.movieNm}|{item.openDt}
        </p>
      ))}
    </div>
  );
};

export default Ex02;
