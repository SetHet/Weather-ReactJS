import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { WeatherResume } from "./Components/WeatherResume";
import { WeatherDayDetail } from "./Components/WeatherDayDetail";
import { WeatherLocation } from "./Components/WeatherLocation";
import { WeatherContext, WeatherProvider } from "./Contexts/WeatherContext";
import { WeatherInfoHead } from "./Components/WeatherInfoHead";
import { WeatherTitle } from "./Components/WeatherTitle";

function App() {
  return (
    <>
      <div className="App">
        <WeatherProvider>
          <WeatherInfoHead />
          <WeatherLocation />
          <WeatherTitle />
          <WeatherContext.Consumer>
            {({ location }) =>
              location ? (
                <>
                  <WeatherResume />
                  <WeatherDayDetail />
                </>
              ) : (
                ""
              )
            }
          </WeatherContext.Consumer>
        </WeatherProvider>
      </div>
      <img src="Weather-ReactJS/background.png" className="backgroundMain" />
    </>
  );
}

export default App;
