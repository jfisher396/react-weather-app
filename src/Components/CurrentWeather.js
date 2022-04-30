import React from 'react'

 function CurrentWeather(props) {

  let icon = props.weatherData.data.current.weather[0].icon;
  let imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <div className="card">
      <div className="content">
        <p className="title is-4"></p>
        <img src={imageURL} alt="weather-icon"></img>
      </div>  

    </div>
  )
}

export default CurrentWeather