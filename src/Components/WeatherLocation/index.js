import React from "react";
import "./style.css";
import { WeatherContext } from "../../Contexts/WeatherContext";

function WeatherLocation() {
  const {
    location,
    locationList,
    OpenLocationList,
    CloseLocationList,
    UpdateLocation,
  } = React.useContext(WeatherContext);

  const [nameSearch, setNameSearch] = React.useState("santiago");

  function updateValue(event) {
    setNameSearch(event.target.value);
  }

  function actionSearchLocation(event) {
    OpenLocationList(nameSearch);
  }

  return (
    <div className="containerLocation">
      <button className="buttonLocation buttonGeoLocation">🗺️</button>
      <div className="containerLocationOptions">
        <input
          className="locationSearch"
          id="locationName"
          type="text"
          name="locationSearch"
          value={nameSearch}
          onChange={updateValue}
          onKeyDown={(event) => {
            if (event.key === "Enter") actionSearchLocation(event);
          }}
          placeholder={
            location
              ? `${location.name} | ${location.country} | ${location.latitude},${location.longitude}`
              : `Santiago`
          }
        ></input>
        <ul
          className={`locationList ${
            !locationList.active ? "locationList--hidden" : ""
          }`}
          id="locationList"
          onMouseLeave={(event) => {
            CloseLocationList();
          }}
        >
          {locationList.results ? (
            locationList.results.map((elem, index) => (
              <li
                className="locationLi"
                onClick={() => {
                  UpdateLocation(index);
                  CloseLocationList();
                  setNameSearch("");
                }}
                key={index}
              >
                {elem.name}, {elem.country}
              </li>
            ))
          ) : (
            <li>Not exist</li>
          )}
        </ul>
      </div>
      <button
        className="buttonLocation buttonSearchLocation"
        onClick={actionSearchLocation}
      >
        🔎
      </button>
    </div>
  );
}

export { WeatherLocation };
