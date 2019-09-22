import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Footer from '../../../components/Footer/Footer';

import Dashboard from '../Dashboard/Dashboard';
import Service from '../Service/Service';
import Employee from '../Employee/Employee';
import ServiceSetting from '../Setting/Service';
import EmployeeSetting from '../Setting/Employee';

class AdminMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: false
		};
	}

	onCollapse = collapsed => {
		this.setState({ collapsed });
	};

	render() {
		return (
			<Router>
				<Layout style={{ height: '100vh' }}>
					<Sidebar collapsed={this.state.collapsed} onCollapse={this.onCollapse} />
					<Layout>
						<Layout.Header style={{ background: '#fff', padding: 0 }} />
						<Layout.Content style={{ margin: '0 16px', minHeight: 'unset' }}>
							<div style={{ marginTop: '16px', padding: 24, background: '#fff', height: '100%' }}>
								<Switch>
									<Route exact path='/admin/dashboard' component={Dashboard} />
									<Route exact path='/admin/service' component={Service} />
									<Route exact path='/admin/employee' component={Employee} />
									<Route exact path='/admin/setting/service' component={ServiceSetting} />
									<Route exact path='/admin/setting/employee' component={EmployeeSetting} />
									<Redirect from='/admin' to='/admin/dashboard' />;
								</Switch>
							</div>
						</Layout.Content>
						<Footer />
					</Layout>
				</Layout>
			</Router>
		);
	}
}

export default AdminMain;
