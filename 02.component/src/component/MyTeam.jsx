import React from "react";

// 구조분해할당
// ex)
// let obj = {teamName:'교육운영',name:'선영표'}
// let {teamName,name} = obj

// const MyTeam = ({myteam,name}) =>
const MyTeam = (p) => {
  return (
    <div
      style={{ border: "1px solid gray", margin: "10px", textAlign: "center" }}
    >
      <p>{p.myteam}</p>
      <p>{p.name}</p>
    </div>
  );
};
//defaultprops : 넘겨받은 데이터가 없을 때
MyTeam.defaultProps = {
  name: "아무도 없습니다.",
};
export default MyTeam;
