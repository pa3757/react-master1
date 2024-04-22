import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

// 컴포넌트 불러오기
// Menu 컴포넌트를 App이라는 이름으로 불러와서 사용하겠다!
// import App from "./component/Menu";
// import App from "./component/MyTeam";

// EX01 -- useState
import App from "./component/state/Ex01";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* props : 컴포넌트를 사용할 때 데이터를 전달하는 방법 */}
    {/* <App menu={"아메리카노"} price={4100} />
    <App menu={"카페라떼"} price={4500} /> */}
    {/* <App myteam={"PM,AWS"} name={"손준수"} />
    <App myteam={"FrontEnd"} name={"구희철"} />
    <App myteam={"Modeling"} name={"남예하"} />
    <App myteam={"BackEnd"} name={"문성진"} /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
