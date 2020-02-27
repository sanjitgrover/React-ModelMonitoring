import React from "react";
import { Layout, Avatar, Icon } from "antd";
import { AppContext } from "../AppProvider";
import { Link } from "react-router-dom";

import TableData from "../components/table";
import Dropdown from "../components/dropdown";

const { Content } = Layout;
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text, record) => (
      <Link to={"monitoring/" + record.key}>{text}</Link>
    )
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Business Sponsor",
    dataIndex: "sponsor",
    key: "sponsor"
  },
  {
    title: "Developer",
    key: "developer",
    dataIndex: "developer"
  },
  {
    title: "Validator",
    key: "validator",
    dataIndex: "validator"
  },
  {
    title: "Discrimination",
    key: "dis",
    dataIndex: "dis",
    render: text => {
      return {
        props: {
          style: {}
        },
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
  },
  {
    title: "Population Stabilty",
    key: "ps",
    dataIndex: "ps",
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
  },

  {
    title: "Comments",
    key: "comments",
    dataIndex: "comments"
  },
  {
    title: "Repository",
    key: "repo",
    dataIndex: "repo",
    render: () => {
      return {
        children: (
          <Icon
            style={{
              fontSize: "30px",
              color: "cornflowerblue",
              display: "block"
            }}
            type="folder-open"
          />
        )
      };
    }
  }
];

const Inventory = () => {
  return (
    <AppContext.Consumer>
      {({ invModels: models, invSelected, inventoryOnChange }) => {
        return (
          <Content style={{ padding: "4px 24px", minHeight: 280 }}>
            <TableData
              title={
                <Dropdown onChange={inventoryOnChange} selected={invSelected} />
              }
              pagination="true"
              column={columns}
              dataSource={models}
            />
          </Content>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Inventory;
