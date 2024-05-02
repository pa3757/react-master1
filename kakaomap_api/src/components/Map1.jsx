import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Map1 = () => {
  const [location, setLocation] = useState(null);
  const successHandler = (res) => {
    console.log(res); // coords: GeolocationCoordinates {latitude: 위도, longitude: 경도, …} timestamp: 167344687390
    const { latitude, longitude } = res.coords;
    setLocation({ latitude, longitude });
  };
  const errorHandler = (err) => {
    console.log(err);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);
  return (
    <>
      {location && (
        <Map
          center={{ lat: location.latitude, lng: location.longitude }} // 지도의 중심좌표
          style={{ width: "800px", height: "600px" }} // 지도 크기
          level={3} // 지도 확대 레벨
        >
          <MapMarker
            position={{ lat: location.latitude, lng: location.longitude }}
          ></MapMarker>
          {/* 마커 좌표 */}
        </Map>
      )}
    </>
  );
};

export default Map1;
