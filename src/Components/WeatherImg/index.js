import React from "react";
import DefaultWeatherPng from "../../media/DefaultWeatherImg.png";
import RainPng from "../../media/rain.png";
import CloudPng from "../../media/cloud.png";
import CloudHeavyPng from "../../media/cloud heavy.png";
import CloudLightPng from "../../media/cloud light.png";
import ClearSkyPng from "../../media/clear sky.png";
import RainShowersPng from "../../media/rain showers.png";

const Images = {
  default: DefaultWeatherPng,
  rain: RainPng,
  cloud: CloudPng,
  cloud_heavy: CloudHeavyPng,
  cloud_light: CloudLightPng,
  clear_sky: ClearSkyPng,
  rain_showers: RainShowersPng,
};

function WeatherImg({ children, img, className }) {
  if (!img) img = "default";

  return <img src={Images[img]} className={`img ${className}`} alt={img} />;
}

export { WeatherImg };
