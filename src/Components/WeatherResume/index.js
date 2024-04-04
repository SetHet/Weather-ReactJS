import React from "react";
import { WeatherSphere } from "../WeatherSphere";
import "./style.css";

function WeatherResume() {
  return (
    <div className="containerWeatherResume">
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
