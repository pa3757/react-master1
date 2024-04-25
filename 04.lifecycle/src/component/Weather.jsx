import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Weather = (props) => {
  // {set:setInfo}

  // 각각의 도시 버튼을 클릭했을 때
  // https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}&units=metric&lang=kr

  const [city, setCity] = useState("Gwangju");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");

  const apikey = "7d589379f216f470fa43e4b247a1b56b";
  // useEffect : 맨처음, state가 바뀌었을 때(재렌더링)
  useEffect(() => {
    let data = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=kr`
    );
    data.then((res) => {
      props.set(res);
      setTemp(res.data.main.temp);
      setWeather(res.data.weather[0].description);
    });
  }, [city]);
  const pickCity = (city) => {
    setCity(city);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>도시 : {city}</Card.Title>
          <Card.Subtitle>온도 : {temp}</Card.Subtitle>
          <Card.Subtitle>날씨상태 : {weather}</Card.Subtitle>
        </Card.Body>
      </Card>

      <Button variant="danger" onClick={() => pickCity("Gwangju")}>
        광주
      </Button>
      <Button variant="warning" onClick={() => pickCity("Seoul")}>
        서울
      </Button>
      <Button variant="success" onClick={() => pickCity("London")}>
        런던
      </Button>
      <Button onClick={() => pickCity("Washington")}>워싱턴</Button>
    </div>
  );
};

export default Weather;
