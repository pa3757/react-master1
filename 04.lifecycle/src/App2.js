import React from "react";
import Weather from "./component/Weather";
import Detail from "./component/Detail";
import "./App.css";
import { useState } from "react";

const App2 = () => {
  const [info, setInfo] = useState();
  // Weather 컴포넌트에서 날씨데이터를 받아 왔을 때
  // Info에 저장이 되어야 한다.

  return (
    <div>
      <Weather set={setInfo} />
      <Detail val={info} />
    </div>
  );
};

export default App2;
