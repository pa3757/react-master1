import React from "react";
import { useState } from "react";

const Ex01 = () => {
  //특별한 변수를 만드는 방법
  // --> 값이 바뀔때마다 화면에 적용 되어질 변수를 만드는 방법
  // number : 실제 값을 가지고 있는 변수(state값)
  // setNumber : state값을 바꿀수 있는 기능

  const [number, setNumber] = useState(0);

  let plus = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <div>{number}</div>
      <button onClick={plus}>PLUS</button>
    </div>
  );
};

export default Ex01;
