import React from "react";
import { WeatherSphere } from "../WeatherSphere";
import "./style.css";

function WeatherResume() {
  return (
    <div className="containerWeatherResume">
      <div className="currentWeather">
        <WeatherSphere />
      </div>
      <div className="daysWeather">
        <WeatherSphere />
        <WeatherSphere />
        <WeatherSphere />
      </div>
    </div>
  );
}

export { WeatherResume };
