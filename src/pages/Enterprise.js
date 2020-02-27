import React, { Component } from "react";
import { Layout } from "antd";
import { Row, Col, Card, Select } from "antd";
import { AppContext } from "../AppProvider";

import TableData from "../components/table";

const { Content } = Layout;
const { Option } = Select;

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: id => <a href="/monitoring">{id}</a>
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Business Sponsor",
    dataIndex: "sponsor",
    key: "sponsor"
  },
  {
    title: "Developer",
    key: "developer",
    dataIndex: "developer"
  },
  {
    title: "Validator",
    key: "validator",
    dataIndex: "validator"
  },
  {
    title: "Discrimination",
    key: "dis",
    dataIndex: "dis"
  },
  {
    title: "Population Stabilty",
    key: "ps",
    dataIndex: "ps"
  },
  {
    title: "Comments",
    key: "comments",
    dataIndex: "comments"
  },
  {
    title: "Repository",
    key: "repo",
    dataIndex: "repo"
  }
];

class Dashboard extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ enterpriseSelected, enterpriseData, enterpriseOnChange }) => {
          console.log(enterpriseData);
          return (
            <Content style={{ padding: "4px 24px", minHeight: 280 }}>
              <Row style={{ paddingBottom: "5px" }}>
                <Col>
                  <Select
                    defaultValue={
                      enterpriseSelected
                        ? enterpriseSelected
                        : "Select Business Function"
                    }
                    showSearch
                    style={{ width: 270 }}
                    placeholder="Select Business Function"
                    optionFilterProp="children"
                    onChange={ev => {
                      enterpriseOnChange(ev);
                    }}
                    //onFocus={onFocus}
                    //onBlur={onBlur}
                    //onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option key="1" value="Portfolio">
                      Overall Portfolio
                    </Option>
                    <Option key="2" value="Risk">
                      Risk
                    </Option>
                    <Option key="3" value="Marketing">
                      Marketing
                    </Option>
                    <Option key="4" value="Operations">
                      Operations
                    </Option>
                    <Option key="5" value="Others">
                      Others
                    </Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col span={10}>
                  <Card title="PORTFOLIO RISK RATING">
                    <p>speedometer</p>
                  </Card>
                </Col>
                <Col span={14}>
                  <Card title="RISK HEAT MAP">
                    <p>heat map</p>
                  </Card>
                </Col>
              </Row>

              <TableData
                title="ACTIVE MODEL INVENTORY"
                pagination="true"
                column={columns}
                dataSource={enterpriseData}
              />
            </Content>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Dashboard;
