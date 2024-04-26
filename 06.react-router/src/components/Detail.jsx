import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
// useSearchParams : 쿼리스트링으로부터 데이터를 꺼낼 수 있는 React - Hook
// useParams : React에서 Routing시 데이터를 꺼내오는 방법

const Detail = () => {
  const [data, setData] = useSearchParams();
  const { num } = useParams();
  return (
    <div>
      <h1>{data.get("num")}번째제품상세보기페이지입니다</h1>
      <h1>{num}번째 상품 보기 페이지입니다</h1>
      <Link to={"/home"}></Link>
    </div>
  );
};

export default Detail;
