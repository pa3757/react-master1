import { useNavigate } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { JoinContext } from "../context/JoinContext";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const { id, pw } = useContext(JoinContext);

  console.log(id, pw);
  const [id2, Setid2] = useState();
  const [pw2, Setpw2] = useState();

  const Login = () => {
    console.log(id, pw);
    console.log(id2, pw2);
    if (id2 === id && pw2 === pw) {
      navigate("/main");
    } else {
      alert("아이디나 비밀번호가 다릅니다");
    }
  };
  return (
    <div>
      <h1>Login페이지</h1>
      ID:
      <input type="text" onChange={(e) => Setid2(e.target.value)} />
      PW:
      <input type="text" onChange={(e) => Setpw2(e.target.value)} />
      <button onClick={() => Login()}>로그인 시도</button>
    </div>
  );
};

export default Login;
