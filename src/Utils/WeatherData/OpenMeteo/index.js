const WeatherCodeMap = {
  0: {
    title: "Clear sky",
    titulo: "Cielo Despejado",
    icon: "",
    img: "clear_sky",
  },
  1: { title: "Mainly clear", titulo: "", icon: "", img: "cloud_light" },
  2: { title: "Partly cloudy", titulo: "", icon: "", img: "cloud" },
  3: { title: "Overcast", titulo: "", icon: "", img: "cloud_heavy" },
  45: { title: "Fog", titulo: "", icon: "", img: "" },
  48: { title: "Depositing rime fog", titulo: "", icon: "", img: "" },
  51: { title: "Drizzle light", titulo: "", icon: "", img: "" },
  53: { title: "Drizzle moderate", titulo: "", icon: "", img: "" },
  55: { title: "Drizzle dense intensity", titulo: "", icon: "", img: "" },
  56: { title: "Freezing Drizzle light", titulo: "", icon: "", img: "" },
  57: {
    title: "Freezing Drizzle dense intensity",
    titulo: "",
    icon: "",
    img: "",
  },
  61: { title: "Rain slight", titulo: "", icon: "", img: "rain" },
  63: { title: "Rain moderate", titulo: "", icon: "", img: "rain" },
  65: { title: "Rain heavy intensity", titulo: "", icon: "", img: "rain" },
  66: { title: "Freezing rain light", titulo: "", icon: "", img: "" },
  67: { title: "Freezing rain heavy intensity", titulo: "", icon: "", img: "" },
  71: { title: "Snow fall slight", titulo: "", icon: "", img: "" },
  73: { title: "Snow fall moderate", titulo: "", icon: "", img: "" },
  75: { title: "Snow fall heavy intensity", titulo: "", icon: "", img: "" },
  77: { title: "Snow grains", titulo: "", icon: "", img: "" },
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
  85: { title: "Snow showers slight", titulo: "", icon: "", img: "" },
  86: { title: "Snow showers heavy", titulo: "", icon: "", img: "" },
  95: {
    title: "Thunderstorm slight or moderate",
    titulo: "",
    icon: "",
    img: "",
  },
  96: { title: "Thunderstorm with slight", titulo: "", icon: "", img: "" },
  99: { title: "Thunderstorm with heavy hail", titulo: "", icon: "", img: "" },
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
