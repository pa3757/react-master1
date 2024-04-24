import React, { useState, useRef } from "react";

const App2 = () => {
  // dataSet
  const [array, setArray] = useState(["짜장면", "짬뽕", "탕수육", "냉면"]);

  const input = useRef();
  const addArr = () => {
    // 인풋태그에 있는 값을 가져와서
    // input.current.value
    // array에 추가

    // state 불변성 : 이전 state값은 변경되서는 안된다
    // push : 기존에 있던 배열에 데이터를 추가해서 기존배열 바꿔줌
    // concat : 기존에 있던 배열에 데이터를 추가해서 새로운 배열을 만들어줌

    // State 배열에 데이터를 추가해줄 때는 concat
    setArray([...array, input.current.value]);
  };
  return (
    <div>
      <ul>
        {/*map : 배열에 있는 요소들을 특정 규칙에 맞게끔 바꿔서 새로운 배열을 생성하는 기능 */}
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {/*filter : 배열에 특정 조건을 줘서 조건에 부합하는 요소들만 뽑음 */}
        {array
          .filter((item, index) => item !== "짬뽕")
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      <hr></hr>
      <ul>
        {/*짬뽕과 냉면을 제외하고 출력해주세요! */}
        {array
          .filter((item, index) => item !== "짬뽕" && item !== "냉면")
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      <hr></hr>
      <ul>
        {array.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>

      <input ref={input} />
      <button onClick={() => addArr()}>메뉴 추가</button>
    </div>
  );
};

export default App2;
