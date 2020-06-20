import axios from "axios";
import weatherApiKey from "../keys/weather-stack-api-key";

export function getCurrentTemperature(city) {
  return new Promise((resolve, reject) => {
    let weatherApiEndpoint = `http://api.weatherstack.com/current?access_key=${weatherApiKey}`;
    weatherApiEndpoint += `&query=${city}`;
    axios
      .get(weatherApiEndpoint)
      .then((response) => {
        // handle success
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
      .catch((error) => {
        // handle error
        reject(error);
      })
      .finally(() => {
        // always executed
      });
  });
}
