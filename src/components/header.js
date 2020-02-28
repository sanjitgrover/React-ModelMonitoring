import React from "react";
import { AppContext } from "../AppProvider";
import { Layout, PageHeader } from "antd";

const { Header } = Layout;

const Head = () => {
  return (
    <AppContext.Consumer>
      {({ pageTitle }) => {
        return (
          <Header style={{ background: "#fff", padding: 0 }}>
            <PageHeader
              style={{
                border: "1px solid rgb(235, 237, 240)"
              }}
              title={<span style={{ fontSize: "28px" }}>{pageTitle}</span>}
            />
          </Header>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Head;
