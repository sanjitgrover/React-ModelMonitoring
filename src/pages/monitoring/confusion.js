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

    //console.log("confusionMatrix", props);
    //console.log("confusion", props.apiData.ConfusionMatrix[0]);

    this.state = {
      precisionRecall: [
        {
          name: "Precision",
          data: props.apiData.PrecisionRecall[0].Precision
        },
        {
          name: "Recall",
          data: props.apiData.PrecisionRecall[0].Recall
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
          categories: props.apiData.PrecisionRecall[0].Bin,
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
          min: 0,
          max: 1,
          labels: {
            //offsetX: 1,
            //offsetY: 1,
            /*formatter: value => {
              return value;
            }*/
          }
        }
      },
      confusion: [
        {
          label: props.apiData.ConfusionMatrix[0][0].label,
          negative: props.apiData.ConfusionMatrix[0][0].negative,
          positive: props.apiData.ConfusionMatrix[0][0].positive
        },
        {
          label: props.apiData.ConfusionMatrix[0][1].label,
          negative: props.apiData.ConfusionMatrix[0][1].negative,
          positive: props.apiData.ConfusionMatrix[0][1].positive
        }
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

                  <td style={labelth}>{this.state.confusion[0].label}</td>
                  <td style={labelth}>{this.state.confusion[1].label}</td>
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
                  <td style={labelth}>{this.state.confusion[0].label}</td>
                  <td style={valuetd}>{this.state.confusion[0].negative}</td>
                  <td style={valuetd}>{this.state.confusion[0].positive}</td>
                </tr>
                <tr>
                  <td style={labelth}>{this.state.confusion[1].label}</td>
                  <td style={valuetd2}>{this.state.confusion[1].negative}</td>
                  <td style={valuetd2}>{this.state.confusion[1].positive}</td>
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
