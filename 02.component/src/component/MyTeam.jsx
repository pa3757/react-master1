import React from "react";

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
//default props : 넘겨받은 데이터가 없을 때
MyTeam.defaultProps = {
  name: "아무도 없습니다.",
};
export default MyTeam;
