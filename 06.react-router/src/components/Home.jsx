import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // 페이지를 이동할 때 사용하는 함수
  // 로직처리 후에 페이지 이동 => useNavigate()
  // 단순히 페이지 이동 => Link 컴포넌트
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };
  return (
    <div>
      <h1>Welcome to Home</h1>
      <p>Home Page</p>
      {/* Link컴포넌트 : 다른 페이지 컴포넌트로 이동할 수 있게 동작하는 컴포넌트
            -> App에 있는 Routes컴포넌트가 요청경로를 확인
            -> 요청경로에 맞는 Route컴포넌트를 실행
          to속성 : 요청할 경로 정의
      */}
      <Link to={"/about"}>About으로 이동</Link>
      <Link to={"/product"}>Product로 이동</Link>
      <button onClick={() => goToAbout()}>About으로이동</button>
    </div>
  );
};

export default Home;
