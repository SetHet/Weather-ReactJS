import React from "react";

const WeatherContext = React.createContext();

function WeatherProvider({ children }) {
  const [location, setLocation] = React.useState();
  const [locationList, setLocationList] = React.useState({ active: false });
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    let coords = {
      la: 41.47366,
      lo: -84.81468,
    };

    if (location) {
      coords.la = location.latitude;
      coords.lo = location.longitude;
    }
    const apiurl = `https://api.open-meteo.com/v1/forecast?latitude=${coords.la}&longitude=${coords.lo}&current=temperature_2m&hourly=temperature_2m,precipitation_probability,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min&wind_speed_unit=ms&timezone=auto&past_hours=24&forecast_hours=24`;

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

  function OpenLocationList(name) {
    const apiurl_location = `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=20&language=en&format=json`;

    fetch(apiurl_location)
      .then((response) => response.json())
      .then((json) => {
        json.active = true;
        //json = { active: true, ...json };
        setLocationList(json);
        console.log(json);
      })
      .catch((error) => console.error(error));
  }

  function CloseLocationList() {
    const list = { ...locationList, active: false };
    setLocationList(list);
  }

  function UpdateLocation(index) {
    if (locationList.results) {
      setLocation(locationList.results[index]);
    }
  }

  function UpdateLocationOnlyCoords(latitude, longitude) {
    const json = { latitude, longitude };
    console.log(json);
    setLocation(json);
  }

  const values = {
    location,
    data,
    OpenLocationList,
    CloseLocationList,
    locationList,
    UpdateLocation,
    UpdateLocationOnlyCoords,
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
