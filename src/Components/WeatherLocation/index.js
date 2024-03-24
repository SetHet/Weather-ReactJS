import React from "react";
import "./style.css";
import { WeatherContext } from "../../Contexts/WeatherContext";

function WeatherLocation() {
  const { location } = React.useContext(WeatherContext);

  function updateValue(event) {}

  return (
    <div className="containerLocation">
      <input
        type="text"
        className="locationSearch"
        value={location}
        onChange={updateValue}
      ></input>
    </div>
  );
}

export { WeatherLocation };
