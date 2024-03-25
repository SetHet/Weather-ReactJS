import React from "react";
import "./style.css";
import { WeatherContext } from "../../Contexts/WeatherContext";
import { WeatherImg } from "../WeatherImg";

function WeatherSphere({ loading, current, day, location, temperature }) {
  const { data } = React.useContext(WeatherContext);

  const dataCurrent = data.current;
  const week = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const days = [
    "Hoy",
    "Mañana",
    //week[new Date(new Date().getTime() + 1000 * 60 * 60 * 24).getDay()],
    week[new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 2).getDay()],
    week[new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3).getDay()],
  ];

  if (data.elevation) {
    return (
      <div>
        <WeatherImg img="default" className="imgSphere" />

        <div className="Sphere">
          {current ? (
            <div>
              <div className="infoNow">Ahora</div>
              <div className="infoTempNow">{`${dataCurrent.temperature_2m}  ${data.current_units.temperature_2m}`}</div>
            </div>
          ) : (
            <div>
              <div className="infoDate">{`${days[day]}`}</div>
              <div className="infoTempMin">{`${data.daily.temperature_2m_min[day]} ${data.daily_units.temperature_2m_min}`}</div>
              <div className="infoTempMax">{`${data.daily.temperature_2m_max[day]} ${data.daily_units.temperature_2m_max}`}</div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <div className="Sphere"></div>;
  }
}

export { WeatherSphere };
