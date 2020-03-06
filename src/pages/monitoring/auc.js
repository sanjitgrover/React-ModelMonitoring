import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import KsChart from "../../components/ksChart";
import TableData from "../../components/table";

export default class Auc extends Component {
  constructor(props) {
    super(props);
    //console.log("ROCCurve", props);
    console.log("ROCCurve", props.apiData.ROCCurve[0]);

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
          categories: props.apiData.ROCCurve[0].Score_Cutoff,
          min: 0,
          //max: 1,
          // labels: {
          //   formatter: function(value) {
          //     return value.toFixed(2);
          //   }
          // },
          title: {
            text: "False Positive Rate"
          },
          type: "straight"
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
            title={<span style={{ fontSize: "20px" }}>ROC Curve</span>}
          >
            <KsChart
              series={this.state.series}
              options={this.state.options}
              height={370}
            />
          </Card>
        </Col>
        <Col
          span={12}
          className="pdLeft"
          style={{ overflowY: "scroll", maxHeight: "420px" }}
        >
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
