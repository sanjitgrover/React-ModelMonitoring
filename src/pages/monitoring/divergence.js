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
          type: "area",
          data: props.apiData.DivergenceCurve[0].Goods
        },
        {
          name: "Bads",
          type: "area",
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
        yaxis: [
          {
            title: {
              text: "Goods"
            }
          },
          {
            opposite: true,
            title: {
              text: "Bads"
            }
          }
          //(min: 0)
          //max: 100
        ]
      },
      dataSource: props.apiData.DivergenceData[0]
    };
  }

  render() {
    return (
      <Row>
        <Col span={14}>
          <Card
            className="ant-card-small nopadding"
            title={<span style={{ fontSize: "20px" }}>Divergence Chart</span>}
          >
            <KsChart series={this.state.series} options={this.state.options} />
          </Card>
        </Col>
        <Col span={10} className="pdLeft">
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
