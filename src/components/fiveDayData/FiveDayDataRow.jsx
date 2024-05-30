import React from "react";
import FiveDayData from "./FiveDayData";
import { getFiveDayData } from "../../helpers/weatherHelper";
import styles from "../../styles/fiveDayData/fiveDayData.module.css";

function FiveDayDataRow(props) {
  const { multiDayData, weather, setWeather } = props;

  console.log("multiDayData", multiDayData);
  console.log("weather", weather);

  let five = getFiveDayData(multiDayData);
  if (!five) return null;
  return (
    <div className={styles.fiveDayData}>
      {five.map((value, index) => {
        return (
          <FiveDayData
            key={index}
            multiDayData={multiDayData}
            weather={value}
            setWeather={setWeather}
          />
        );
      })}
    </div>
  );
}

export default FiveDayDataRow;
