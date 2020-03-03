import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import TableData from "../../components/table";
import KsChart from "../../components/ksChart";

class RankOrdering extends Component {
  constructor(props) {
    super(props);
    //console.log("Ranking", props);

    this.state = {
      series: [
        {
          name: "Actual % Event",
          data: props.apiData.RankOrdering[0].Actual_Bad
        },
        {
          name: "Expected % Event",
          data: props.apiData.RankOrdering[0].Expected_Bad
        }
      ],
      options: {
        xaxis: {
          categories: props.apiData.RankOrdering[0].Bin
        },
        yaxis: {
          title: {
            text: "Cumulative Events"
          },
          min: 0,
          max: 0.7
        }
      },
      dataSource: props.apiData.RankOrderingData[0]
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
      <Row style={{ background: "#fff" }}>
        <Col span={12}>
          <Card
            className="ant-card-small nopadding"
            title={<span style={{ fontSize: "20px" }}></span>}
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
            title={<span style={{ fontSize: "20px" }}></span>}
          >
            <TableData
              class="subTable"
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

export default RankOrdering;
