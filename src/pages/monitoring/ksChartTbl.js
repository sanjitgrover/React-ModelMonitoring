import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import KsChart from "../../components/ksChart";
import TableData from "../../components/table";

export default class KsChartTbl extends Component {
  constructor(props) {
    super(props);
    //console.log("KsChart", props);
    //console.log("KSCurve", props.apiData.KSCurveData[0]);
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
          min: 0
        },
        yaxis: {
          min: 0,
          max: 100
        }
      },
      dataSource: props.apiData.KSCurveData[0]
    };
  }

  // tableColumn(record) {
  //   const columns = [];
  //   Object.keys(record).map(column => {
  //     if (column !== "key") {
  //       columns.push({ title: column, dataIndex: column, key: column });
  //     }
  //   });
  //   return columns;
  // }

  render() {
    return (
      <Row>
        <Col span={12}>
          <Card
            className="ant-card-small nopadding"
            title={<span style={{ fontSize: "20px" }}>KS Chart</span>}
          >
            <KsChart
              series={this.state.series}
              options={this.state.options}
              height={350}
            />
          </Card>
        </Col>
        <Col span={12} className="pdLeft">
          <TableData
            rowClassName="rowSubTable"
            //column={this.tableColumn(this.state.dataSource[0])}
            dataSource={this.state.dataSource}
          />
        </Col>
      </Row>
    );
  }
}
