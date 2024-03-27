import React from "react";
import "./style.css";
import { WeatherHourDetail } from "../WeatherHourDetail";
import { WeatherContext } from "../../Contexts/WeatherContext";

function addTime(date, hours) {
  const hour = date.getHours() + hours;
  const newDate = new Date(date);
  newDate.setHours(hour);
  //console.log(hours);
  //console.log(newDate);
  return newDate;
}

function WeatherDayDetail() {
  const { data } = React.useContext(WeatherContext);

  return (
    <div className="containerDayDetail">
      {data.hourly ? (
        data.hourly.time
          .filter((t) => {
            const time = new Date(t);
            //console.log(new Date());
            const now = addTime(new Date(), -1);
            const in12hr = addTime(new Date(), 12);
            // console.log(time);
            // console.log(`${time}
            // ${now}
            // ${in12hr}`);
            return time > now && time < in12hr;
          })
          .map((t, i) => <WeatherHourDetail date={t} key={i} />)
      ) : (
        <div>Nada</div>
      )}
    </div>
  );
}

export { WeatherDayDetail };
