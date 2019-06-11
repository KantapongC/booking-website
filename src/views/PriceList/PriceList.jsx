import React, { Component } from 'react';
import { Layout } from 'antd';

export default class PriceList extends Component {
	render() {
		return (
			<Layout.Content style={{ padding: '25px' }}>
				<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
					<h1 style={{ 'text-align': 'center' }}>This is Price List page</h1>
				</div>
			</Layout.Content>
		);
	}
}
