import React, { Component } from 'react';
import Login from './views/Login/Login';
import AdminDashboard from './views/Admin/Dashboard';

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLogin: false
		};
	}

	setLogin = () => {
		this.setState({ isLogin: true });
	};

	render() {
		return (
			<div>
				{this.state.isLogin ? <AdminDashboard /> : <Login setLogin={this.setLogin} isLogin={this.state.isLogin} />}
			</div>
		);
	}
}

export default Admin;
