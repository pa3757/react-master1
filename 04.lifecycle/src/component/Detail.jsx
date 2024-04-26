import React, { useState, useEffect } from "react";
import { Table, Card, ListGroup, Image } from "react-bootstrap";

//props : 컴포넌트끼리 데이터를 전달하는 방법!!!
//       상위컴포넌트가 하위컴포넌트로 데이터를 전달하는 방법!!
const Detail = (props) => {
  console.log(props);

  //   useEffect(() => {
  //     setTemp(props.val.data.main.temp);
  //   }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>날씨</th>
          <th>INFO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Image src=""></Image>
          </td>
          <td>
            <Card style={{ width: "18rem" }}>
              {props.val !== undefined ? (
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    온도 : {props.val.data.main.temp}
                    {/* 온도 : {temp} */}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    풍속 : {props.val.data.wind.speed}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    습도 : {props.val.data.main.humidity}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    경도 : {props.val.data.coord.lon}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    위도 : {props.val.data.coord.lat}
                  </ListGroup.Item>
                </ListGroup>
              ) : (
                ""
              )}
            </Card>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

Detail.defaultProps = {
  data: {
    val: {
      icon: "",
      temp: "",
      wind: "",
      humidity: "",
      lon: "",
      lat: "",
    },
  },
};

export default Detail;
// import React, { useState, useEffect } from "react";
// import { Table, Card, ListGroup, Image } from "react-bootstrap";

// //props : 컴포넌트끼리 데이터를 전달하는 방법!!!
// //       상위컴포넌트가 하위컴포넌트로 데이터를 전달하는 방법!!
// const Detail = (props) => {
//   console.log(props);

//   const [temp, setTemp] = useState("");
//   const [speed, setSpeed] = useState("");
//   const [humidity, setHumidity] = useState("");
//   const [lon, setLon] = useState("");
//   const [lat, setLat] = useState("");
//   const [icon, setIcon] = useState("");

//   useEffect(() => {
//     if (props.val !== undefined) {
//       setTemp(props.val.data.main.temp);
//       setSpeed(props.val.data.wind.speed);
//       setHumidity(props.val.data.main.humidity);
//       setLon(props.val.data.coord.lon);
//       setLat(props.val.data.coord.lat);
//       setIcon(
//         `http://openweathermap.com/img/w/${props.val.data.weather[0].icon}.png`
//       );
//     }
//   }, [props.val]);

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>날씨</th>
//           <th>INFO</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>
//             <Image src={icon}></Image>
//           </td>
//           <td>
//             <Card style={{ width: "18rem" }}>
//               <ListGroup variant="flush">
//                 <ListGroup.Item>
//                   {/* 온도 : {props.val.data.main.temp} */}
//                   온도 : {temp}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   {/* 풍속 : {props.val.data.wind.speed} */}
//                   풍속 : {speed}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   {/* 습도 : {props.val.data.main.humidity} */}
//                   습도 : {humidity}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   {/* 경도 : {props.val.data.coord.lon} */}
//                   경도 : {lon}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   {/* 위도 : {props.val.data.coord.lat} */}
//                   위도 : {lat}
//                 </ListGroup.Item>
//               </ListGroup>
//             </Card>
//           </td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// };

// Detail.defaultProps = {
//   data: {
//     val: {
//       icon: "",
//       temp: "",
//       wind: "",
//       humidity: "",
//       lon: "",
//       lat: "",
//     },
//   },
// };

// export default Detail;
