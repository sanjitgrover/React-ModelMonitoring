import React from "react";
import { Row, Col, Card } from "antd";

import ReactApexChart from "react-apexcharts";

const labelth = {
    textAlign: "center",
    background: "#f2f2f2"
  },
  valuetd = {
    textAlign: "center",
    background: "#8faadc",
    padding: "10px 0",
    color: "#fff"
  },
  valuetd2 = {
    textAlign: "center",
    background: "#cfdfea",
    padding: "10px 0"
  };

export default class Confusion extends React.Component {
  constructor(props) {
    super(props);

    console.log("confusionMatrix", props);

    this.state = {
      precisionRecall: [
        {
          name: "Precision",
          data: [
            0.5125523012552301,
            0.5390539053905391,
            0.5737704918032787,
            0.6049382716049382,
            0.6380208333333334,
            0.6721536351165981,
            0.7,
            0.7,
            0.7
          ]
        },
        {
          name: "Recall",
          data: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.629, 0.407, 0.196]
        }
      ],

      options: {
        chart: {
          height: 300,
          type: "line",
          dropShadow: {
            enabled: false,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ["#77B6EA", "#0d47a1"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight",
          width: 2
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: [
            "90.9",
            "180.8",
            "270.70000000000005",
            "360.6",
            "450.5",
            "540.4000000000001",
            "630.3000000000001",
            "720.2",
            "810.1"
          ],
          title: {
            //text: "Cumulative Population Deciles"
          },
          labels: {
            formatter: value => {
              return value;
            }
          }
        },
        yaxis: {
          title: {
            //text: "Cumulative Events"
          },
          labels: {
            offsetX: 1,
            offsetY: 1,
            formatter: value => {
              return value;
            }
          }
        }
      },
      confusion: [
        { label: "1", negative: "453(TN)", positive: "247(FP)" },
        { label: "2", negative: "0(FN)", positive: "300(TP)" }
      ]
    };
  }

  render() {
    return (
      <Row>
        <Col span={10}>
          <Card
            className="ant-card-small nopadding"
            title={<span style={{ fontSize: "20px" }}>Confusion Matrix</span>}
          >
            <table
              style={{ borderSpacing: "1px", padding: "50px 50px 102px 0px" }}
            >
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td
                    colSpan="2"
                    style={{ textAlign: "center", fontWeight: "500" }}
                  >
                    Predicted
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>

                  <td style={labelth}>1</td>
                  <td style={labelth}>2</td>
                </tr>
                <tr>
                  <td
                    rowSpan="2"
                    style={{
                      writingMode: "vertical-lr",
                      transform: "rotate(270deg)",
                      textAlign: "center",
                      width: "10px",
                      fontWeight: "500"
                    }}
                  >
                    Actual
                  </td>
                  <td style={labelth}>1</td>
                  <td style={valuetd}>453(TN)</td>
                  <td style={valuetd}>247(FP)</td>
                </tr>
                <tr>
                  <td style={labelth}>2</td>
                  <td style={valuetd2}>0(FN)</td>
                  <td style={valuetd2}>300(TP)</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Col>
        <Col span={14}>
          <Card
            className="ant-card-small nopadding"
            title={
              <span style={{ fontSize: "20px" }}>Precision vs Recall</span>
            }
          >
            <ReactApexChart
              options={this.state.options}
              series={this.state.precisionRecall}
              type="line"
              height={270}
              style={{ paddingLeft: "10px" }}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}
