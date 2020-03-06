import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import KsChart from "../../components/ksChart";
import TableData from "../../components/table";

export default class GiniChartTbl extends Component {
  constructor(props) {
    super(props);
    //console.log("KsChart", props);
    this.state = {
      series: [
        {
          name: "Model",
          data: props.apiData.LorenzCurve[0].Cummulative_Event
        },
        {
          name: "Random",
          data: props.apiData.LorenzCurve[0].Cummulative_Total
        }
      ],
      options: {
        xaxis: {
          categories: props.apiData.LorenzCurve[0].Cummulative_Total,
          title: {
            text: "Cumulative % Population"
          },
          min: 0
        },
        yaxis: {
          title: {
            text: "Cumulative % Events"
          },
          min: 0,
          max: 100
        }
      },
      dataSource: props.apiData.LorenzCurveData[0]
    };
  }

  render() {
    return (
      <Row>
        <Col span={12}>
          <Card
            className="ant-card-small nopadding"
            title={<span style={{ fontSize: "20px" }}>Lorenz Curve Chart</span>}
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
