import React, { useState } from "react";
//useState : 함수형 컴포넌트에서 state값을 만들어주는 함수
//React-Hook : 리액트에서 미리 만들어 놓은 기능

const Ex01 = () => {
  //특별한 변수를 만드는 방법
  // --> 값이 바뀔때마다 화면에 적용 되어질 변수를 만드는 방법
  // number : 실제 값을 가지고 있는 변수(state값)
  // setNumber : state값을 바꿀수 있는 기능

  // state : 값바뀔때마다 컴포넌트에 렌더링 되어진다.
  // : 사용자에게 보여지는 화면에 적용 되어진다.
  const [number, setNumber] = useState(0);

  let plus = () => {
    //setState --> 클로저 함수(함수 제일 마지막에 실행되어진다)
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
