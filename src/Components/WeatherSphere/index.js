import React from "react";
import "./style.css";
import { WeatherContext } from "../../Contexts/WeatherContext";

function WeatherSphere({ loading, current, day, location, temperature }) {
  const { data } = React.useContext(WeatherContext);

  const dataCurrent = data.current;

  return (
    <div className="Sphere">
      {current ? (
        <div>
          <div>Ahora</div>
          <div>{`${dataCurrent.temperature_2m}  ${data.current_units.temperature_2m}`}</div>
        </div>
      ) : (
        <div>
          <div>{`${data.daily.time[day]}`}</div>
          <div>{`min ${data.daily.temperature_2m_min[day]} ${data.daily_units.temperature_2m_min}`}</div>
          <div>{`max ${data.daily.temperature_2m_max[day]} ${data.daily_units.temperature_2m_max}`}</div>
        </div>
      )}
    </div>
  );
}

export { WeatherSphere };
