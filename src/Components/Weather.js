import React, { Component } from 'react'
import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";

import axios from "axios";

class Weather extends Component {

    state = {
        // coordinates for Houston, TX
        latitude: "29.7589382",
        longitude: "-95.3676974",
        weatherData: {}
    }

    componentDidMount() {
        this.getWeatherData()
    }

    getWeatherData = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&exclude=minutely,hourly&appid=42d98d76405f5b8038f2ad71187af430&units=imperial`)
        .then((res) => {
          this.setState({
              weatherData: {
                ...this.state.weatherData,
                data: res.data
              }
          })
        });
    }



  render() {
    return (
      <div>
          <CurrentWeather weatherData={this.state.weatherData}/>
          <FutureWeather weatherData={this.state.weatherData}/>
      </div>
    )
  }
}
export default Weather