import React from "react";
import { AppContext } from "../AppProvider";
import { Layout, PageHeader, Button, Icon } from "antd";

import PdfMonitoring from "../pages/PdfMonitoring";

const { Header } = Layout;

const renderPdf = (modelSelected, modelDetails) => {
  // if (modelSelected)
  //   return (
  //     <PdfMonitoring
  //       id={modelSelected}
  //       modelDetails={modelDetails}
  //     ></PdfMonitoring>
  //   );
};

const Head = () => {
  return (
    <AppContext.Consumer>
      {({ pageTitle, printDocument, modelDetails, modelSelected }) => {
        return (
          <Header style={{ background: "#fff", padding: 0 }}>
            <PageHeader
              style={{
                border: "1px solid rgb(235, 237, 240)"
              }}
              title={<span style={{ fontSize: "28px" }}>{pageTitle}</span>}
              extra={
                pageTitle === "Model Monitor"
                  ? [
                      <Button type="primary" key="1">
                        <div onClick={() => printDocument()}>Generate PDF</div>
                      </Button>
                    ]
                  : null
              }
            />
            <div id="divToPrint">{renderPdf(modelSelected, modelDetails)}</div>
          </Header>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Head;
