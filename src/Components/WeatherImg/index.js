import React from "react";
import DefaultWeatherPng from "../../media/DefaultWeatherImg.png";

function WeatherImg({ children, img, className }) {
  const imgList = {
    default: () => (
      <img src={DefaultWeatherPng} className={`img ${className}`} />
    ),
  };

  if (!img) img = "default";

  return <>{imgList[img]()}</>;
}

export { WeatherImg };
