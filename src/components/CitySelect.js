import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const cities = [
    "Mumbai", "Delhi", "Benguluru", "Chennai", "Srinagar", "Lucknow",
    "Gurugram", "Hyderabad", "Patna", "chandigarh", "Panaji", "Kolkata"
];
const citiesOptions = [];
cities.forEach((city) => {
    citiesOptions.push(<Option key={city}>{city}</Option>);
})
class CitySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.cityChange = this.cityChange.bind(this)
    }
    cityChange(event) {

    }
    render() {
        return (
            <Select
                mode="multiple"
                placeholder="Select Cities"
                defaultValue={cities.slice(0, 2)}
                onChange={this.cityChange}
                style={{ width: '100%' }}
            >
                {citiesOptions}
            </Select>
        )
    }
}
export default CitySelect;