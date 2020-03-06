import React from "react";
import { Avatar } from "antd";

import TableData from "../components/table";

const columns = [
  {
    title: "Metric",
    dataIndex: "Metric",
    key: "Metric"
  },
  {
    title: "Development",
    dataIndex: "Development",
    key: "Development"
  },
  {
    title: "Validation",
    dataIndex: "Validation",
    key: "Validation"
  },
  {
    title: "%Change",
    key: "Change",
    dataIndex: "Change"
  },
  {
    title: "Benchmark",
    key: "Benchmark",
    dataIndex: "Benchmark"
  },
  {
    title: "Risk",
    key: "Risk",
    dataIndex: "Risk",
    render: text => {
      return {
        children: (
          <Avatar
            style={{
              backgroundColor: text,
              verticalAlign: "middle",
              display: "block"
            }}
            size="small"
          />
        )
      };
    }
  }
];

const Discrimination = props => {
  return (
    <TableData
      bordered={false}
      //column={columns}
      dataSource={props.apiData.discrimination}
      expand={true}
    />
  );
};

export default Discrimination;
