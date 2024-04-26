import React from "react";
import ChildComponent2 from "./ChildComponent2";
import { memo } from "react";

// memo() : 컴포넌트의 렌더링 결과를 저장하고 이후 데이터 변화가 생겼을 때 렌더링 결과를 이전 결과와 비교해서 반영

export const ChildComponent1 = memo(() => {
  console.log("ChildComponent1 렌더링");
  return (
    <div>
      <ChildComponent2 />
    </div>
  );
});

export default ChildComponent1;
