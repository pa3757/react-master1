import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JoinContext } from "../context/JoinContext";

const Join = () => {
  const { id, setId, pw, setPw, nick, setNick } = useContext(JoinContext);

  const navigate = useNavigate();

  const goLogin = () => {
    if (id && pw && nick !== null) {
      navigate("/login");
    }
    // console.log(id, pw, nick);
  };
  const reset = () => {
    setId("");
    setPw("");
    setNick("");
  };
  return (
    <div>
      <h1>회원가입 페이지 입니다</h1>
      ID: <input type="text" onChange={(e) => setId(e.target.value)} />
      <br />
      PW: <input type="text" onChange={(e) => setPw(e.target.value)} />
      <br />
      NICK: <input type="text" onChange={(e) => setNick(e.target.value)} />
      <br />
      <button onClick={() => goLogin()}>Join</button>
      <button onClick={() => reset()}>초기화</button>
    </div>
  );
};

export default Join;
