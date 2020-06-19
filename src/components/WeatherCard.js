/**
 * returns a weather card wich contains an image showing current weather
 * current temperature, humidity
 * card background color changes based on the temperature
 **/

import React from 'react';
import { Card } from 'antd';
import './WeatherCard.css'

class WeatherCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Card title={this.props.city}>
                <img className="weatherImage" alt="sunny" src="https://www.freepngimg.com/thumb/weather/23529-2-weather-hd.png"></img>
                <h4>Temperature :</h4>
                <h4>Humidity :</h4>
                <h4>Precipitation :</h4>
                <h4>Wind Speed :</h4>
            </Card>
        )
    }
}

export default WeatherCard;