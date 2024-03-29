import React from "react";
import { WeatherSphere } from "../WeatherSphere";
import "./style.css";
import { WeatherContext } from "../../Contexts/WeatherContext";

function WeatherResume() {
  const { location, data } = React.useContext(WeatherContext);

  return (
    <div className="containerWeatherResume">
      <div className="containerTitle">
        <h1>
          {data.error
            ? `${data.reason}`
            : location
            ? location.name
              ? `${location.name}, ${location.country}`
              : `${location.latitude},${location.longitude}, ${data.timezone}`
            : "Choose a location ☝️"}
        </h1>
      </div>
      <div className="currentWeather">
        <WeatherSphere current={true} />
      </div>
      <div className="daysWeather">
        <WeatherSphere day={0} />
        <WeatherSphere day={1} />
        <WeatherSphere day={2} />
        <WeatherSphere day={3} />
      </div>
    </div>
  );
}

export { WeatherResume };
