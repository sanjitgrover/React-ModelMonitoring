import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import KsChart from "../../components/ksChart";
import TableData from "../../components/table";

export default class Auc extends Component {
  constructor(props) {
    super(props);
    //console.log("ROCCurve", props);

    this.state = {
      series: [
        {
          name: "Model",
          data: props.apiData.ROCCurve[0].TruePositiveRate
        },
        {
          name: "Random",
          data: props.apiData.ROCCurve[0].FalsePositiveRate
        }
      ],
      options: {
        xaxis: {
          categories: props.apiData.ROCCurve[0].FalsePositiveRate,
          labels: {
            offsetX: 0,
            offsetY: -5
          },
          title: {
            text: "False Positive Rate"
          },
          type: "numeric",
          min: 0,
          max: 1
        },
        yaxis: {
          title: {
            text: "True Positive Rate"
          },
          min: 0
          //max: 1
        }
      },
      dataSource: props.apiData.ROCData[0]
    };
  }

  render() {
    return (
      <Row>
        <Col span={12}>
          <Card
            className="ant-card-small nopadding"
            title={<span style={{ fontSize: "20px" }}>ROC Curve</span>}
          >
            <KsChart series={this.state.series} options={this.state.options} />
          </Card>
        </Col>
        <Col span={12} className="pdLeft">
          <TableData
            rowClassName="rowSubTable"
            dataSource={this.state.dataSource}
            scroll={true}
          />
        </Col>
      </Row>
    );
  }
}
