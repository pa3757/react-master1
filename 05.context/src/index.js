import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';

// 실습) context 실습
// import App from "./Ex01";

// 실습2)
import App from "./Ex02";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
