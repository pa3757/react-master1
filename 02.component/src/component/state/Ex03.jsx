import React, { useState, useRef } from "react";
/* React Hook 사용법 
1. 사용하고자하는 hook을 import 해줘야 한다.
*/
const Ex03 = () => {
  // 2. 기능을 컴포넌트안에 있는 변수에 담아주기
  const input = useRef();
  // input태그에 적은 값을 가져와서 화면에 반영시킬 state
  const [inputText, setInputText] = useState(0);
  return (
    <div>
      <h1>Input태그 다루기</h1>
      {/*<input type="text" ref={input} /> ==> input변수를 통해서 input태그에 매칭 시켜주겠다*/}
      <input
        type="text"
        ref={input}
        onChange={() => setInputText(input.current.value)}
      />
      {/*input.current == document.querySelector('input')*/}
      <h1>{inputText}</h1>
    </div>
  );
};

export default Ex03;
