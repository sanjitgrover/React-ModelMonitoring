import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import KsChart from "../../components/ksChart";
import TableData from "../../components/table";

export default class GiniChartTbl extends Component {
  constructor(props) {
    super(props);
    //console.log("KsChart", props);
    //console.log("LorenzCurve", props.apiData.LorenzCurve[0]);
    this.state = {
      series: [
        {
          name: "Goods",
          data: props.apiData.DivergenceCurve[0].Goods
        },
        {
          name: "Bads",
          data: props.apiData.DivergenceCurve[0].Bads
        }
      ],
      options: {
        xaxis: {
          categories: props.apiData.DivergenceCurve[0].Score,
          title: {
            //text: "Cumulative % Population"
          },
          min: 0
        },
        yaxis: {
          title: {
            //text: "Cumulative % Events"
          },
          min: 0
          //max: 100
        }
      },
      dataSource: props.apiData.DivergenceData[0]
    };
  }

  render() {
    return (
      <Row>
        <Col span={12}>
          <Card
            className="ant-card-small nopadding"
            title={<span style={{ fontSize: "20px" }}>Divergence Chart</span>}
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
