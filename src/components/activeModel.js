import React, { useState } from "react";
import { Row, Col, Table, Card, Avatar, Icon, Select } from "antd";

const { Option } = Select;

const ActiveModel = () => {
  const avatar = {
    green: (
      <Avatar
        style={{
          backgroundColor: "green",
          verticalAlign: "middle",
          display: "block"
        }}
        size="small"
      ></Avatar>
    ),
    orange: (
      <Avatar
        style={{
          backgroundColor: "orange",
          verticalAlign: "middle",
          display: "block"
        }}
        size="small"
      ></Avatar>
    ),
    red: (
      <Avatar
        style={{
          backgroundColor: "red",
          verticalAlign: "middle",
          display: "block"
        }}
        size="small"
      ></Avatar>
    )
  };
  const folderIcon = (
    <Icon
      type="folder-open"
      style={{ fontSize: "30px", color: "cornflowerblue", display: "block" }}
    />
  );

  const data = [
    {
      key: "1",
      type: "Marketing",
      name: "Credit Card Propensity Model",
      id: "MDL_CC_P_003",
      sponsor: "Belen Alvaro",
      developer: "Adan Adelio",
      validator: "Sara Sanchez",
      dis: avatar.green,
      ps: avatar.red,
      dmonitoring: avatar.orange,
      risk: avatar.green,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "2",
      type: "Marketing",
      name: "Extra Line of Credit Propensity Model",
      id: "MDL_ECL_P_004",
      sponsor: "Arnau Luis",
      developer: "Belen Pablo",
      validator: "Lorenzo Hugo",
      dis: avatar.orange,
      ps: avatar.red,
      dmonitoring: avatar.green,
      risk: avatar.orange,
      repo: folderIcon,
      comments: "Under Review"
    },
    {
      key: "3",
      type: "Marketing",
      name: "Personal Loans Propensity Model",
      id: "MDL_PL_P_003",
      sponsor: "Mario Alvaro",
      developer: "Arnau Adelio",
      validator: "Belen Sanchez",
      dis: avatar.green,
      ps: avatar.orange,
      dmonitoring: avatar.green,
      risk: avatar.orange,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "4",
      type: "Marketing",
      name: "Vehicular Loans Propensity Model",
      id: "MDL_VL_P_002",
      sponsor: "Carlota Alvaro",
      developer: "Cascada Adelio",
      validator: "Sara Costa",
      dis: avatar.orange,
      ps: avatar.green,
      dmonitoring: avatar.red,
      risk: avatar.green,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "5",
      type: "Marketing",
      name: "Cross Sell/Up Sell Recommendation Engine",
      id: "MDL_XS_US_001",
      sponsor: "Mario Costa",
      developer: "Carlota Adelio",
      validator: "Cascada Sanchez",
      dis: avatar.green,
      ps: avatar.orange,
      dmonitoring: avatar.red,
      risk: avatar.orange,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "6",
      type: "Risk",
      name: "Personal Loans Propensity to Cancel/Prepay Model",
      id: "MDL_PL_CP_002",
      sponsor: "Cascada Alvaro",
      developer: "Adan Costa",
      validator: "Carlota Sanchez",
      dis: avatar.green,
      ps: avatar.orange,
      dmonitoring: avatar.orange,
      risk: avatar.green,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "7",
      type: "Risk",
      name: "Personal Loans Propensity to Normalise Model",
      id: "MDL_PL_Norm_003",
      sponsor: "Ella Alvaro",
      developer: "Diego Adelio",
      validator: "Sara Sanchez",
      dis: avatar.red,
      ps: avatar.green,
      dmonitoring: avatar.green,
      risk: avatar.red,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "8",
      type: "Risk",
      name: "Commercial Loans Propensity to Cancel/Prepay Model",
      id: "MDL_CL_CP_002",
      sponsor: "Mario Alvaro",
      developer: "Ella Adelio",
      validator: "Diego Sanchez",
      dis: avatar.green,
      ps: avatar.orange,
      dmonitoring: avatar.red,
      risk: avatar.orange,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "9",
      type: "Risk",
      name: "Commercial Loans Propensity to Normalise Model",
      id: "MDL_CL_Norm_003",
      sponsor: "Diego Alvaro",
      developer: "Adan Adelio",
      validator: "Ella Sanchez",
      dis: avatar.green,
      ps: avatar.orange,
      dmonitoring: avatar.red,
      risk: avatar.orange,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "10",
      type: "Risk",
      name: "Mortgage Propensity to Cancel/Prepay Model",
      id: "MDL_Mort_CP_002",
      sponsor: "Fonda Dorinda",
      developer: "Gilberto Adelio",
      validator: "Sara Sanchez",
      dis: avatar.green,
      ps: avatar.orange,
      dmonitoring: avatar.red,
      risk: avatar.orange,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "11",
      type: "Risk",
      name: "Mortgage Propensity to Normalise Model",
      id: "MDL_Mort_Norm_003",
      sponsor: "Hernan Alvaro",
      developer: "Fonda Dorinda",
      validator: "Hernan Sanchez",
      dis: avatar.green,
      ps: avatar.orange,
      dmonitoring: avatar.red,
      risk: avatar.orange,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "12",
      type: "Risk",
      name: "Pricing Recommendation Engine",
      id: "MDL_PRec_001",
      sponsor: "Mario Alvaro",
      developer: "Adan Gilberto",
      validator: "Fonda Dorinda",
      dis: avatar.green,
      ps: avatar.orange,
      dmonitoring: avatar.red,
      risk: avatar.orange,
      repo: folderIcon,
      comments: "Active"
    }
  ];

  const marketing = [
    {
      key: "1",
      name: "Credit Card Cross Sell Model",
      id: "MDL_XS_CC_001",
      sponsor: "Mario Alvaro",
      developer: "Adan Adelio",
      validator: "Sara Sanchez",
      dis: avatar.green,
      ps: avatar.orange,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "2",
      name: "Extra Line of Credit Cross Sell Model",
      id: "MDL_XS_ECL_005",
      sponsor: "Mario Alvaro",
      developer: "Adan Adelio",
      validator: "Sara Sanchez",
      dis: avatar.red,
      ps: avatar.green,
      repo: folderIcon,
      comments: "Active"
    }
  ];

  const risk = [
    {
      key: "1",
      name: "Commercial Loans Pricing Optimization Model",
      id: "MDL_CL_004",
      sponsor: "Mario Alvaro",
      developer: "Adan Adelio",
      validator: "Sara Sanchez",
      dis: avatar.red,
      ps: avatar.green,
      repo: folderIcon,
      comments: "Active"
    },
    {
      key: "2",
      name: "Vehicular Loans Pricing Optimization Model",
      id: "MDL_VL_003",
      sponsor: "Mario Alvaro",
      developer: "Adan Adelio",
      validator: "Sara Sanchez",
      dis: avatar.green,
      ps: avatar.orange,
      repo: folderIcon,
      comments: "Active"
    }
  ];

  const operations = [
    {
      key: "1",
      name: "Model Performance Monitoring Model",
      id: "MDL_MRM_002",
      sponsor: "Mario Alvaro",
      developer: "Adan Adelio",
      validator: "Sara Sanchez",
      dis: avatar.green,
      ps: avatar.orange,
      repo: folderIcon,
      comments: "Active"
    }
  ];
  const others = [
    {
      key: "1",
      name: "Other Rating Model",
      id: "MDL_CRR_004",
      sponsor: "Mario Alvaro",
      developer: "Adan Adelio",
      validator: "Sara Sanchez",
      dis: avatar.green,
      ps: avatar.green,
      repo: folderIcon,
      comments: "Active"
    }
  ];

  const [stateData, setStateData] = useState(data);

  function changeData(v) {
    if (v === "marketing") {
      setStateData(marketing);
    }
    if (v === "risk") {
      setStateData(risk);
    }
    if (v === "portfolio") {
      setStateData(data);
    }
    if (v === "operations") {
      setStateData(operations);
    }
    if (v === "others") {
      setStateData(others);
    }
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: id => <a href="#">{id}</a>
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
      dataIndex: "dis"
    },
    {
      title: "Population Stabilty",
      key: "ps",
      dataIndex: "ps"
    },

    {
      title: "Comments",
      key: "comments",
      dataIndex: "comments"
    },
    {
      title: "Repository",
      key: "repo",
      dataIndex: "repo"
    }
  ];

  const dropdown = (
    <Select
      showSearch
      style={{ width: 270 }}
      placeholder="Select Business Function"
      optionFilterProp="children"
      onChange={changeData}
      //onFocus={onFocus}
      //onBlur={onBlur}
      //onSearch={onSearch}
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="portfolio">Overall Portfolio</Option>
      <Option value="risk">Risk</Option>
      <Option value="marketing">Marketing</Option>
      <Option value="operations">Operations</Option>
      <Option value="others">Others</Option>
    </Select>
  );

  return (
    <Row>
      <Col>
        <Card className="ant-card-small" title={dropdown}>
          <Row>
            <Table columns={columns} dataSource={stateData} />
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ActiveModel;
