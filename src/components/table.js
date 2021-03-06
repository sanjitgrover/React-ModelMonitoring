import React from "react";
import _ from "lodash";
import { Row, Col, Table, Card, Avatar } from "antd";

const style = {
  scroll: {
    overflowY: "scroll",
    maxHeight: "420px"
  }
};
export default class TableData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title ? this.props.title : "",
      pagination: this.props.pagination ? this.props.pagination : false
    };
  }

  _getRowClassName = record => {
    let highlight = "";
    if (record.Max_pos) {
      highlight = " highlight";
    }
    if (this.props.rowClassName) return this.props.rowClassName + highlight;
    let hideExpandIcon =
      _.get(record, "expandRow", 0) === 0 ? "Hello--hide-expand" : "";

    return hideExpandIcon;
  };

  // call this function if Table header is not passed
  tableHeader = record => {
    let headers = Object.keys(record);
    return headers
      .filter(header => {
        return header !== "key"; // && header !== "Max_pos"
      })
      .map(header => {
        if (header === "Status" || header === "Risk") {
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
        return {
          title: header,
          dataIndex: header,
          key: header
        };
      });
  };

  render() {
    return (
      <Row>
        <Col style={this.props.scroll ? style.scroll : ""}>
          <Card title={this.state.title}>
            <Row>
              <Table
                className={
                  this.props.className ? this.props.className : "Hello"
                }
                rowClassName={this._getRowClassName}
                columns={
                  this.props.column
                    ? this.props.column
                    : this.tableHeader(this.props.dataSource[0])
                }
                dataSource={this.props.dataSource}
                pagination={this.state.pagination}
                expandedRowRender={
                  this.props.expand
                    ? record => (
                        <div style={{ margin: 0 }}>{record.expandRow}</div>
                      )
                    : false
                }
                setModelSelected={this.props.setModelSelected}

                //scroll={{ x: "max-content" }}
              />
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}
