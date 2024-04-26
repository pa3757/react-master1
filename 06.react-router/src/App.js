import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";

function App() {
  return (
    <div>
      {/* 
      Routes 컴포넌트 : Route에 연결된 컴포넌트 중 요청URL과 일치한 Route만 렌더링해주는 컴포넌트

      Route컴포넌트 : URL을 정의하고 컴포넌트를 매핑해주는 컴포넌트
      path속성 :URL
      element속성 : 매핑할 컴포넌트
    */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Product 페이지로 이동할 수 있는 Route 컴포넌트 만들기
            1. Product 컴포넌트 생성
            2. Route 컴포넌트로 경로 지정 및 컴포넌트 연결
              - 경로 : /product
            3. Home 페이지에서 Product 페이지로 이동할 수 있는 Link컴포넌트 생성
        */}
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
