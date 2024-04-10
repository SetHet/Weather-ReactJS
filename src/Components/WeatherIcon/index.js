import React from "react";
import { ReactComponent as IconDefault } from "../../media/default3.svg";
import { ReactComponent as IconSunny } from "../../media/sunny.svg";
import "./style.css";

const Icons = {
  default: <IconDefault className="svg-icon" />,
  sunny: <IconSunny className="svg-icon" />,
};

function WeatherIcon({ children, icon, className }) {
  if (!icon) icon = "default";

  return Icons[icon];
}

export { WeatherIcon };
