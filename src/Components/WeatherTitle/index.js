import React from "react";
import "./style.css";
import { WeatherContext } from "../../Contexts/WeatherContext";

function WeatherTitle() {
  const { location, data } = React.useContext(WeatherContext);

  return (
    <div className="containerTitle">
      <h1>
        {data.error
          ? `${data.reason}`
          : location
          ? location.name
            ? `${location.name}, ${location.country}`
            : `${location.latitude},${location.longitude}, ${data.timezone}`
          : "Choose a location ☝️"}
      </h1>
    </div>
  );
}

export { WeatherTitle };
