import axios from "axios";
import weatherApiKey from "../key/weatherApiKey";

function getCurrentTemperature(city) {
  return new Promise((resolve, reject) => {
    let weatherEndpoint = `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${city}`;
    axios
      .get(weatherEndpoint)
      .then((response) => {
        if (response["data"] && response["data"]["current"]) {
          resolve({
            temperature: response["data"]["current"]["temperature"],
            precip: response["data"]["current"]["precip"],
            humidity: response["data"]["current"]["humidity"],
            windSpeed: response["data"]["current"]["wind_speed"],
            weatherIcons: response["data"]["current"]["weather_icons"],
          });
        } else {
          throw new Error("No data received from api");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

export default getCurrentTemperature;
