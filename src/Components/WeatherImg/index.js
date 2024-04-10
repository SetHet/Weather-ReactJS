import React from "react";
import DefaultWeatherPng from "../../media/DefaultWeatherImg.png";
import RainPng from "../../media/rain.png";
import CloudPng from "../../media/cloud.png";
import CloudHeavyPng from "../../media/cloud heavy.png";
import CloudLightPng from "../../media/cloud light.png";
import ClearSkyPng from "../../media/clear sky.png";
import RainShowersPng from "../../media/rain showers.png";
import FogPng from "../../media/fog.png";
import DepositionRimeFogPng from "../../media/deposition-rime-fog.png";
import DrizzlePng from "../../media/drizzle.png";
import FreezingDrizzlePng from "../../media/freezing drizzle.png";
import FreezingRainPng from "../../media/freezing rain.png";
import SnowFallPng from "../../media/snow fall.png";
import SnowGrainPng from "../../media/snow grain.png";
import SnowShowersPng from "../../media/snow showers.png";
import ThunderstormPng from "../../media/thunderstorm.png";

const Images = {
  default: DefaultWeatherPng,
  rain: RainPng,
  cloud: CloudPng,
  cloud_heavy: CloudHeavyPng,
  cloud_light: CloudLightPng,
  clear_sky: ClearSkyPng,
  rain_showers: RainShowersPng,
  fog: FogPng,
  deposition_rime_fog: DepositionRimeFogPng,
  drizzle: DrizzlePng,
  frezzing_drizzle: FreezingDrizzlePng,
  frezzing_rain: FreezingRainPng,
  snow_fall: SnowFallPng,
  snow_grain: SnowGrainPng,
  snow_showers: SnowShowersPng,
  thunderstorm: ThunderstormPng,
};

function WeatherImg({ children, img, className }) {
  if (!img) img = "default";

  return <img src={Images[img]} className={`img ${className}`} alt={img} />;
}

export { WeatherImg };
