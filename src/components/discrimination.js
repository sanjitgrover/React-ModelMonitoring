import React from "react";
import { Row, Col } from "antd";

import TableData from "../components/table";

const pd5 = {
  padding: "5px"
};

const columns = [
  {
    title: "Metric",
    dataIndex: "metric",
    key: "metric"
  },
  {
    title: "Development",
    dataIndex: "development",
    key: "development"
  },
  {
    title: "Validation",
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

const Discrimination = props => {
  return (
    <Row>
      <Col style={pd5}>
        <TableData
          column={columns}
          dataSource={props.apiData.discrimination}
          expand={true}
        />
      </Col>
    </Row>
  );
};

export default Discrimination;
