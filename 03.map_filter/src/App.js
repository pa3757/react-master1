import "./App.css";

const App = () => {
  let arr = [1, 2, 3, 4, 5];
  let copyArr = arr.map((item) => {
    return item + 1;
  });

  let objArr = [
    { name: "구희철", age: 30, job: "Front-end" },
    { name: "남예하", age: 25, job: "Modeling" },
    { name: "문성진", age: 26, job: "Back-end" },
  ];

  let copyObjArr = objArr.map((item) => {
    return { name: item.name, job: item.job };
  });
  let copyArr2 = arr.map((item, index) => (
    <button key={index} onClick={() => show()}>
      {item}번
    </button>
  ));

  const show = () => {
    console.log("클릭이벤트 발생!");
  };
  return (
    <div>
      <div>{copyArr}</div>
      {/* 객체 혹은 객체배열은 표현식으로 출력 할 수 없음
          객체.속성까지 접근해야 출력가능*/}
      <div>{copyObjArr[0].name}</div>
      {copyObjArr.map((item) => (
        <div>
          <div>
            {item.name}/{item.job}
          </div>
        </div>
      ))}
      {/*
        copyArr의 모든 요소를 웹 페이지에 출력해보기
        <p>태그 안에 요소를 넣어서 출력되도록
      */}
      <div>
        {copyArr.map((i) => (
          <p>{i}</p>
        ))}
        ;
      </div>
    </div>
  );
};

export default App;
