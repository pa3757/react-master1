import React, { useState, useEffect } from "react";

function App() {
  // 로컬 스토리지에서 visited 값을 읽어와서 상태를 초기화합니다.
  // 로컬 스토리지에 visited 값이 없으면 기본값 false를 사용합니다.
  const [visited, setVisited] = useState(() => {
    const saved = localStorage.getItem("visited");
    return saved === "true";
  });

  // visited 상태가 변경될 때마다 로컬 스토리지를 업데이트합니다.
  useEffect(() => {
    localStorage.setItem("visited", visited);
  }, [visited]);

  return (
    <div>
      {visited ? (
        <p>글의 내용을 여기에 표시합니다.</p>
      ) : (
        <div onClick={() => setVisited(true)}>
          <a
            href="http://smhrd.or.kr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/smhrd.png" />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
