import React from "react";

function FutureWeather(props) {
  console.log(props);
  console.log(props.weatherData[0].weather[0].icon);

  const imageURL = `http://openweathermap.org/img/wn/`;
  const imageSize = `@2x.png`;

  return (
    <>
      {props.weatherData.map((day, index) => (
        <div className="card" key={index}>
          <div className="content">
            <h1 className="title is-4 is-size-2">{}</h1>
            <img
              src={imageURL + day.weather[0].icon + imageSize}
              alt="weather-icon"
            ></img>
            <div>
              <h1 className="is-size-2">{day.temp.max.toFixed()}</h1>
              <h1 className="is-size-2">{day.temp.min.toFixed()}</h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FutureWeather;
