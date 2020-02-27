import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Breadcrumb } from "antd";

import AppProvider from "./AppProvider";
import Inventory from "./pages/Inventory";
import Monitoring from "./pages/Monitoring";
import Enterprise from "./pages/Enterprise";
import Governance from "./pages/Governance";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";

const { Footer, Content } = Layout;

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar />

          <Layout>
            <Header />

            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "0" }}>
                <Breadcrumb.Item>&nbsp;</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <Route
                  exact
                  path="/"
                  render={props => <Inventory data="testData" {...props} />}
                />
                <Route exact path="/monitoring/:id?" component={Monitoring} />
                <Route exact path="/enterprise" component={Enterprise} />
                <Route exact path="/governance" component={Governance} />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              © 2020 Copyright: Incedoinc.com
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
