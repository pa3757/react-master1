// 컴포넌트 구조 자동생성 명령어 : rafce
import React from "react";

const name = prompt("이름을 말해주세요");
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const Ex02 = () => {
  if (month >= 3) {
    return (
      <div>
        <h1>
          {year}.{month}.{day}.
        </h1>
        <hr />
        <p>{name}님 지금은 봄입니다. 좋은 하루 보내세요!</p>
      </div>
    );
  } else if (month >= 6) {
    return (
      <div>
        <h1>
          {year}.{month}.{day}.
        </h1>
        <hr />
        <p>{name}님 지금은 여름입니다. 좋은 하루 보내세요!</p>
      </div>
    );
  } else if (month >= 9) {
    return (
      <div>
        <h1>
          {year}.{month}.{day}.
        </h1>
        <p>{name}님 지금은 가을입니다. 좋은 하루 보내세요!</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          {year}.{month}.{day}.
        </h1>
        <p>{name}님 지금은 겨울입니다. 좋은 하루 보내세요!</p>
      </div>
    );
  }
};
export default Ex02;
