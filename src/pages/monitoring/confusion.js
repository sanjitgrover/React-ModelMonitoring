import React from "react";
import { Row, Col, Card } from "antd";

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

    console.log("confusionMatrix1", props.apiData.EventDataMetric[0][0].Metric);
    //console.log("confusion", props.apiData.ConfusionMatrix[0]);

    this.state = {
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
      ],
      EventDataMetric: [
        {
          label: props.apiData.EventDataMetric[0][0].Metric,
          value: props.apiData.EventDataMetric[0][0].Value
        },
        {
          label: props.apiData.EventDataMetric[0][1].Metric,
          value: props.apiData.EventDataMetric[0][1].Value
        },
        {
          label: props.apiData.EventDataMetric[0][2].Metric,
          value: props.apiData.EventDataMetric[0][2].Value
        },
        {
          label: props.apiData.EventDataMetric[0][3].Metric,
          value: props.apiData.EventDataMetric[0][3].Value
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
        <Col span={14} className="pdLeft">
          <Card
            className="ant-card-small nopadding"
            title={<span style={{ fontSize: "20px" }}>Event Data Metric</span>}
          >
            <div className="event-data-metric">
              <Row gutter={[12, 12]}>
                <Col key="1" span={12}>
                  <div>
                    <h2>{this.state.EventDataMetric[0].label}</h2>
                    <p>{this.state.EventDataMetric[0].value}</p>
                  </div>
                </Col>
                <Col key="2" span={12}>
                  <div>
                    <h2>{this.state.EventDataMetric[1].label}</h2>
                    <p>{this.state.EventDataMetric[1].value}</p>
                  </div>
                </Col>
              </Row>
              <Row gutter={[12, 12]}>
                <Col key="3" span={12}>
                  <div>
                    <h2>{this.state.EventDataMetric[2].label}</h2>
                    <p>{this.state.EventDataMetric[2].value}</p>
                  </div>
                </Col>
                <Col key="4" span={12}>
                  <div>
                    <h2>{this.state.EventDataMetric[3].label}</h2>
                    <p>{this.state.EventDataMetric[3].value}</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}
