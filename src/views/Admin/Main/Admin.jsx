import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Footer from '../../../components/Footer/Footer';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: false
		};
	}

	onCollapse = collapsed => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	render() {
		return (
			<React.Fragment>
				<Layout style={{ height: '100vh' }}>
					<Sidebar collapsed={this.state.collapsed} onCollapse={this.onCollapse} />
					<Layout>
						<Layout.Header style={{ background: '#fff', padding: 0 }} />
						<Layout.Content style={{ margin: '0 16px' }}>
							<div style={{ 'margin-top': '16px', padding: 24, background: '#fff', height: '100%' }}>Content</div>
						</Layout.Content>
						<Footer />
					</Layout>
				</Layout>
			</React.Fragment>
		);
	}
}

export default Dashboard;
