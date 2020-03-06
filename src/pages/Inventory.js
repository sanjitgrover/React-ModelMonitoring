import React, { Component } from "react";
import { Layout, Avatar, Icon } from "antd";
import { AppContext } from "../AppProvider";
import { Link } from "react-router-dom";

import TableData from "../components/table";
import Dropdown from "../components/dropdown";

const { Content } = Layout;

class Inventory extends Component {
  /*{
    title: "Last Date of Update",
    key: "update_date",
    dataIndex: "update_date"
  },*/
  tableHeader = (record, setModelSelected) => {
    let headers = Object.keys(record);

    return headers
      .filter(header => {
        return (
          header !== "type" &&
          header !== "key" &&
          header !== "dmonitoring" &&
          header !== "risk"
        );
      })
      .map(header => {
        if (header === "Id") {
          return {
            title: header,
            dataIndex: header,
            key: header,
            render: (text, record) => (
              <Link to={"monitoring/" + record.key}>
                <span onClick={() => setModelSelected(record.key)}>{text}</span>
              </Link>
            )
          };
        }
        if (header === "Discrimination" || header === "Population Stabilty") {
          return {
            title: header,
            dataIndex: header,
            key: header,
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
          };
        }
        if (header === "Repo") {
          return {
            title: header,
            dataIndex: header,
            key: header,
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
          };
        }
        return {
          title: header.replace("_", " "),
          dataIndex: header,
          key: header
        };
      });
  };

  render() {
    return (
      <AppContext.Consumer>
        {({
          invModels: models,
          invSelected,
          inventoryOnChange,
          setModelSelected
        }) => {
          return (
            <Content style={{ padding: "4px 24px", minHeight: 280 }}>
              <TableData
                title={
                  <Dropdown
                    onChange={inventoryOnChange}
                    selected={invSelected}
                  />
                }
                pagination="true"
                column={
                  models[0]
                    ? this.tableHeader(models[0], setModelSelected)
                    : models
                }
                dataSource={models}
              />
            </Content>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Inventory;
