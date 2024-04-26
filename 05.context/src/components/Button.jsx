import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Button = () => {
  const { count, setCount, msg } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <p>{msg}</p>
    </div>
  );
};

export default Button;
