import React, { Component } from "react";

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
      enterpriseOnChange: this.enterpriseOnChange,
      inventoryOnChange: this.inventoryOnChange,
      enterpriseData: [],
      enterpriseSelected: "",
      invModels: [],
      invSelected: "",
      monitoringSelected: ""
    };
  }

  async componentDidMount() {
    const { data: models } = await Http.get(Config.listModels);
    this.setState({ data: models, enterpriseData: models, invModels: models });
  }

  setPageTitle = title => {
    this.setState({ pageTitle: title });
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

  // componentDidMount() {
  //     this.getPageTitle
  // }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
