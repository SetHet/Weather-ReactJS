import React from "react";
import "./style.css";

function WeatherInfoHead() {
  return (
    <div className="containerWeatherInfoHead">
      <h3 className="WeatherInfoHead">
        Thanks to the weather API{" "}
        <a href="https://open-meteo.com/">open-meteo.com❤️</a>
      </h3>
      <h4 className="WeatherInfoHead">
        See the source code on{" "}
        <a href="https://github.com/SetHet/Weather-ReactJS">
          GitHub{" "}
          <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
        </a>
      </h4>
    </div>
  );
}

export { WeatherInfoHead };
