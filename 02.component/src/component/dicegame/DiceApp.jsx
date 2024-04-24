import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ButtonArea from "./ButtonArea";
import BoardArea from "./BoardArea";
import "./dice.css";

const DiceApp = () => {
  // '나' 와 '컴퓨터'에 대한 정보를 가진 state 생성
  const [user, setUser] = useState({
    name: "나",
    diceNum: 1,
    score: 0,
    imgPath: "./img/dice1.png",
  });
  const [com, setCom] = useState({
    name: "컴퓨터",
    diceNum: 1,
    score: 0,
    imgPath: "./img/dice1.png",
  });
  const throwDice = () => {
    // 랜덤숫자 생성 --> 비교, 주사위 이미지값
    // Math.random() : 0.000 ~ 0.999 실수를 생성하는 함수
    // Math.floor(실수) : 소수점 버리는 함수
    let userDiceNum = Math.floor(Math.random() * 6) + 1;
    let comDiceNum = Math.floor(Math.random() * 6) + 1;
    let userScore = user.score;
    let comScore = com.score;
    // 두 주사위 눈 비교
    // 1) 동일한 숫자일 때 -> '무승부' 출력
    // 2) '나'의 숫자가 클 때 -> user의 score +1
    // 3) '컴퓨터'의 숫자가 클 때 -> com의 score +1
    if (userDiceNum === comDiceNum) {
      alert("무승부!");
    } else if (userDiceNum > comDiceNum) {
      userScore += 1;
    } else {
      comScore += 1;
    }

    // 결과값을 state에 반영 -> 웹 페이지의 정보를 업데이트
    // {...user} -> {name:'',diceNum:1,score:0,imgPath:''} 분할 -> spread연산자
    //* 배열에서도 활용
    setUser({
      ...user,
      diceNum: userDiceNum,
      score: userScore,
      imgPath: `./img/dice${userDiceNum}.png`,
    });
    setCom({
      ...com,
      diceNum: comDiceNum,
      score: comScore,
      imgPath: `./img/dice${comDiceNum}.png`,
    });
  };

  // 초기화 기능 구현하기
  // 함수명 : initDice
  const initDice = () => {
    setUser({
      ...user,
      diceNum: 1,
      score: 0,
      imgPath: "./img/dice1.png",
    });
    setCom({
      ...com,
      diceNum: 1,
      score: 0,
      imgPath: "./img/dice1.png",
    });
  };

  return (
    <div className="container">
      <h1>주사위 게임</h1>
      <ButtonArea onclick={throwDice} init={initDice} />
      <BoardArea user={user} com={com} />
    </div>
  );
};

export default DiceApp;
