import React, { Component } from "react";
import { Layout } from "antd";
import { Row, Col, Card, Collapse, Icon } from "antd";
import Axios from "axios";

import Discrimination from "../components/discrimination";
import MonitoringFilter from "../components/monitoringFilter";
import Stability from "../components/stability";
import DataMonitoring from "../components/dataMonitoring";
import ConfusionRecall from "../pages/monitoring/confusion";
import KsChart from "../components/ksChart";

const { Panel } = Collapse;
const { Content } = Layout;

function callback(key) {
  console.log("Expand", key);
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
      monitoring: "red",
      apiData: [],
      series: [
        {
          name: "Event",
          data: [0, 20, 39, 56, 70, 80, 88, 94, 97, 99, 100]
        },
        {
          name: "Non-event",
          data: [0, 0, 2, 6, 13, 23, 35, 48, 64, 81, 100]
        }
      ]
    };
  }

  async componentDidMount() {
    const url = "/Final.json";
    const { data: records } = await Axios.get(url);
    //this.setState({ apiData: records });
    this.setDiscriminationData(records);
  }

  setDiscriminationData = data => {
    console.log("data", data);
    const disData = data.discrimination.map(item => {
      if (item.metric === "FI Score") {
        return {
          ...item,
          expandRow: <ConfusionRecall apiData={this.state.apiData} />
        };
      } else if (item.metric === "KS Statistic") {
        return {
          ...item,
          expandRow: (
            <Row>
              <Col span={10}>
                <Card
                  className="ant-card-small nopadding"
                  title={<span style={{ fontSize: "20px" }}>KS Chart</span>}
                >
                  <KsChart series={this.state.series} />
                </Card>
              </Col>
              <Col span={14}>
                <Card
                  className="ant-card-small nopadding"
                  title={<span style={{ fontSize: "20px" }}>KS Chart</span>}
                ></Card>
              </Col>
              <Col span={7}></Col>
            </Row>
          )
        };
      } else {
        return item;
      }
    });
    data.discrimination = disData;
    this.setState({ apiData: data });
    console.log("disData", data);
  };

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
                  <Discrimination apiData={this.state.apiData} />
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
