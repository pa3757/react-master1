import React, { useState, useEffect } from "react";
import "./App.css";
import { useRef } from "react";

/*
  useEffect() : 리액트 컴포넌트가 렌더링 될 때마다 특정 시점에 작업을
  처리해주는 리액트 훅 함수

  [특정시점 - LifeCycle]
  1. Mount : 컴포넌트가 화면에 나타나는 시점 ex) 최초 1회 호출, 초기화 로직 or API호출
  2. Update : 컴포넌트 내 데이터가 업데이트되는 시점 ex) props, state에 대한 변화 발생
  3. UnMount : 컴포넌트가 종료되는 시점 ex) 자원해제, state초기화 등

  useEffect() 구조

  1. useEffect(()=>{실행할 로직})
  : 렌더링 될 때마다 호출
  2. useEffect(()>{실행할 로직},[state, ...])
  : []안에 정의한 state를 감시하고 변화가 발생하면 실행
  3. useEffect(()=>{실행할로직, []})
  : 렌더링 시 최초 1회 실행
*/

const App = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");
  const inputRef = useRef();

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = () => {
    setVal(inputRef.current.value);
  };

  // state가 변하면 컴포넌트가 리렌더링되서 아래 콘솔이 실행된다
  // 렌더링 될 때마다 실행
  useEffect(() => {
    console.log("mount");
  });
  //'count' state가 변경될 때마다 실행
  useEffect(() => {
    console.log("count update");
  }, [count]);
  // 'val' state가 변경될 때마다 실행
  useEffect(() => {
    console.log("val update");
  }, [val]);
  // 하나 이상의 state가 변경될 때마다 실행
  useEffect(() => {
    console.log("count update");
    console.log("val update");
  }, [count, val]);

  return (
    <div>
      <h1>useEffect</h1>
      <p>Count 변화 : {count}</p>
      <button onClick={handleClick}>클릭</button>

      <div>
        <input ref={inputRef} onChange={handleChange} />
        <p>{val}</p>
      </div>
    </div>
  );
};

export default App;
