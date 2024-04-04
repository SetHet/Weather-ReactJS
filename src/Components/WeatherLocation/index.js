import React from "react";
import "./style.css";
import { WeatherContext } from "../../Contexts/WeatherContext";
import { getGeolocationCoords } from "../../Utils/GeoParse";

function WeatherLocation() {
  const {
    location,
    locationList,
    OpenLocationList,
    CloseLocationList,
    UpdateLocation,
    UpdateLocationOnlyCoords,
  } = React.useContext(WeatherContext);

  const [nameSearch, setNameSearch] = React.useState("santiago");

  function updateValue(event) {
    setNameSearch(event.target.value);
  }

  function actionSearchLocation(event) {
    const parseGeo = getGeolocationCoords(nameSearch);
    if (parseGeo) {
      UpdateLocationOnlyCoords(parseGeo.latitude, parseGeo.longitude);
      setNameSearch("");
    } else {
      OpenLocationList(nameSearch);
    }
  }

  function actionGetGeolocation() {
    navigator.geolocation.getCurrentPosition(
      (geo) => {
        console.log(geo);
        UpdateLocationOnlyCoords(geo.coords.latitude, geo.coords.longitude);
        setNameSearch("");
      },
      (error) => console.error(error)
    );
  }

  return (
    <div className="containerLocation">
      <button
        className="buttonLocation buttonGeoLocation"
        onClick={actionGetGeolocation}
      >
        <img className="imgLocation" src="/GeoLocalizationIcon.png" />
      </button>
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
              ? `${location.name || "city"} | ${
                  location.country || "country"
                } | ${location.latitude || "latitude"},${
                  location.longitude || "longitude"
                }`
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
        <img className="imgLocation" src="/SearchIcon.png" />
      </button>
    </div>
  );
}

export { WeatherLocation };
