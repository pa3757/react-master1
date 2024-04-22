// 컴포넌트 생성 규칙
// 1. 반드시 시작 이름의 첫 문자는 대문자 이어야만 한다!!
// 2. 함수형 컴포넌트 또는 클래스 컴포넌트
// 컴포넌트 -- 사용자 정의
// function Menu() {
//   return (
//     <div>
//       <h1>Menu</h1>
//     </div>
//   );
// }

import React from "react";

// props : 전달받은 데이터(객체형식)
const Menu = (props) => {
  console.log(props);
  // {menu: "아메리카노"}
  // {menu: "카페라떼"}
  return (
    <div>
      <h1>{props.menu}</h1>
      <p>{props.price}</p>
    </div>
  );
};

export default Menu;
