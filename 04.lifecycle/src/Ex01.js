import React, { useState, useEffect } from "react";

/*
  실습 ) 참참참 게임
  - Rule
  1. 유저는 공격, 컴퓨터는 수비
  2. 유저가 '좌','정면','우' 버튼을 클릭했을 때, 유저와 컴퓨터의 선택이 같다면
  유저의 승리!
  3. 방향이 다르면 컴퓨터의 승리!

  - 유저와 컴퓨터의 선택, 게임결과를 가진 state 생성(useState())
  - 유저가 '좌','정면','우' 중에 하나를 클릭 -> 유저의 state에 업데이트(event객체 or useRef())
  - 컴퓨터는 3가지의 방향을 랜덤으로 생성 -> 컴퓨터의 state에 업데이트(Math.random())
  - 유저가 선택한 방향의 값으로 state가 변경되면 승패를 판단 
  -> 결과를 state에 업데이트 (useEffect())
  - 게임결과를 화면에 출력
*/

const data = ["좌", "정면", "우"];

const Ex01 = () => {
  const [user, setUser] = useState(null);
  const [com, setCom] = useState(null);
  const [result, setResult] = useState(null);

  const choice = (index) => {
    setUser(data[index]);
    setCom(data[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    if (user && com) {
      if (user === com) {
        setResult("유저승리");
      } else {
        setResult("컴퓨터승리");
      }
    }
  }, [user, com]);

  return (
    <div>
      <h1>참참참 게임</h1>
      <h3>나의 선택 : {user}</h3>
      <h3>컴퓨터 선택 : {com}</h3>
      <p>게임결과 : {result}</p>
      {data.map((item, index) => (
        <button key={index} onClick={() => choice(index)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Ex01;
