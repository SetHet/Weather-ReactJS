import React from "react";

const WeatherContext = React.createContext();

function WeatherProvider({ children }) {
  const [location, setLocation] = React.useState("Chile");
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const apiurl = `https://api.open-meteo.com/v1/forecast?latitude=-33.4569&longitude=-70.6483&current=temperature_2m&hourly=temperature_2m,precipitation_probability,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min&wind_speed_unit=ms&timezone=auto&past_hours=24&forecast_hours=24`;

    fetch(apiurl)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
        return json;
      })
      .catch((error) => console.error(error));
    //console.log(data);
  }, [location]);

  const values = {
    location,
    data,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

function WeatherConsumer({ children }) {
  return (
    <WeatherContext.Consumer>
      {(values) => ({ children })}
    </WeatherContext.Consumer>
  );
}

export { WeatherContext, WeatherProvider, WeatherConsumer };
