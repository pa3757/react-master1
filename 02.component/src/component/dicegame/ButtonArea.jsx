import React from "react";
import Button from "react-bootstrap/Button";

const ButtonArea = ({ onclick, init }) => {
  return (
    <div className="button-area">
      <Button variant="warning" onClick={() => onclick()}>
        던지기
      </Button>
      {""}
      <Button variant="danger" onClick={() => init()}>
        초기화
      </Button>
      {""}
    </div>
  );
};

export default ButtonArea;
