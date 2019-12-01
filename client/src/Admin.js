import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './components/Routing/PrivateRoute';
import Login from './views/Admin/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

import Dashboard from './views/Admin/Dashboard/Dashboard';
import Service from './views/Admin/Service/Service';
import Employee from './views/Admin/Employee/Employee';
import ServiceSetting from './views/Admin/Setting/Service';
import EmployeeSetting from './views/Admin/Setting/Employee';

import { loadUser } from './store/actions/authActions';

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: false
		};
	}

	onCollapse = collapsed => {
		this.setState({ collapsed });
	};

	componentDidMount() {
		this.props.loadUser();
	}

	render() {
		return (
			<Switch>
				<Route exact path='/admin/login' component={Login} />
				<Layout className='admin-layout' hasSider>
					<Sidebar collapsed={this.state.collapsed} onCollapse={this.onCollapse} />
					<Layout className='admin-layout'>
						<Layout.Header className='admin-layout-header' />
						<Layout.Content className='admin-layout-content'>
							<div className='content-card'>
								<PrivateRoute exact path='/admin/dashboard' component={Dashboard} />
								<PrivateRoute exact path='/admin/service' component={Service} />
								<PrivateRoute exact path='/admin/employee' component={Employee} />
								<PrivateRoute exact path='/admin/setting/service' component={ServiceSetting} />
								<PrivateRoute exact path='/admin/setting/employee' component={EmployeeSetting} />
								<Redirect from='/admin' to='/admin/dashboard' />
							</div>
						</Layout.Content>
						<Footer />
					</Layout>
				</Layout>
			</Switch>
		);
	}
}

export default connect(null, { loadUser })(Admin);
