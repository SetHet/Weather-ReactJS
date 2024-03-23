import logo from "./logo.svg";
import "./App.css";
import { WeatherSphere } from "./Components/WeatherSphere";
import { WeatherResume } from "./Components/WeatherResume";
import { WeatherDayDetail } from "./Components/WeatherDayDetail";
import { WeatherLocation } from "./Components/WeatherLocation";

function App() {
  return (
    <div className="App">
      <WeatherLocation />
      <WeatherResume />
      <WeatherDayDetail />
    </div>
  );
}

export default App;
