import React from "react";
import "./WeatherCard.css"

function weatherCard(props) {
  const imageURL = `http://openweathermap.org/img/wn/`;
  const imageSize = `@2x.png`;

  function getDayAbbrev(day) {
    const timestamp = day.dt * 1000;
    const dayName = new Date(timestamp);
    const dayAbbrev = dayName.toString().slice(0, 3);
    return dayAbbrev;
  }

  return (
    <>
      {props.weatherData.map((day, index) => (
        <div className="card has-text-centered column is-full-mobile" key={index}>
          <div className="content">
            <p className="title is-4 is-size-3 mt-3 mb-1 has-text-weight-medium">{getDayAbbrev(day)}</p>
            <img
              src={imageURL + day.weather[0].icon + imageSize}
              alt="weather-icon"
            ></img>
            <div className="temp-div">
              <p className="is-size-4 high has-text-weight-medium">{day.temp.max.toFixed()}&deg;</p>
              <p className="is-size-4 low has-text-weight-medium">{day.temp.min.toFixed()}&deg;</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default weatherCard;
