import React, { Component } from "react";
import { Row, Col, Avatar } from "antd";

import TableData from "../components/table";
import BarChart from "../components/barChart";

const columns = [
  {
    title: "Variable",
    dataIndex: "variable",
    key: "variable"
  },
  {
    title: "Data Quality Diagnostics",
    children: [
      {
        title: "Null Values",
        dataIndex: "null_value",
        key: "null_value"
      },
      {
        title: "Incongruent Values",
        dataIndex: "incongruent",
        key: "incongruent"
      },
      {
        title: "Improper data types",
        dataIndex: "improper",
        key: "improper"
      },
      {
        title: "Duplicate Data",
        dataIndex: "duplicate",
        key: "duplicate"
      },
      {
        title: "Mapping Error",
        dataIndex: "mapping",
        key: "mapping"
      }
    ]
  },
  {
    title: "Distribution Deviation for Characteristics",
    children: [
      {
        title: "P1",
        dataIndex: "p1",
        key: "p1"
      },
      {
        title: "P25",
        dataIndex: "p25",
        key: "p25"
      },
      {
        title: "Median",
        dataIndex: "median",
        key: "median"
      },
      {
        title: "P75",
        dataIndex: "p75",
        key: "p75"
      },
      {
        title: "P99",
        dataIndex: "p99",
        key: "p99"
      }
    ]
  }
];
const dataSource = [
  {
    key: "1",
    variable: "Profitability",
    null_value: "1%",
    incongruent: "0%",
    improper: "20%",
    duplicate: "0%",
    mapping: "0%",
    p1: "1%",
    p25: "1.5%",
    median: "1.4%",
    p75: "0.8%",
    p99: "1%"
  },
  {
    key: "2",
    variable: "Repayment Capability",
    null_value: "2%",
    incongruent: "0%",
    improper: "10%",
    duplicate: "0%",
    mapping: "0%",
    p1: "1.2%",
    p25: "0.8%",
    median: "0.9%",
    p75: "1.1%",
    p99: "1.6%"
  },
  {
    key: "3",
    variable: "Activity",
    null_value: "5%",
    incongruent: "1%",
    improper: "0%",
    duplicate: "0%",
    mapping: "1%",
    p1: "2%",
    p25: "5%",
    median: "8.2%",
    p75: "11%",
    p99: "9.2%"
  },
  {
    key: "4",
    variable: "Growth",
    null_value: "1%",
    incongruent: "1%",
    improper: "1%",
    duplicate: "1%",
    mapping: "0%",
    p1: "1.3%",
    p25: "0.7%",
    median: "0.1%",
    p75: "1.8%",
    p99: "2%"
  },
  {
    key: "5",
    variable: "Financial Structure",
    null_value: "0%",
    incongruent: "2%",
    improper: "5%",
    duplicate: "12%",
    mapping: "0%",
    p1: "20%",
    p25: "16%",
    median: "18.1%",
    p75: "13%",
    p99: "10%"
  }
];

const avatar = {
  green: (
    <Avatar
      style={{
        backgroundColor: "green",
        verticalAlign: "middle",
        display: "block"
      }}
      size="small"
    ></Avatar>
  ),
  orange: (
    <Avatar
      style={{
        backgroundColor: "orange",
        verticalAlign: "middle",
        display: "block"
      }}
      size="small"
    ></Avatar>
  ),
  red: (
    <Avatar
      style={{
        backgroundColor: "red",
        verticalAlign: "middle",
        display: "block"
      }}
      size="small"
    ></Avatar>
  )
};

const columnsCSI = [
  {
    title: "Variable",
    dataIndex: "variable",
    key: "variable"
  },
  {
    title: "CSI Score",
    dataIndex: "csi",
    key: "csi"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  }
];
const dataSourceCSI = [
  {
    key: "1",
    variable: "Profitability",
    csi: "0.05",
    status: avatar.orange
  },
  {
    key: "2",
    variable: "Repayment Capability",
    csi: "0.01",
    status: avatar.green
  },
  {
    key: "3",
    variable: "Activity",
    csi: "0.12",
    status: avatar.orange
  },
  {
    key: "4",
    variable: "Growth",
    csi: "0.03",
    status: avatar.green
  },
  {
    key: "5",
    variable: "Financial Structure",
    csi: "0.3",
    status: avatar.red
  }
];

class DataMonitoring extends Component {
  constructor() {
    super();

    this.state = {
      series: [
        {
          data: [0.05, 0.01, 0.12, 0.03, 0.3]
        }
      ],
      options: {
        chart: {
          type: "bar",
          height: 350
        },
        colors: ["#008FFB"],
        plotOptions: {
          bar: {
            horizontal: true
            /*colors: {
                            backgroundBarColors:['#FFA500', '#E91E63', '#9C27B0', '#0B6623', '#FF0000'],
                            backgroundBarOpacity:1
                        }*/
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [
            "Profitability",
            "Repayment Capability",
            "Activity",
            "Growth",
            "Financial Structure"
          ]
        },
        title: {
          text: "CSI Scores For Significant Variable"
        }
        /*grid: {
                    row: {
                        colors: ['#FFA500', '#E91E63', '#9C27B0', '#0B6623', '#FF0000']
                    },
                },*/
      }
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
            <TableData column={columnsCSI} dataSource={dataSourceCSI} />
          </Col>
          <Col span={1}></Col>
        </Row>
        <Row>
          <Col>
            <TableData column={columns} dataSource={dataSource} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DataMonitoring;
