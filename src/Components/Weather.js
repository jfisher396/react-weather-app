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
      console.log(res.data)
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
            <CurrentWeather weatherData={this.state.weatherData} />
            <FutureWeather weatherData={this.state.weatherData.daily} />
          </>
        )}
      </div>
    );
  }
}
export default Weather;
