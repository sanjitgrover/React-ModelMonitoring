import React from "react";
import { Row, Col, Input, Card, Select, Avatar } from "antd";
import { AppContext } from "../AppProvider";

const InputGroup = Input.Group;
const { Option } = Select;

const inputGroup = {
    padding: "1px 5px",
    marginLeft: "13px"
  },
  inputLabel = {
    width: "40%",
    background: "rgb(32, 56, 100)",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    height: "32px",
    padding: "4px 11px"
  },
  select = {
    width: "55%"
  },
  pdL50 = {
    paddingLeft: "50px"
  },
  inputLabelWidth = {
    width: "50%",
    background: "rgb(32, 56, 100)",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    height: "32px",
    padding: "4px 11px"
  },
  inputGroupR = {
    padding: "1px 5px",
    marginLeft: "17%"
  };

function getAvatar(color) {
  const avatar = {
    green: (
      <Avatar
        style={{
          backgroundColor: "green",
          verticalAlign: "middle",
          display: "block"
        }}
        size="small"
      />
    ),
    orange: (
      <Avatar
        style={{
          backgroundColor: "orange",
          verticalAlign: "middle",
          display: "block"
        }}
        size="small"
      />
    ),
    red: (
      <Avatar
        style={{
          backgroundColor: "red",
          verticalAlign: "middle",
          display: "block"
        }}
        size="small"
      />
    )
  };
  return avatar[color];
}

const MonitoringFilter = props => {
  return (
    <AppContext.Consumer>
      {({ data }) => {
        return (
          <Row>
            <Col span={14}>
              <Card
                className="ant-card-small"
                title="ABOUT THE MODEL"
                style={{ margin: "0 10px 10px 0" }}
              >
                <div>
                  <InputGroup style={inputGroup} compact>
                    <label style={inputLabel}>Model ID</label>
                    <Select
                      value={props.state.selected}
                      style={select}
                      onChange={ev => props.onChange(ev, data)}
                    >
                      {data.map(el => {
                        return (
                          <Option key={el.key} value={el.key}>
                            {el.id}
                          </Option>
                        );
                      })}
                    </Select>
                  </InputGroup>

                  <InputGroup style={inputGroup} compact>
                    <label style={inputLabel}>Model Name</label>
                    <Select
                      value={props.state.selected}
                      style={select}
                      onChange={ev => props.onChange(ev, data)}
                    >
                      {data.map(el => {
                        return (
                          <Option key={el.key} value={el.key}>
                            {el.name}
                          </Option>
                        );
                      })}
                    </Select>
                  </InputGroup>

                  <InputGroup style={inputGroup} compact>
                    <label style={inputLabel}>Business Sponsor</label>
                    <Select
                      value={props.state.selected}
                      style={select}
                      onChange={ev => props.onChange(ev, data)}
                    >
                      {data.map(el => {
                        return (
                          <Option key={el.key} value={el.key}>
                            {el.sponsor}
                          </Option>
                        );
                      })}
                    </Select>
                  </InputGroup>

                  <InputGroup style={inputGroup} compact>
                    <label style={inputLabel}>Model Developer</label>
                    <Select
                      value={props.state.selected}
                      style={select}
                      onChange={ev => props.onChange(ev, data)}
                    >
                      {data.map(el => {
                        return (
                          <Option key={el.key} value={el.key}>
                            {el.developer}
                          </Option>
                        );
                      })}
                    </Select>
                  </InputGroup>

                  <InputGroup style={inputGroup} compact>
                    <label style={inputLabel}>Model Validator</label>
                    <Select
                      value={props.state.selected}
                      style={select}
                      onChange={ev => props.onChange(ev, data)}
                    >
                      {data.map(el => {
                        return (
                          <Option key={el.key} value={el.key}>
                            {el.validator}
                          </Option>
                        );
                      })}
                    </Select>
                  </InputGroup>
                </div>
              </Card>
            </Col>
            <Col span={10}>
              <Card style={{ padding: "1px" }} className="cardPadding">
                <InputGroup style={inputGroupR} compact>
                  <label style={inputLabelWidth}>Model Risk Rating</label>
                  <div style={pdL50}>{getAvatar(props.state.risk)}</div>
                </InputGroup>
              </Card>
            </Col>

            <Col span={10}>
              <Card style={{ margin: "4px 0px" }}>
                <InputGroup style={inputGroupR} compact>
                  <label style={inputLabelWidth}>Model Discrimination</label>
                  <div style={pdL50}>
                    {getAvatar(props.state.discrimination)}
                  </div>
                </InputGroup>

                <InputGroup style={inputGroupR} compact>
                  <label style={inputLabelWidth}>Rank Ordering</label>
                  <div style={pdL50}>{getAvatar(props.state.rank)}</div>
                </InputGroup>

                <InputGroup style={inputGroupR} compact>
                  <label style={inputLabelWidth}>Population Stability</label>
                  <div style={pdL50}>{getAvatar(props.state.population)}</div>
                </InputGroup>

                <InputGroup style={inputGroupR} compact>
                  <label style={inputLabelWidth}>Data Monitoring</label>
                  <div style={pdL50}>{getAvatar(props.state.monitoring)}</div>
                </InputGroup>
              </Card>
            </Col>
          </Row>
        );
      }}
    </AppContext.Consumer>
  );
};

export default MonitoringFilter;
