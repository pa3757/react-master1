import React from "react";

import Button from "./Button";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  // 하위 컴포넌트에서 context를 접근하는 방법
  // : useContext(Context객체)를 사용하여 객체형태로 state, setState()를 저장하여 사용
  // []가 아닌 {}를 사용
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <h1>Context실습</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <Button />
    </div>
  );
};

export default Counter;
