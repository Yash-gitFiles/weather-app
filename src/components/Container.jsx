import React, { useState } from "react";
import styles from "../styles/components/container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  getMultiDayWeatherData,
  getWeatherData,
} from "../services/apiServices";
import {
  getDayName,
  getWeatherCondition,
  getWeatherIcon,
  kelvinToCelcius,
} from "../helpers/weatherHelper";
import FiveDayDataRow from "./fiveDayData/FiveDayDataRow";

function Container() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [multiDayData, setMultiDayData] = useState(null);

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    getWeatherData(city)
      .then((data) => {
        setWeather(data);
        getMultiDayWeatherData(data.id)
          .then((data) => {
            setMultiDayData(data.list);
          })
          .catch((error) => {
            console.log("error", error);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  console.log("asdfghj", getDayName(weather));
  function render() {
    if (!weather) {
      return <h1 className={styles.enterCity}>Please Enter City !</h1>;
    }
    return (
      <div className={styles.weatherInfo}>
        <div className={styles.weatherDefaultInfo}>
          <h2 className={styles.weatherDay}>{getDayName(weather)}</h2>
          <div className={styles.weatherIcon}>
            <img src={getWeatherIcon(weather)} alt="" />
            <h2 className={styles.weatherTemp}>
              {kelvinToCelcius(weather?.main?.temp)}
            </h2>
            <h3 className={styles.weatherCloud}>
              {getWeatherCondition(weather)}
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {render()}
        <div className={styles.weatherMultiDayInfo}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter City"
              className={styles.input}
              value={city}
              onChange={handleChange}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {weather && (
            <div className={styles.weatherDayInfo}>
              <div className={styles.weatherContent}>
                <p className={styles.title}>NAME</p>
                <span className={styles.value}>{weather?.name}</span>
              </div>
              <div className={styles.weatherContent}>
                <p className={styles.title}>TEMP</p>
                <span className={styles.value}>
                  {kelvinToCelcius(weather?.main?.temp)}
                </span>
              </div>
              <div className={styles.weatherContent}>
                <p className={styles.title}>HUMIDITY</p>
                <span className={styles.value}>
                  {weather?.main?.humidity} %
                </span>
              </div>
              <div className={styles.weatherContent}>
                <p className={styles.title}>WIND SPEED</p>
                <span className={styles.value}>
                  {weather?.wind?.speed} km/h
                </span>
              </div>
            </div>
          )}
          <div className={styles.weatherList}>
            <FiveDayDataRow
              multiDayData={multiDayData}
              weather={weather}
              setWeather={setWeather}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
