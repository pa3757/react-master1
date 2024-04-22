import "./App.css";
/*
  JSX문법
  - 하나의 파일에 JavaScript와 HTML문법을 함께 사용하는 문법
  JSX문법 특징
  1. 하나 이상의 HTML문법을 사용하려면 반드시 부모요소로 감싸야 한다!
  2. 표현식({})을 통해서 HTML과 JS를 같이 사용할 수 있다.
   - {} 안에 JS의 변수나 데이터를 넣어주면 페이지에 출력된다.
   - 조건부 렌더링를 통해 데이터 출력
   -> if문을 사용할 때 return문 바깥쪽에서 정의하거나,
      if문 안에 return문을 넣는 방식
      -> 삼항연산자는 return문 안에 정의할 수 있다.
         조건에 따른 결과값은 HTML문법과 같이 출력할 수 있음
         한 줄인 경우 : 소괄호 생략
         한 줄 이상의 경우 : 소괄호 추가 + 부모요소 감싸주기
  -> &&, || 연산자를 활용해서 true or false에 대한 결과값 출력
  3. 기존 HTML문법과 다른점
    - class -> className으로 정의
    - HTML문법은 소문자 | 컴포넌트는 대문자로 인식
    - 내용이 없더라도 끝태그는 반드시 정의 ex) <p></p>
  4. 스타일 적용은 객체 형태로 정의
  - 인라인 방식 ex) <p style={{color: 'red'}}></p>
  - 변수 정의
    ex) const style = {color: 'red'}
        <p style={style}></p>
  - css파일 import


*/
// function App() {
//   let name = '손준수';
//   let date = '0422';
//   let result = '';

//     return (
//      date === '0422'?
//      (
//       <div>
//         <h1>오늘은 4월 22일 입니다.</h1>
//         <p>오늘은 첫 리액트 수업입니다.</p>
//       </div>
//      ):
//      (
//       <div>
//         <h1>오늘은 4월 23일 입니다.</h1>
//         <p>오늘은 두 리액트 수업입니다.</p>
//       </div>
//      )
//     )

//   }
// function App(){

//   let count = 1;
//   let count2 = 5;
//   let count3 = null;

//   return(
//     <div>
//       {/* 조건이 true일 경우에 출력하고 싶다면 &&연산자*/}
//       <div>{count && 'count의 갯수 : '+count}</div>
//       <div>{count2 && 'count2의 갯수 : '+count2}</div>
//       {/* 조건이 false일 경우에 출력하고 싶다면 ||연산자*/}
//       <div>{count3 || '값이 존재하지 않음'}</div>
//     </div>
//   )

// }

function App() {
  const ComponentA = () => {
    return <div>Hello ComponentA</div>;
  };

  const styled = {
    p: {
      color: "blue",
      fontWeight: "bold",
    },
    h1: {
      color: "red",
      fontWeight: "bold",
    },
  };

  return (
    <div>
      <div class="msg" style={{ color: "blue", fontWeight: "bold" }}>
        Hello React!
      </div>
      <ComponentA />
      <p style={styled.p}>Hello React Style!</p>
      <h1 style={styled.h1}>React</h1>
    </div>
  );
}

export default App;
