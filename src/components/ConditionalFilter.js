import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { Row, Col } from 'antd';
const { Option } = Select;

let measureUnitMapping = {
    "temperature": "°C",
    "humidity": "%",
    "precip": "%",
    "windSpeed": "km/h",
}

export default function ConditionalFilter(props) {
    const [unit, setUnit] = React.useState("");
    const onFinish = values => {
        console.log('Success:', values);
        props.onFilterChange(values)
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const handleMeasureChange = (measure) => {
        setUnit(measureUnitMapping[measure]);
    }
    return (
        <Row>
            <Col span={16}>
                <Form
                    layout="inline"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="measure"
                        rules={[
                            {
                                required: true,
                                message: 'Select Measure',
                            },
                        ]}
                    >
                        <Select style={{ width: '200px' }} onChange={handleMeasureChange} placeholder="Select measure">
                            <Option value="temperature">Temperature</Option>
                            <Option value="humidity">Humidity</Option>
                            <Option value="precip">Precipitation</Option>
                            <Option value="windSpeed">Wind Speed</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="condition"
                        rules={[
                            {
                                required: true,
                                message: 'Select Condition',
                            },
                        ]}
                    >
                        <Select style={{ width: '100px', marginLeft: "8px" }} placeholder="Condition">
                            <Option value=">=">{">="}</Option>
                            <Option value="<=">{"<="}</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="value"
                        rules={[
                            {
                                required: true,
                                message: 'Enter Value',
                            },
                        ]}
                    >
                        <Input style={{ width: '100px', margin: "0 8px" }} suffix={unit} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Filter
            </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={8}>
                <Button type="primary" onClick={props.onFilterClear} danger>
                    Clear Filters
                </Button>
            </Col>
        </Row>
    )
}
