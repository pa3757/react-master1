import React, { useState } from "react";
import { useRef } from "react";
const Ex04 = () => {
  const [src, setSrc] = useState(1);
  const next = () => {
    setSrc(src + 1);
  };
  const prev = () => {
    setSrc(src - 1);
  };
  if (src > 3) {
    setSrc(1);
  } else if (src < 1) {
    setSrc(3);
  }
  return (
    <div>
      <img
        src={`./img/img${src}.webp`}
        alt=""
        height={"500px"}
        width={"500px"}
      ></img>
      <button onClick={prev}>이전</button>
      <button onClick={next}>다음</button>
    </div>
  );
};

// const Ex04 = () => {
//   const src = useRef(1);

//   const next = () => {
//     src.current = src.current + 1;
//     if (src.current > 3) {
//       src.current = 1;
//     }
//   };

//   const prev = () => {
//     src.current = src.current - 1;
//     if (src.current < 1) {
//       src.current = 3;
//     }
//   };

//   return (
//     <div>
//       <img
//         src={`./img/img${src.current}.webp`}
//         alt=""
//         height={"500px"}
//         width={"500px"}
//       ></img>
//       <button onClick={prev}>이전</button>
//       <button onClick={next}>다음</button>
//     </div>
//   );
// };

export default Ex04;
