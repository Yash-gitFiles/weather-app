export function getWeatherData(city) {
  console.log("city", city);
  const promise = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return promise;
}

export function getMultiDayWeatherData(id) {
  const promise = fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.REACT_APP_WEATHER_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return promise;
}
