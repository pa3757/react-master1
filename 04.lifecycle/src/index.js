import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';

// 실습 1) 참참참 게임 만들기
// import App from "./Ex01";

// 실습 2) OpenAPI 요청 실습
// import App from "./Ex02";

// 날씨api
import App from "./App2";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
