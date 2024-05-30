const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function kelvinToCelcius(kelvin) {
  return `${Math.round(kelvin - 273.15)}°C`;
}

export function getWeatherIcon(weather) {
  if (!weather) {
    return "/images/01d.png";
  }
  return `/images/${weather.weather[0].icon.slice(0, 2)}d.png`;
}

export function getWeatherCondition(weather) {
  if (!weather) {
    return "N/A";
  }
  return weather.weather[0].main;
}

export function getFiveDayData(list) {
  if (!list) return null;
  return list.filter((value, index) => {
    if (index % 8 === 0) {
      return true;
    }
    return false;
  });
}

export function getDayName(weather) {
  if (!weather) return "";
  if (!weather.dt_txt) {
    console.log("weather.dt", weather);
    return day[new Date(Date.now()).getDay()];
  }
  return day[new Date(weather?.dt_txt?.split(" ")[0]).getDay()];
}
