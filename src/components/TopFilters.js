import React from 'react';
import { Row, Col } from 'antd';
import CitySelect from './CitySelect';



export default function TopFilters(props) {
    return (
        <Row>
            <Col span={8} style={{padding:"20px"}}>
                <CitySelect />
            </Col>
            <Col span={8} style={{padding:"20px"}}>Filter 2</Col>
            <Col span={8} style={{padding:"20px"}}>FIlter 3</Col>
        </Row>
    )
}