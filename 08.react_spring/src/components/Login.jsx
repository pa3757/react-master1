import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const id = useRef();
  const pw = useRef();
  const navigate = useNavigate();
  function tryLogin() {
    // 사용자가 적은 ID, PW 값을 가져와서

    let inputId = id.current.value;
    let inputPw = pw.current.value;
    axios
      .get(`http://localhost:8081/react/login?id=${inputId}&pw=${inputPw}`)
      .then((res) => {
        console.log(res);
        // 로그인 성공 --> Main
        // 로그인 실패 --> '로그인실패'알림
        if (res.data === "smhrdNick") {
          window.localStorage.setItem("nick", res.data);
          navigate("/");
        } else {
          alert("로그인 실패");
        }
      });
    // SpringBoot 서버로 전송하겠습니다! --> 비동기 axios
    // React 에서는 submit 사용 지양 (동기-새로고침발생)
  }
  return (
    <div>
      <h1>로그인 페이지 입니다</h1>
      ID : <input ref={id}></input>
      PW : <input ref={pw}></input>
      <button onClick={tryLogin}>로그인 시도</button>
    </div>
  );
};

export default Login;
