import React from "react";
import { Row, Col, Avatar, Card } from "antd";

import KsChart from "../components/ksChart";
import TableData from "../components/table";

const Discrimination = () => {
  const pd5 = {
      padding: "5px"
    },
    textCentreDiv = {
      /*background: 'rgb(32, 56, 100)',*/
      textAlign: "center",
      /*color: '#fff',*/
      fontSize: "16px",
      border: "1px solid #e8e8e8",
      padding: "12px",
      background: "rgb(240, 242, 253)"
    },
    textCentre = {
      textAlign: "center",
      fontWeight: "bold"
    };
  const state = {
    series: [
      {
        name: "Event",
        data: [0, 20, 39, 56, 70, 80, 88, 94, 97, 99, 100]
      },
      {
        name: "Non-event",
        data: [0, 0, 2, 6, 13, 23, 35, 48, 64, 81, 100]
      }
    ],
    series1: [
      {
        name: "Event",
        data: [0, 10, 29, 46, 50, 55, 60, 70, 80, 90, 100]
      },
      {
        name: "Non-event",
        data: [0, 0, 2, 6, 13, 23, 35, 48, 64, 81, 100]
      }
    ]
  };

  const columns = [
    {
      title: "Metric",
      dataIndex: "metric",
      key: "metric"
    },
    {
      title: "Model Development (July 2017)",
      dataIndex: "development",
      key: "development"
    },
    {
      title: "Model Validation (July 2019)",
      dataIndex: "validaion",
      key: "validaion"
    },
    {
      title: "%Change",
      key: "change",
      dataIndex: "change"
    },
    {
      title: "Benchmark",
      key: "benchmark",
      dataIndex: "benchmark"
    },
    {
      title: "Risk",
      key: "risk",
      dataIndex: "risk"
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

  const data = [
    {
      key: "1",
      metric: "Accuracy",
      development: "90%",
      validaion: "88%",
      change: "-2%",
      benchmark: "-5%",
      risk: avatar.red
      //expandRow: false
    },
    {
      key: "2",
      metric: "Precision",
      development: "90%",
      validaion: "88%",
      change: "-2%",
      benchmark: "-5%",
      risk: avatar.red
      //expandRow: false
    },
    {
      key: "3",
      metric: "Recall",
      development: "90%",
      validaion: "88%",
      change: "-2%",
      benchmark: "-5%",
      risk: avatar.red
      //expandRow: false
    },
    {
      key: "4",
      metric: "FI Score",
      development: "0.33",
      validaion: "0.32",
      change: "0.01",
      benchmark: "-0.1",
      risk: avatar.green,
      expandRow: "" //<Confusion> <graph>
    },
    {
      key: "5",
      metric: "KS Statistic",
      development: "40.5%",
      validaion: "38.9%",
      change: "-1.6%",
      benchmark: "5%",
      risk: avatar.green,
      expandRow: (
        <Row>
          <Col span={3}></Col>
          <Col span={7}>
            <div>
              <KsChart series={state.series} />
            </div>
          </Col>
          <Col span={7}>
            <div>
              <KsChart series={state.series1} />
            </div>
          </Col>
          <Col span={7}></Col>
        </Row>
      )
    },
    {
      key: "6",
      metric: "Gini Coefficient",
      development: "0.6",
      validaion: "0.58",
      change: "0.02",
      benchmark: "-0.1",
      risk: avatar.orange,
      expandRow: ""
    },
    {
      key: "7",
      metric: "AUC ROC",
      development: "0.6",
      validaion: "0.58",
      change: "0.02",
      benchmark: "-0.1",
      risk: avatar.orange,
      expandRow: ""
    }
  ];

  return (
    <div>
      <Row>
        <Col style={pd5}>
          <TableData column={columns} dataSource={data} expand={true} />
        </Col>
      </Row>
      <Row>
        <Col span={3} style={pd5}></Col>
        <Col span={8} style={pd5}>
          <div style={textCentreDiv}>Model Development Cohort (July 2017)</div>
        </Col>
        <Col span={2} style={pd5}></Col>
        <Col span={8} style={pd5}>
          <div style={textCentreDiv}>Model Validation Cohort (July 2019)</div>
        </Col>
        <Col span={3} style={pd5}></Col>
      </Row>

      <Row>
        <Card
          className="ant-card-small nopadding"
          title={<span style={{ fontSize: "20px" }}>KS Chart</span>}
        >
          <Row>
            <Col span={3}></Col>
            <Col span={8}>
              <div>
                <KsChart series={state.series} />
              </div>
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <div>
                <KsChart series={state.series1} />
              </div>
            </Col>
            <Col span={3}></Col>
          </Row>
          <Row>
            <Col span={3}></Col>
            <Col span={8}>
              <div style={textCentre}>KS = 40.5%</div>
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <div style={textCentre}>KS = 38.9%</div>
            </Col>
            <Col span={3}></Col>
          </Row>
        </Card>
      </Row>
      <Row>
        <Col style={pd5}></Col>
      </Row>

      <Row>
        <Card
          className="ant-card-small nopadding"
          title={<span style={{ fontSize: "20px" }}>Lorenz Curve</span>}
        >
          <Row>
            <Col span={3}></Col>
            <Col span={8}>
              <div>
                <KsChart series={state.series} />
              </div>
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <div>
                <KsChart series={state.series1} />
              </div>
            </Col>
            <Col span={3}></Col>
          </Row>
          <Row>
            <Col span={3}></Col>
            <Col span={8}>
              <div style={textCentre}>Gini = 0.6</div>
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <div style={textCentre}>Gini = 0.58</div>
            </Col>
            <Col span={3}></Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
};

export default Discrimination;
