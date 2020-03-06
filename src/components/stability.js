import React, { Component } from "react";
import { Row, Col } from "antd";

import TableData from "../components/table";
import BarChart from "../components/barChart";

class Stability extends Component {
  constructor(props) {
    super(props);
    //console.log("Stability", props.apiData.PSI[0]);

    this.state = {
      threshold: (
        <div>
          <p>Thresholds:</p>
          <p>
            0.1 or Less: Little or no difference between two score distributions
          </p>
          <p>
            0.1 to 0.25: Some change has taken place, but it is too small to
            determine whether it is an isolated incident or a part of a longer
            trend
          </p>
          <p>
            > 0.25: Large shift. The population should be looked at on
            individual characteristic basis for root cause analysis
          </p>
        </div>
      ),
      series: [
        {
          name: "Actual",
          data: props.apiData.PSI[0].Actual
        },
        {
          name: "Expected",
          data: props.apiData.PSI[0].Expected
        }
      ],
      options: {
        title: {
          text: "Distribution of Population"
        },
        xaxis: {
          categories: props.apiData.PSI[0].Score_Decile,
          title: {
            text: "Population Distribution"
          },
          labels: {
            formatter: function(val) {
              return Math.abs(Math.round(val)) + "%";
            }
          }
        },
        yaxis: {
          title: {
            text: "Score Range"
          }
        }
      },
      dataSource: props.apiData.PSIData[0]
    };
  }

  calculatePsi(records) {
    return records.reduce(function(acc, record) {
      return acc + record.Index;
    }, 0);
  }

  render() {
    return (
      <div style={{ background: "#fff" }}>
        <Row>
          <Col>
            <TableData
              rowClassName="rowSubTable"
              dataSource={this.state.dataSource}
            />
          </Col>
        </Row>
        <Row style={{ margin: "0 0 20px" }}>
          <Col
            style={{
              padding: "5px",
              background: "#73b504",
              textAlign: "center"
            }}
          >
            <div>
              Population Stability Index ={" "}
              {this.calculatePsi(this.state.dataSource)}
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={14}>
            <div>
              <BarChart
                series={this.state.series}
                options={this.state.options}
              />
            </div>
          </Col>
          <Col span={1}></Col>
          <Col span={8}>
            <div
              style={{
                background: "rgb(32, 56, 100)",
                color: "#fff",
                fontWeight: "bold",
                padding: "10px"
              }}
            >
              {this.state.threshold}
            </div>
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
    );
  }
}

export default Stability;
