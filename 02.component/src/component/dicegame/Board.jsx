import React from "react";

const Board = ({ user }) => {
  return (
    <div className="board">
      <h4>{user.name}</h4>
      <img src={user.imgPath} alt="이미지없음..." />
      <div className="score-area">
        <h4>현재 점수는?</h4>
        <h4>{user.score}</h4>
      </div>
    </div>
  );
};

export default Board;
