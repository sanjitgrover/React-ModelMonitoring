import React, { Component } from "react";
import { Row, Col, Avatar } from "antd";

import TableData from "../components/table";
import BarChart from "../components/barChart";

class DataMonitoring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: props.apiData.CSI[0].CSI_Score
        }
      ],
      options: {
        title: {
          text: "CSI Scores For Significant Variable"
        },
        xaxis: {
          categories: props.apiData.CSI[0].Variable
        },
        yaxis: {
          title: {
            text: ""
          }
        }
      },
      dataSource: props.apiData.CSIData[0]
    };
  }

  render() {
    return (
      <div style={{ background: "#fff" }}>
        <Row style={{ padding: "5px" }}>
          <Col span={1}></Col>
          <Col span={10}>
            <BarChart series={this.state.series} options={this.state.options} />
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <TableData
              rowClassName="rowSubTable"
              //column={tblHeader}
              dataSource={this.state.dataSource}
              scroll={true}
            />
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
    );
  }
}

export default DataMonitoring;
