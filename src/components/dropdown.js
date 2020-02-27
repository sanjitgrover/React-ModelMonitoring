import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Dropdown = props => {
  return (
    <Select
      defaultValue={
        props.selected ? props.selected : "Select Business Function"
      }
      showSearch
      style={{ width: 270 }}
      placeholder="Select Business Function"
      optionFilterProp="children"
      onChange={props.onChange}
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="Portfolio">Overall Portfolio</Option>
      <Option value="Risk">Risk</Option>
      <Option value="Marketing">Marketing</Option>
      <Option value="Operations">Operations</Option>
      <Option value="Others">Others</Option>
    </Select>
  );
};

export default Dropdown;
