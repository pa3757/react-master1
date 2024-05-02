import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StaticMap } from "react-kakao-maps-sdk";

const Map2 = () => {
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
        <StaticMap
          center={{
            lat: location.latitude,
            lng: location.longitude,
          }}
          style={{
            width: "100%",
            height: "450px",
          }}
          scrollwheel={{
            disable: false,
          }}
          marker={[
            {
              position: {
                lat: location.latitude,
                lng: location.longitude,
              },
              text: `위도 : ${location.latitude}, 경도 :${location.longitude}`,
            },
          ]}
          level={3}
        ></StaticMap>
      )}
    </>
  );
};

export default Map2;
