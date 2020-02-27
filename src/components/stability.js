import React, {Component} from 'react';
import { Row, Col } from 'antd';

import TableData from '../components/table';
import BarChart from '../components/barChart';

const columns = [
    {
        title: 'Score Bands',
        dataIndex: 'score',
        key: 'score',
    },
    {
        title: 'Actual %',
        dataIndex: 'actual',
        key: 'actual',
    },
    {
        title: 'Expected %',
        dataIndex: 'expected',
        key: 'expected',
    },
    {
        title: 'Actual - Expected',
        key: 'actsubexp',
        dataIndex: 'actsubexp'
    },
    {
        title: 'In(Actual/Expected)',
        key: 'actdivexp',
        dataIndex: 'actdivexp'
    },
    {
        title: 'Index',
        key: 'index',
        dataIndex: 'index'
    }
];
const dataSource = [
    {
        key: '1',
        score: '< 251',
        actual: '5%',
        expected: '8%',
        actsubexp: '-3%',
        actdivexp:'-0.47',
        index: '0.014'
    },
    {
        key: '2',
        score: '251-290',
        actual: '6%',
        expected: '9%',
        actsubexp: '-3%',
        actdivexp:'-0.41',
        index: '0.012'
    },
    {
        key: '3',
        score: '291-320',
        actual: '6%',
        expected: '10%',
        actsubexp: '-4%',
        actdivexp:'-0.51',
        index: '0.02'
    },
    {
        key: '4',
        score: '321-350',
        actual: '8%',
        expected: '13%',
        actsubexp: '-5%',
        actdivexp:'-0.49',
        index: '0.01'
    },
    {
        key: '5',
        score: '351-380',
        actual: '10%',
        expected: '12%',
        actsubexp: '-2%',
        actdivexp:'-0.18',
        index: '0.004'
    },
    {
        key: '6',
        score: '381-410',
        actual: '12%',
        expected: '11%',
        actsubexp: '1%',
        actdivexp:'-0.09',
        index: '0.001'
    },
    {
        key: '7',
        score: '411-440',
        actual: '14%',
        expected: '10%',
        actsubexp: '-4%',
        actdivexp:'-0.34',
        index: '0.013'
    },
    {
        key: '8',
        score: '441-470',
        actual: '14%',
        expected: '9%',
        actsubexp: '5%',
        actdivexp:'0.44',
        index: '0.012'
    },
    {
        key: '9',
        score: '471-520',
        actual: '13%',
        expected: '9%',
        actsubexp: '4%',
        actdivexp:'0.37',
        index: '0.005'
    },
    {
        key: '10',
        score: '> 520',
        actual: '9%',
        expected: '8%',
        actsubexp: '1%',
        actdivexp:'0.12',
        index: '0.001'
    },
];

class Stability extends Component {   
    constructor() {
        super();

        this.state = {
            threshold: <div><p>Thresholds:</p>
            <p>0.1 or Less: Little or no difference between two score distributions</p>
            <p>0.1 to 0.25: Some change has taken place, but it is too small to determine whether it is an isolated incident or a part of a longer trend</p>
            <p>> 0.25: Large shift. The population should be looked at on individual characteristic basis for root cause analysis</p>
            </div>,
            series: [
                {
                    name: 'Actual',
                    data: [9, 13, 14, 14, 12, 10, 8, 6, 6, 5]
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
            },
        }
    } 
    

    render() {
        return (
            <div>
                <Row>
                    <Col >
                        <TableData column={columns} dataSource={dataSource}/>
                    </Col>
                </Row>
                <Row style={{padding:"5px",background:"#73b504",textAlign:"center"}}>
                    <Col >
                        <div>Population Stability Index = 0.0929</div>
                    </Col>
                </Row>

                <Row style={{padding:"5px"}}>
                    <Col span={1} ></Col>
                    <Col span={13} ><div><BarChart series={this.state.series} options={this.state.options}/></div></Col>
                    <Col span={1} ></Col>
                    <Col span={8} ><div style={{background:"rgb(32, 56, 100)",color:"#fff",fontWeight:"bold",padding:"10px"}}>{this.state.threshold}</div></Col>
                    <Col span={1} ></Col>
                </Row>
            </div>
        );
    }
}

export default Stability;
