import React from "react";

const WeatherContext = React.createContext();
const keyLocationLocalStorage = "LocationJson";

function WeatherProvider({ children }) {
  const [location, setLocation] = React.useState();
  const [locationList, setLocationList] = React.useState({ active: false });
  const [data, setData] = React.useState({});

  // Load Location in Local Storage
  React.useEffect(() => {
    const textLocationLocalStorage = localStorage.getItem(
      keyLocationLocalStorage
    );
    if (textLocationLocalStorage && textLocationLocalStorage !== "") {
      try {
        let jsonLocationLS = JSON.parse(textLocationLocalStorage);
        setLocation(jsonLocationLS);
      } catch (e) {
        console.error("No se puede parsear el local storage de location");
        console.error(e);
      }
    } else {
      console.warn("No se puede encontrar el local storage de location");
    }
  }, []);

  // Update data weather
  React.useEffect(() => {
    if (location) {
      let coords = {};
      coords.la = location.latitude;
      coords.lo = location.longitude;

      const apiurl = `https://api.open-meteo.com/v1/forecast?latitude=${coords.la}&longitude=${coords.lo}&current=weather_code,temperature_2m&hourly=temperature_2m,precipitation_probability,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&wind_speed_unit=ms&timezone=auto&past_hours=24&forecast_hours=24`;

      fetch(apiurl)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          console.log(json);
          return json;
        })
        .catch((error) => {
          console.log(error);
          // const ejson = {
          //   error: error.reason,
          // };
          // setData(ejson);
          setData(error);
        });
      //console.log(data);
    }
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
      const jsonLocation = locationList.results[index];
      localStorage.setItem(
        keyLocationLocalStorage,
        JSON.stringify(jsonLocation)
      );
      setLocation(jsonLocation);
    }
  }

  function UpdateLocationOnlyCoords(latitude, longitude) {
    const jsonLocation = { latitude, longitude };
    localStorage.setItem(keyLocationLocalStorage, JSON.stringify(jsonLocation));
    //console.log(json);
    setLocation(jsonLocation);
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
