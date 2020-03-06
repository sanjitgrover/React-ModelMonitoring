import React, { Component } from "react";
import { Layout } from "antd";
import { Row, Col, Card, Collapse, Icon } from "antd";
import { AppContext } from "../AppProvider";

import Http from "../services/httpService";
import Config from "../config.json";
import Discrimination from "../components/discrimination";
import MonitoringFilter from "../components/monitoringFilter";
import Stability from "../components/stability";
import DataMonitoring from "../components/dataMonitoring";
import ConfusionRecall from "../pages/monitoring/confusion";
import KsChartTbl from "../pages/monitoring/ksChartTbl";
import GiniChartTbl from "../pages/monitoring/giniChartTbl";
import RankOrdering from "../pages/monitoring/rankOrdering";
import Divergence from "../pages/monitoring/divergence";
import Auc from "../pages/monitoring/auc";

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
    const defaultSelected = match.params.id ? match.params.id : "6";

    this.state = {
      selected: defaultSelected,
      risk: "green",
      discrimination: "orange",
      rank: "red",
      population: "green",
      monitoring: "red",
      apiData: []
    };
  }

  async componentDidMount() {
    console.log();
    const { data: records } = await Http.get(Config.modelDetail);
    this.setDiscriminationData(records);
  }

  setDiscriminationData = data => {
    //console.log("setDiscriminationData", data);
    const disData = data.Discrimination_Table[0].map(item => {
      if (item.Metric === "F1 Score") {
        return {
          ...item,
          expandRow: <ConfusionRecall apiData={data} />
        };
      } else if (item.Metric === "KS Statistic") {
        return {
          ...item,
          expandRow: <KsChartTbl apiData={data} />
        };
      } else if (item.Metric === "AUC") {
        return {
          ...item,
          expandRow: <Auc apiData={data} />
        };
      } else if (item.Metric === "Gini Score") {
        return {
          ...item,
          expandRow: <GiniChartTbl apiData={data} />
        };
      } else if (item.Metric === "Divergence") {
        return {
          ...item,
          expandRow: <Divergence apiData={data} />
        };
      } else {
        return item;
      }
    });
    data.discrimination = disData;
    this.setState({ apiData: data });
  };

  handleOnChange = (val, data) => {
    console.log(val);
    console.log("data", data);
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
      <AppContext.Consumer>
        {({ modelSelected, setModelSelected, modelDetails }) => {
          return (
            <Content style={{ padding: "4px 24px", minHeight: 280 }}>
              <MonitoringFilter
                onChange={this.handleOnChange}
                state={this.state}
              />

              <Row>
                <Col>
                  <Card
                    className="ant-card-small"
                    title="MODEL OBJECTIVE"
                    style={{ margin: "5px 0" }}
                  >
                    <div>
                      <p>
                        Risk Scorecard model developed at customer-level for the
                        portfolios of individuals and PYMEs (small and
                        medium-sized enterprises) with 0 days past due on all
                        credit cards, loans, and mortgage accounts in the month
                        of scoring.
                      </p>
                    </div>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Collapse
                    bordered={false}
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
                      className="panelTextPd"
                    >
                      <Discrimination apiData={this.state.apiData} />
                    </Panel>

                    <Panel
                      header={<span style={panelHeading}>Rank Ordering</span>}
                      key="2"
                      style={panelHeader}
                      className="panelTextPd"
                    >
                      <RankOrdering apiData={this.state.apiData} />
                    </Panel>

                    <Panel
                      header={
                        <span style={panelHeading}>Population Stability</span>
                      }
                      key="3"
                      style={panelHeader}
                      className="panelTextPd"
                    >
                      <Stability apiData={this.state.apiData} />
                    </Panel>
                    <Panel
                      header={
                        <span style={panelHeading}>
                          Characteristic Stability
                        </span>
                      }
                      key="4"
                      style={panelHeader}
                      className="panelTextPd"
                    >
                      <DataMonitoring apiData={this.state.apiData} />
                    </Panel>
                  </Collapse>
                </Col>
              </Row>
            </Content>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Monitoring;
