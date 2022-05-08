import axios from 'axios'

const API = {

    // returns weather data for Houston, Texas
    getWeather: () => {
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=29.7589382&lon=-95.3676974&exclude=minutely,hourly&appid=42d98d76405f5b8038f2ad71187af430&units=imperial`)
    }
}

export default API