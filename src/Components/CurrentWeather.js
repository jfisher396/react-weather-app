import React from "react";

function CurrentWeather(props) {
  console.log(props.weatherData)
  let icon = props.weatherData.current.weather[0].icon;
  let imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let currentTemp = props.weatherData.current.temp;
  currentTemp.toFixed(0);

  return (
    <div className="card">
      <div className="content">
        <h1 className="title is-4 is-size-2">Today</h1>
        <img src={imageURL} alt="weather-icon"></img>
        <div>
          <h1 className="is-size-2">{currentTemp}</h1>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
