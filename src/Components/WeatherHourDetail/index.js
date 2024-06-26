import React from "react";
import "./style.css";
import { WeatherContext } from "../../Contexts/WeatherContext";
import { WeatherInfoForCode } from "../../Utils/WeatherData/OpenMeteo";
import { WeatherIcon } from "../WeatherIcon";

function WeatherHourDetail({ date }) {
  const { data } = React.useContext(WeatherContext);
  const index = data.hourly.time.findIndex((d) => d === date);
  const dataTime = new Date(date);
  const temperature = data.hourly.temperature_2m[index];
  const temperatureUnit = data.hourly_units.temperature_2m;
  const windDirection = data.hourly.wind_direction_10m[index];
  const windSpeed = data.hourly.wind_speed_10m[index];
  const windUnit = data.hourly_units.wind_speed_10m;
  const precipitationProbability = data.hourly.precipitation_probability[index];
  const precipitationProbabilityUnit =
    data.hourly_units.precipitation_probability;
  const rain = data.hourly.rain[index];
  const rainUnit = data.hourly_units.rain;
  const weatherCode = data.hourly.weather_code[index];

  return (
    <>
      <div className="containerHourDetail">
        <div>
          <WeatherIcon icon="sunny" />
        </div>
        <div>{WeatherInfoForCode(weatherCode).title}</div>
        <div>
          {dataTime.getDate()}/{dataTime.getMonth()} {dataTime.getHours()}hr
        </div>
        <div>
          {temperature} {temperatureUnit}
        </div>
        <div className="windContainer">
          <div className="direccion">
            <img
              src="/Weather-ReactJS/direccioncardinal.png"
              className="dirCardinal"
              alt="🗺️"
            />
            <img
              src="/Weather-ReactJS/ArrowNorth.png"
              className="dirArrow"
              style={{ transform: `rotate(${windDirection}deg)` }}
              alt="⬆"
            />
          </div>{" "}
          {windSpeed} {windUnit}
        </div>
        <div>
          {precipitationProbability} {precipitationProbabilityUnit}
        </div>
        <div>
          {rain} {rainUnit}
        </div>
      </div>
    </>
  );
}

export { WeatherHourDetail };
