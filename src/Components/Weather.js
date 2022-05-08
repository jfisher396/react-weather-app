import React, { Component } from "react";
import API from "../API/API";
import WeatherCard from "./WeatherCard";

class Weather extends Component {
  state = {
    weatherData: {},
    loading: true,
  };

  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData = () => {
    API.getWeather().then((res) => {
      
      if (res.status === 200) {
        this.setState({
          weatherData: res.data,
          loading: false,
        });
      } else {
        console.log("Something went wrong retrieving data");
      }
    });
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="container">
        {loading && (
          <progress className="progress is-small is-success" max="100">
            15%
          </progress>
        )}
        {!loading && (
          <>
            <WeatherCard weatherData={this.state.weatherData.daily.slice(0,5)} />
          </>
        )}
      </div>
    );
  }
}
export default Weather;
