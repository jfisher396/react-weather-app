import React from "react";

function CurrentWeather(props) {
  
  const icon = props.weatherData.current.weather[0].icon;
  const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const currentTemp = props.weatherData.current.temp;
  const currentTempFixed = currentTemp.toFixed();
  const currentTimestamp = props.weatherData.current.dt * 1000;
  const today = new Date(currentTimestamp);
  const todayAbbrev = today.toString().slice(0,3);

  
  return (
    <div className="card">
      <div className="content">
        <h1 className="title is-4 is-size-2">{todayAbbrev}</h1>
        <img src={imageURL} alt="weather-icon"></img>
        <div>
          <h1 className="is-size-2">{currentTempFixed}</h1>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
