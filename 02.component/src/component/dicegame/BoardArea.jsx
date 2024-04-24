import React from "react";
import Board from "./Board";

const BoardArea = ({ user, com }) => {
  return (
    <div className="board-area">
      <Board user={user} />
      <Board user={com} />
    </div>
  );
};

export default BoardArea;
