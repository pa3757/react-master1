import React, { useState, useRef, useEffect } from "react";
// userEffect : 렌더링 시점에 맞춰서 실행하는 기능
const ToDoList = () => {
  const [list, setList] = useState([]);
  const goal = useRef();

  // 렌더링 시점에 맞춰서 특정 로직을 실행하겠습니다.
  useEffect(() => {
    console.log("useEffect", list);
    if (list.length === 3) {
      alert("전부입력했습니다.");
    }
  }, [list]);
  // dependence Array
  // [list] --> 맨처음과 list라는 State값이 바뀌었을때만 실행하겠습니다.

  const addGoal = () => {
    // setState : 클로저함수(함수 제일 마지막에 실행되어진다.)
    setList([...list, goal.current.value]);
    goal.current.value = "";
  };
  const removeGoal = (index) => {
    const newList = list.filter((_, index2) => index2 !== index);
    setList(newList);
  };

  return (
    <div>
      <h1>2024 올해는 꼭 할수있다?</h1>
      <input ref={goal} />
      <button onClick={addGoal}>계획추가</button>
      <h1>ToDoList</h1>

      {list.map((item, index) => (
        <ul>
          <li key={index}>
            {item}
            <button
              onClick={() => {
                removeGoal(index);
              }}
            >
              삭제
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ToDoList;
