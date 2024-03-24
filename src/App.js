import logo from "./logo.svg";
import "./App.css";
import { WeatherSphere } from "./Components/WeatherSphere";
import { WeatherResume } from "./Components/WeatherResume";
import { WeatherDayDetail } from "./Components/WeatherDayDetail";
import { WeatherLocation } from "./Components/WeatherLocation";
import { WeatherProvider } from "./Contexts/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <WeatherLocation />
        <WeatherResume />
        <WeatherDayDetail />
      </WeatherProvider>
    </div>
  );
}

export default App;
