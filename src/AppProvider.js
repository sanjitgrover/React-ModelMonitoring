import React, { Component } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Http from "./services/httpService";
import Config from "./config.json";

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Model Inventory",
      setPageTitle: this.setPageTitle,
      data: [],
      modelSelected: "",
      setModelSelected: this.setModelSelected,
      enterpriseData: [],
      invModels: [],
      enterpriseOnChange: this.enterpriseOnChange,
      inventoryOnChange: this.inventoryOnChange,
      enterpriseSelected: "",
      invSelected: "",
      monitoringSelected: "",
      modelDetail: [],
      comments: [],
      printDocument: this.printDocument,
      getModelDetails: this.getModelDetails,
      modelDetails: []
    };
  }

  async componentDidMount() {
    const { data: models } = await Http.get(Config.listModels);
    this.setState({ data: models, enterpriseData: models, invModels: models });
  }

  setPageTitle = title => {
    this.setState({ pageTitle: title });
  };

  // selected one model after click from list inventory page
  setModelSelected = modelId => {
    console.log("Appprovider", modelId);
    this.setState({ modelSelected: modelId });
    this.getModelDetails(modelId);
  };

  enterpriseOnChange = val => {
    const dropdown =
      val === "Portfolio"
        ? this.state.data
        : this.state.data.filter(item => item.type === val);

    this.setState({
      enterpriseData: dropdown,
      enterpriseSelected: val
    });
  };

  inventoryOnChange = val => {
    const dropdown =
      val === "Portfolio"
        ? this.state.data
        : this.state.data.filter(item => item.type === val);

    this.setState({
      invModels: dropdown,
      invSelected: val
    });
  };

  // get one model details
  getModelDetails = async id => {
    console.log("getModelDetails");
    const { data: records } = await Http.get(Config.modelDetail);
    console.log("output", records);
    this.setState({ modelDetails: records });
  };

  // print PDF call from Header
  printDocument = () => {
    console.log("Generate PDF");
    const models = this.getModelDetails();
    console.log("records", models);
    const input = document.getElementById("divToPrint");
    // html2canvas(input).then(canvas => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF();
    //   pdf.addImage(imgData, "JPEG", 0, 0);
    //   // pdf.output('dataurlnewwindow');
    //   pdf.save("download.pdf");
    // });
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
