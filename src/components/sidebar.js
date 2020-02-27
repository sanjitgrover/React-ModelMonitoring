import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppProvider";

import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const menuLabel = {};

  return (
    <AppContext.Consumer>
      {({ pageTitle, setPageTitle }) => {
        return (
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            style={{ background: "rgb(32, 56, 100)" }}
          >
            <div className="logo" style={{ padding: "12px 0" }}>
              {collapsed ? (
                <span style={{ padding: "0 25px", color: "#fff" }}>MRM</span>
              ) : (
                <img src="./incedoMRM.svg" alt="Logo" />
              )}
            </div>
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              style={{ background: "rgb(32, 56, 100)" }}
            >
              <Menu.Item key="1">
                <NavLink
                  exact
                  to="/"
                  onClick={() => {
                    setPageTitle("Model Inventory");
                  }}
                >
                  <Icon type="bar-chart" />
                  <span style={menuLabel}>Model Inventory</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink
                  exact
                  to="/monitoring"
                  onClick={() => {
                    setPageTitle("Model Monitor");
                  }}
                >
                  <Icon type="desktop" />
                  <span style={menuLabel}>Model Monitor</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink
                  exact
                  to="/enterprise"
                  onClick={() => {
                    setPageTitle("Enterprise XYZ");
                  }}
                >
                  <Icon type="pie-chart" />
                  <span style={menuLabel}>Enterprise XYZ</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink
                  exact
                  to="/governance"
                  onClick={() => {
                    setPageTitle("Governance");
                  }}
                >
                  <Icon type="file" />
                  <span style={menuLabel}>Governance</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Sidebar;
