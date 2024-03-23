import React from "react";
import "./style.css";
import { WeatherHourDetail } from "../WeatherHourDetail";

function WeatherDayDetail() {
  return (
    <div className="containerDayDetail">
      <WeatherHourDetail />
      <WeatherHourDetail />
      <WeatherHourDetail />
      <WeatherHourDetail />
    </div>
  );
}

export { WeatherDayDetail };
