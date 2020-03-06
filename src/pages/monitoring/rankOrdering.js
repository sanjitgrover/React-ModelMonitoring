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
          categories: props.apiData.RankOrdering[0].Score_Decile,
          min: 0
        },
        yaxis: {
          title: {
            text: "Cumulative Events"
          },
          min: 0
          //max: 0.7
        }
      },
      dataSource: props.apiData.RankOrderingData[0]
    };
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
          <TableData
            class="subTable"
            rowClassName="rowSubTable"
            //column={this.tableColumn(this.state.dataSource[0])}
            dataSource={this.state.dataSource}
          />
        </Col>
      </Row>
    );
  }
}

export default RankOrdering;
