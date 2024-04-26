import React, { useState } from "react";
import Counter from "./components/Counter";
import { CounterContext } from "./context/CounterContext";

const App = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("hello react");
  return (
    <div>
      {/* context 사용방법
          : 생성된 context 객체를 불러온 후에 .Provider 속성을 활용해서 전역 state를
          하위 컴포넌트로 전달 -> value속성에 객체형태로 정의
          : 모든 하위 컴포넌트에서 state를 접근할 수 있게 된다.
          : 전달하는 값은 state뿐만 아니라, setState()도 같이 전달 가능 
       */}
      <CounterContext.Provider value={{ count, setCount, msg }}>
        <Counter />
      </CounterContext.Provider>
    </div>
  );
};

export default App;
