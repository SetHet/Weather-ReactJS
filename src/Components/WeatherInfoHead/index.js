import React from "react";
import "./style.css";

function WeatherInfoHead() {
  return (
    <div className="containerWeatherInfoHead">
      <h3 className="WeatherInfoHead">
        Thanks to the weather API{" "}
        <a href="https://open-meteo.com/">open-meteo.com</a> ❤️
      </h3>
    </div>
  );
}

export { WeatherInfoHead };
