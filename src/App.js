import logo from "./logo.svg";
import "./App.css";
import { WeatherSphere } from "./Components/WeatherSphere";
import { WeatherResume } from "./Components/WeatherResume";
import { WeatherDayDetail } from "./Components/WeatherDayDetail";
import { WeatherLocation } from "./Components/WeatherLocation";
import { WeatherProvider } from "./Contexts/WeatherContext";
import { WeatherInfoHead } from "./Components/WeatherInfoHead";

function App() {
  return (
    <>
      <div className="App">
        <WeatherProvider>
          <WeatherInfoHead />
          <WeatherLocation />
          <WeatherResume />
          <WeatherDayDetail />
        </WeatherProvider>
      </div>
      <img src="/background.png" className="backgroundMain" />
    </>
  );
}

export default App;
