import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Main Page</h1>
      {/* 
        로그인 된 여부에 따라서 다르게 출력
        로그인 전 이라면 로그인, 회원가입 버튼 

        로그인 성공된 후라면 OOO님 환영합니다
      */}
      {window.localStorage.getItem("nick") === null ? (
        <div>
          <Link to="/login">로그인</Link>
          <br />
          <Link to="/join"> 회원가입</Link>
        </div>
      ) : (
        <p>{window.localStorage.getItem("nick")}님 환영합니다</p>
      )}
      <br />
      <Link to="/webtoon">웹툰 확인</Link>
    </div>
  );
};

export default Main;
