/**
 * returns a weather card wich contains an image showing current weather
 * current temperature, humidity
 * card background color changes based on the temperature
 **/

import React from "react";
import { Card } from "antd";
import "./WeatherCard.css";
import { getCurrentTemperature } from "../services/apiService";
import { Col } from "antd";
import store from "../store/Store";

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      size: "small",
      headStyle: { "background-color": "#fad390" },
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
          isLoading: false,
          temperature: response.temperature,
          precip: response.precip,
          humidity: response.humidity,
          windSpeed: response.windSpeed,
          weatherIcons: response.weatherIcons,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    store.subscribe(() => {
      this.setState({
        headStyle: store.getState().theme,
      });
    });
  }
  render() {
    return (
      <>
        {this.isRenderingAllowed() ? (
          <Col key={this.props.city} span={6} style={{ padding: "20px" }}>
            <Card
              title={this.props.city}
              loading={this.state.isLoading}
              size={this.state.size}
              headStyle={this.state.headStyle}
            >
              <img
                className="weatherImage"
                alt="sunny"
                src={this.state.weatherIcons}
              ></img>
              <h4>Temperature : {this.state.temperature} °C</h4>
              <h4>Precipitation : {this.state.precip} %</h4>
              <h4>Humidity : {this.state.humidity} %</h4>
              <h4>Wind Speed : {this.state.windSpeed} km/h</h4>
            </Card>
          </Col>
        ) : null}
      </>
    );
  }
}

export default WeatherCard;
