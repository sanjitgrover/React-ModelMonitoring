import React, { Component } from "react";
import { Layout } from "antd";
import { Row, Col, Card } from "antd";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Discrimination from "../components/discrimination";
import MonitoringFilter from "../components/monitoringFilter";
import Stability from "../components/stability";
import DataMonitoring from "../components/dataMonitoring";
import ConfusionRecall from "../pages/monitoring/confusion";
import KsChartTbl from "../pages/monitoring/ksChartTbl";
import GiniChartTbl from "../pages/monitoring/giniChartTbl";
import RankOrdering from "../pages/monitoring/rankOrdering";
import Auc from "../pages/monitoring/auc";

const { Content } = Layout;

const panelHeader = {
    background: "rgb(32, 56, 100)"
  },
  panelHeading = {
    color: "#fff",
    fontWeight: "bold"
  };

class PdfMonitoring extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor", props);
    const defaultSelected = props.id ? props.id : "6";

    this.state = {
      selected: defaultSelected,
      risk: "green",
      discrimination: "orange",
      rank: "red",
      population: "green",
      monitoring: "red",
      apiData: []
    };
    if (props.modelDetails) this.setDiscriminationData(props.modelDetails);
  }

  setDiscriminationData = data => {
    console.log("setDiscriminationData", data);
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
      } else {
        return item;
      }
    });
    data.discrimination = disData;
    this.setState({ apiData: data });
  };

  render() {
    return (
      <div>
        <MonitoringFilter state={this.state} />
        <Row>
          <Col>
            <Card
              className="ant-card-small"
              title="MODEL OBJECTIVE"
              style={{ margin: "5px 0" }}
            >
              <div>
                <p>
                  Risk Scorecard to identify customers at high default risk for
                  personales customer base
                </p>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Discrimination apiData={this.state.apiData} />

            <RankOrdering apiData={this.state.apiData} />

            <Stability />
            <DataMonitoring />
          </Col>
        </Row>
      </div>
    );
  }
}

export default PdfMonitoring;
