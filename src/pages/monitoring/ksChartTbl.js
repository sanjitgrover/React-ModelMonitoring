import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import KsChart from "../../components/ksChart";
import TableData from "../../components/table";

export default class KsChartTbl extends Component {
  constructor(props) {
    super(props);
    //console.log("KsChart", props);
    this.state = {
      series: [
        {
          name: "% Event",
          data: props.apiData.KSCurve[0].cum_eventrate
        },
        {
          name: "% Non-event",
          data: props.apiData.KSCurve[0].cum_noneventrate
        }
      ],
      options: {
        xaxis: {
          categories: props.apiData.KSCurve[0].Score_Decile,
          title: {
            text: "Score Decile"
          },
          min: 0
        },
        yaxis: {
          title: {
            text: "Cumulative % Event/ Non-Event"
          },
          min: 0,
          max: 100
        }
      },
      dataSource: props.apiData.KSCurveData[0]
    };
  }

  render() {
    return (
      <Row>
        <Col span={12}>
          <Card
            className="ant-card-small nopadding"
            title={<span style={{ fontSize: "20px" }}>KS Chart</span>}
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
