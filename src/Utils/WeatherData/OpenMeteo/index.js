const WeatherCodeMap = {
  0: {
    title: "Clear sky",
    titulo: "Cielo despejado",
    icon: "",
    img: "clear_sky",
  },
  1: {
    title: "Mainly clear",
    titulo: "Principalmente despejado",
    icon: "",
    img: "cloud_light",
  },
  2: {
    title: "Partly cloudy",
    titulo: "Parcialmente nublado",
    icon: "",
    img: "cloud",
  },
  3: { title: "Overcast", titulo: "Nublado", icon: "", img: "cloud_heavy" },
  45: { title: "Fog", titulo: "Niebla", icon: "", img: "fog" },
  48: {
    title: "Depositing rime fog",
    titulo: "",
    icon: "",
    img: "deposition_rime_fog",
  },
  51: { title: "Drizzle light", titulo: "", icon: "", img: "drizzle" },
  53: { title: "Drizzle moderate", titulo: "", icon: "", img: "drizzle" },
  55: {
    title: "Drizzle dense intensity",
    titulo: "",
    icon: "",
    img: "drizzle",
  },
  56: {
    title: "Freezing Drizzle light",
    titulo: "",
    icon: "",
    img: "frezzing_drizzle",
  },
  57: {
    title: "Freezing Drizzle dense intensity",
    titulo: "",
    icon: "",
    img: "frezzing_drizzle",
  },
  61: { title: "Rain slight", titulo: "", icon: "", img: "rain" },
  63: { title: "Rain moderate", titulo: "", icon: "", img: "rain" },
  65: { title: "Rain heavy intensity", titulo: "", icon: "", img: "rain" },
  66: {
    title: "Freezing rain light",
    titulo: "",
    icon: "",
    img: "frezzing_rain",
  },
  67: {
    title: "Freezing rain heavy intensity",
    titulo: "",
    icon: "",
    img: "frezzing_rain",
  },
  71: { title: "Snow fall slight", titulo: "", icon: "", img: "snow_fall" },
  73: { title: "Snow fall moderate", titulo: "", icon: "", img: "snow_fall" },
  75: {
    title: "Snow fall heavy intensity",
    titulo: "",
    icon: "",
    img: "snow_fall",
  },
  77: { title: "Snow grains", titulo: "", icon: "", img: "snow_grain" },
  80: {
    title: "Rain showers slight",
    titulo: "",
    icon: "",
    img: "rain_showers",
  },
  81: {
    title: "Rain showers moderate",
    titulo: "",
    icon: "",
    img: "rain_showers",
  },
  82: {
    title: "Rain showers violent",
    titulo: "",
    icon: "",
    img: "rain_showers",
  },
  85: {
    title: "Snow showers slight",
    titulo: "",
    icon: "",
    img: "snow_showers",
  },
  86: {
    title: "Snow showers heavy",
    titulo: "",
    icon: "",
    img: "snow_showers",
  },
  95: {
    title: "Thunderstorm slight or moderate",
    titulo: "",
    icon: "",
    img: "thunderstorm",
  },
  96: {
    title: "Thunderstorm with slight",
    titulo: "",
    icon: "",
    img: "thunderstorm",
  },
  99: {
    title: "Thunderstorm with heavy hail",
    titulo: "",
    icon: "",
    img: "thunderstorm",
  },
};

function WeatherInfoForCode(key) {
  const weather = WeatherCodeMap[key];
  if (weather) return weather;
  else
    return {
      error: "Not Found",
      title: "Not Found",
      titulo: "",
      icon: "",
      img: "",
    };
}

export { WeatherCodeMap, WeatherInfoForCode };
