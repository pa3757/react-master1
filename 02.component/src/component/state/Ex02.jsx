import { useState, useRef } from "react";
import React from "react";
// let num1 = prompt("첫번째 숫자를 입력하세요.");
// let num2 = prompt("두번째 숫자를 입력하세요.");
const Ex02 = () => {
  // result : state값을 가지는 변수
  // setResult : state 변수를 바꿀 수 있는 함수
  // 주의! state 값이 바뀌어지면 --> 컴포넌트가 재랜더링 된다!

  const [result, setResult] = useState(0);
  const num1 = useRef();
  const num2 = useRef();
  // let input = document.querySelectorAll("input");
  // let num1 = input[0].value;
  // let num2 = input[1].value;
  // result = num1+num2;
  // input태그에 적은 값 가져오기
  // document.querySelectorAll("input") --> "input" 이라는 선택자를 통해서
  // 검색된 태그들을 배열로 담아서 가지고 옴
  // document : 웹문서(html)
  // React에서 태그를 가져올 때 document를 통한 태그 선택은
  // 절대 권장하지 않음

  const minus = () => {
    setResult(parseInt(num1.current.value) - parseInt(num2.current.value));
  };
  const multiply = () => {
    setResult(parseInt(num1.current.value) * parseInt(num2.current.value));
  };
  const divide = () => {
    setResult(parseInt(num1.current.value) / parseInt(num2.current.value));
  };

  return (
    <div>
      {/* es6문법 */}
      Num1 : <input ref={num1} />
      <br />
      Num2 : <input ref={num2} />
      <br />
      <button
        onClick={() =>
          setResult(parseInt(num1.current.value) + parseInt(num2.current.value))
        }
      >
        +
      </button>
      <button onClick={minus}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      <p>{result}</p>
    </div>
  );
};

export default Ex02;
