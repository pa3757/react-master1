import { createContext } from "react";

// context : App 안에서 전역으로 사용되는 데이터를 공유하기 위한 기술
// createContext(초기값) : context객체를 생성하는 함수
export const CounterContext = createContext(0);
