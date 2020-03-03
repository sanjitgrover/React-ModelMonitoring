import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import KsChart from "../../components/ksChart";
import TableData from "../../components/table";

export default class GiniChartTbl extends Component {
  constructor(props) {
    super(props);
    //console.log("KsChart", props);
    console.log("LorenzCurve", props.apiData.LorenzCurve[0]);
    this.state = {
      series: [
        {
          name: "Cummulative % Population",
          data: props.apiData.LorenzCurve[0].Cummulative_Bad
        }
      ],
      options: {
        xaxis: {
          categories: props.apiData.LorenzCurve[0].Cummulative_Total,
          title: {
            text: "Cumulative % Population"
          }
        },
        yaxis: {
          title: {
            text: "Cumulative % Events"
          },
          min: 0,
          max: 1
        }
      },
      dataSource: props.apiData.LorenzCurveData[0]
    };
  }

  tableColumn(record) {
    const columns = [];
    Object.keys(record).map(column => {
      if (column !== "key") {
        columns.push({ title: column, dataIndex: column, key: column });
      }
    });
    return columns;
  }

  render() {
    return (
      <Row>
        <Col span={12}>
          <Card
            className="ant-card-small nopadding"
            title={<span style={{ fontSize: "20px" }}>Lorenz Curve Chart</span>}
          >
            <KsChart
              series={this.state.series}
              options={this.state.options}
              height={350}
            />
          </Card>
        </Col>
        <Col span={12} className="pdLeft">
          <Card
            className="ant-card-small nopadding"
            title={<span style={{ fontSize: "20px" }}>Lorenz Curve Table</span>}
          >
            <TableData
              rowClassName="rowSubTable"
              column={this.tableColumn(this.state.dataSource[0])}
              dataSource={this.state.dataSource}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}
