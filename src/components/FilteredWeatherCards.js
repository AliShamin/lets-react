import React from 'react';
import WeatherCard from './WeatherCard';
import { Row } from 'antd';

class FilteredWeatherCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Row>
        {
          this.props.selectedCities.map((city, index) =>
            <WeatherCard renderCondition={this.props.conditionalFilter} key={city} city={city}></WeatherCard>
          )
        }
      </Row>
    )
  }
}

export default FilteredWeatherCards;