import axios from "axios";

const api = axios.create({
  baseURL: "https://kobis.or.kr/kobisopenapi",
});

export default api;
