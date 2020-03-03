import React from "react";
import _ from "lodash";
import { Row, Col, Table, Card } from "antd";

export default class TableData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title ? this.props.title : "",
      pagination: this.props.pagination ? this.props.pagination : false
    };
  }

  _getRowClassName = record => {
    return _.get(record, "expandRow", 0) === 0 ? "Hello--hide-expand" : "";
  };

  render() {
    return (
      <Row>
        <Col>
          <Card title={this.state.title}>
            <Row>
              <Table
                className={
                  this.props.className ? this.props.className : "Hello"
                }
                rowClassName={
                  this.props.rowClassName
                    ? this.props.rowClassName
                    : this._getRowClassName
                }
                columns={this.props.column}
                dataSource={this.props.dataSource}
                pagination={this.state.pagination}
                expandedRowRender={
                  this.props.expand
                    ? record => (
                        <div style={{ margin: 0 }}>{record.expandRow}</div>
                      )
                    : false
                }
              />
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}
