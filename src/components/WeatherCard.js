/**
 * returns a weather card wich contains an image showing current weather
 * current temperature, humidity
 * card background color changes based on the temperature
 **/

import React from "react";
import { Card } from "antd";
import "./WeatherCard.css";
import { Col } from "antd";
import getCurrentTemperature from "../service/RestApiCall";
import store from "../store/Store";

class WeatherCard extends React.Component {
  subscription;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      theme: { "background-color": "#61dafb" },
    };
    this.isRenderingAllowed = this.isRenderingAllowed.bind(this);
  }
  isRenderingAllowed() {
    if (!this.props.renderCondition) return true;
    switch (this.props.renderCondition.condition) {
      case ">=":
        if (
          this.state[this.props.renderCondition.measure] >=
          this.props.renderCondition.value
        )
          return true;
        break;
      case "<=":
        if (
          this.state[this.props.renderCondition.measure] <=
          this.props.renderCondition.value
        )
          return true;
        break;
      default:
        break;
    }
    return false;
  }

  componentDidMount() {
    let currentCity = this.props.city;
    getCurrentTemperature(currentCity)
      .then((response) => {
        this.setState({
          temperature: response.temperature,
          precip: response.precip,
          humidity: response.humidity,
          windSpeed: response.windSpeed,
          weatherIcons: response.weatherIcons,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.unsubscribe = store.subscribe(() => {
      this.setState({
        theme: store.getState().theme,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe(); // in order to avoid any memory leak and resource leak
  }
  render() {
    return (
      <>
        {this.isRenderingAllowed() ? (
          <Col key={this.props.city} span={6} style={{ padding: "20px" }}>
            <Card
              title={this.props.city}
              size="small"
              headStyle={this.state.theme}
            >
              <img
                className="weatherImage"
                alt="sunny"
                src={this.state.weatherIcons}
              ></img>
              <h4>Temperature :{this.state.temperature} C </h4>
              <h4>Precipitation :{this.state.precip} % </h4>
              <h4>Humidity :{this.state.humidity}% </h4>
              <h4>Wind Speed :{this.state.windSpeed} km/h </h4>
            </Card>
          </Col>
        ) : null}
      </>
    );
  }
}

export default WeatherCard;

// import { getCurrentTemperature } from "../services/apiService";
// componentDidMount() {
//     let currentCity = this.props.city
//     getCurrentTemperature(currentCity)
//         .then(response => {
//             this.setState({
//                 isLoading: false,
//                 temperature: response.temperature,
//                 precip: response.precip,
//                 humidity: response.humidity,
//                 windSpeed: response.windSpeed,
//                 weatherIcons: response.weatherIcons
//             })
//         }).catch(error => {
//             console.log(error);
//         })
// }

// render() {
//     return (
//         <>
//             {this.isRenderingAllowed() ? (
//                 <Col key={this.props.city} span={6} style={{ padding: "20px" }}>
//                     <Card title={this.props.city} loading={this.state.isLoading}>
//                         <img
//                             className="weatherImage"
//                             alt="sunny"
//                             src={this.state.weatherIcons}
//                         ></img>
//                         <h4>Temperature : {this.state.temperature} °C</h4>
//                         <h4>Precipitation : {this.state.precip} %</h4>
//                         <h4>Humidity : {this.state.humidity} %</h4>
//                         <h4>Wind Speed : {this.state.windSpeed} km/h</h4>
//                     </Card>
//                 </Col>
//             ) : null}
//         </>
//     );
//}
