import React from "react";
import {
  getDayName,
  getWeatherIcon,
  kelvinToCelcius,
} from "../../helpers/weatherHelper";
import styles from "../../styles/fiveDayData/fiveDayData.module.css";

function FiveDayData(props) {
  const { weather, setWeather } = props;
  function fun() {
    setWeather((s) => ({ ...s, ...weather }));
  }

  console.log("weather", weather);
  console.log("asdfg45", getDayName(weather));
  return (
    <div className={styles.container} onClick={fun}>
      <p>{getDayName(weather)}</p>
      <img src={getWeatherIcon(weather)} alt="01" />
      <p>{kelvinToCelcius(weather?.main?.temp)}</p>
    </div>
  );
}

export default FiveDayData;
