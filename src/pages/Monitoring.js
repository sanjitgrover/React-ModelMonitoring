import React, { Component } from "react";
import { Layout } from "antd";
import { Row, Col, Card, Collapse, Icon } from "antd";

import Discrimination from "../components/discrimination";
import MonitoringFilter from "../components/monitoringFilter";
import Stability from "../components/stability";
import DataMonitoring from "../components/dataMonitoring";

const { Panel } = Collapse;
const { Content } = Layout;

function callback(key) {
  console.log(key);
}
const panelHeader = {
    background: "rgb(32, 56, 100)"
  },
  panelHeading = {
    color: "#fff",
    fontWeight: "bold"
  };

class Monitoring extends Component {
  constructor(props) {
    super(props);
    const { match } = props;
    const defaultSelected = match.params.id ? match.params.id : "1";

    this.state = {
      selected: defaultSelected,
      risk: "green",
      discrimination: "orange",
      rank: "red",
      population: "green",
      monitoring: "red"
    };
  }

  handleOnChange = (val, data) => {
    console.log(val);
    this.setState({
      selected: val,
      risk: data.filter(function(el) {
        return el.key === val;
      })[0].risk,
      discrimination: data.filter(function(el) {
        return el.key === val;
      })[0].dis,
      population: data.filter(function(el) {
        return el.key === val;
      })[0].ps,
      monitoring: data.filter(function(el) {
        return el.key === val;
      })[0].dmonitoring
    });
  };

  render() {
    return (
      <Content style={{ padding: "4px 24px", minHeight: 280 }}>
        <MonitoringFilter onChange={this.handleOnChange} state={this.state} />

        <Row>
          <Col>
            <Card
              className="ant-card-small"
              title="MODEL OBJECTIVE"
              style={{ margin: "5px 0" }}
            >
              <div>
                <p>
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog. The quick brown fox jumps over
                  the lazy dog. The quick brown fox jumps over the lazy dog. The
                  quick brown fox jumps over the lazy dog.
                </p>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Collapse
                accordion
                onChange={callback}
                expandIconPosition="right"
                expandIcon={({ isActive }) => (
                  <Icon
                    type="caret-right"
                    rotate={isActive ? 90 : 0}
                    style={{ color: "#fff" }}
                  />
                )}
              >
                <Panel
                  header={
                    <span style={panelHeading}>Model Discrimination</span>
                  }
                  key="1"
                  style={panelHeader}
                >
                  <Discrimination />
                </Panel>

                <Panel
                  header={<span style={panelHeading}>Rank Ordering</span>}
                  key="2"
                  style={panelHeader}
                >
                  <div>'Chart'</div>
                </Panel>

                <Panel
                  header={
                    <span style={panelHeading}>Population Stability</span>
                  }
                  key="3"
                  style={panelHeader}
                >
                  <Stability />
                </Panel>
                <Panel
                  header={<span style={panelHeading}>Data Monitoring</span>}
                  key="4"
                  style={panelHeader}
                >
                  <DataMonitoring />
                </Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Monitoring;
