import React from "react";
import { Row, Col } from "antd";
import CitySelect from "./CitySelect";
import ConditionalFilter from "./ConditionalFilter";

export default function TopFilters(props) {
  return (
    <Row>
      <Col span={8} style={{ padding: "20px" }}>
        <CitySelect onCityChange={props.onCityChange} />
      </Col>
      <Col span={16} style={{ padding: "20px" }}>
        <ConditionalFilter
          onFilterChange={props.onFilterChange}
          onFilterClear={props.onFilterClear}
        />
      </Col>
    </Row>
  );
}
