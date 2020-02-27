import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default class BarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            /*series: [
                {
                    name: 'Actual',
                    data: [9, 13, 14, 14, 12, 10, 8, 6, 6, 6]
                },
                {
                    name: 'Ideal',
                    data: [-8, -9, -9, -10, -11, -12, -13, -10, -9, -8]
                }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 440,
                    stacked: true
                },
                colors: ['#008FFB', '#FF4560'],
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '80%',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"]
                },
              
                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                yaxis: {
                    min: -15,
                    max: 15,
                    title: {
                        text: 'Score Range',
                    },
                },
                tooltip: {
                    shared: false,
                    x: {
                        formatter: function (val) {
                            return val
                        }
                    },
                    y: {
                        formatter: function (val) {
                            return Math.abs(val) + "%"
                        }
                    }
                },
                title: {
                    text: 'Distribution of Population'
                },
                xaxis: {
                    categories: ['>520', '471-520', '441-470', '411-440', '381-410', '351-380', '321-350', '291-320', '251-290', '<251'
                    ],
                    title: {
                        text: 'Population Distribution'
                    },
                    labels: {
                        formatter: function (val) {
                            return Math.abs(Math.round(val)) + "%"
                        }
                    }
                },
            },*/
        };
    }


    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.props.options} series={this.props.series} type="bar" height={440} />
            </div>
        );
    }
}