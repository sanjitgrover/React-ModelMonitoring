import React from "react";
import ReactApexChart from "react-apexcharts";

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        xaxis: props.options.xaxis
          ? props.options.xaxis
          : {
              categories: [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              title: {
                text: "Cumulative Population Deciles"
              }
            },

        yaxis: props.options.yaxis
          ? props.options.yaxis
          : {
              title: {
                text: "Percentage"
              },
              min: 0,
              max: 100
            }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.props.series}
          type="line"
          height={this.props.height ? this.props.height : 370}
        />
      </div>
    );
  }
}
