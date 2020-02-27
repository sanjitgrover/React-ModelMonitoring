import React from 'react';
import { Layout } from 'antd';
import { Row, Col, Card, Select, Table, Avatar } from 'antd';
import {AppContext} from '../AppProvider';

import ActiveModel from '../components/activeModel';

const { Content} = Layout;
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}


function Governance() {
	return(
		<Content style={{ padding: '4px 24px', minHeight: 280 }}>
			<Row>
				<Col>
        		<Select
				    showSearch
				    style={{ width: 270 }}
				    placeholder="Select Model"
				    optionFilterProp="children"
				    onChange={onChange}
				    //onFocus={onFocus}
				    //onBlur={onBlur}
				    //onSearch={onSearch}
				    filterOption={(input, option) =>
				      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
				    }
				>
				    <Option value="credit">Credit Risk Rating Model</Option>
				    <Option value="loan">Loan Reprising Model</Option>
				</Select>
				</Col>
        	</Row>
        	<Row>
        		<Col span={7}>
        			<Card >
        				<Avatar size={64} icon="user" />
        				<div>
        					<div>Model Developer</div>
        				</div>
        			</Card>
        		</Col>
        		<Col span={7}>
        			<Card title="RISK HEAT MAP">
        				<p>heatmeter</p>
        			</Card>
        		</Col>
        		<Col span={7}>
        			<Card title="RISK HEAT MAP">
        				<p>heatmeter</p>
        			</Card>
        		</Col>
        	</Row>
        	<Row>
        		<Col>
        			<Card title="MODEL STATUS">
        				<p>Model was validated in October 2019</p>
        				<p></p>
        				<p></p>
        			</Card>
        		</Col>
        		
        	</Row>
        </Content>
	);
}

export default Governance;