import React from 'react';
import WeatherCard from './WeatherCard';
import { Row, Col } from 'antd';

class FilteredWeatherCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <Row>
        {
          this.props.selectedCities.map((city, index) =>
            <Col key={index} span={6} style={{ padding: "20px" }}>
              <WeatherCard key={city} city={city}></WeatherCard>
            </Col>
          )
        }
      </Row>
    )
  }
}

export default FilteredWeatherCards;