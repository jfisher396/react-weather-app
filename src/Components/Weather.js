import React, { Component } from "react";
import API from "../API/API";
import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";

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
      console.log("api response:", res.data);
      console.log("status", res.status);

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
          <progress className="progress is-small is-primary" max="100">
            15%
          </progress>
        )}
        {!loading && (
          <>
            <CurrentWeather weatherData={this.state.weatherData} />
            <FutureWeather weatherData={this.state.weatherData} />
          </>
        )}
      </div>
    );
  }
}
export default Weather;
