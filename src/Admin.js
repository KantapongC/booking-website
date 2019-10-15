import React, { Component } from 'react';
import Login from './views/Admin/Login/Login';
import AdminMain from './views/Admin/Main/Admin';

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLogin: true
		};
	}

	setLogin = () => {
		this.setState(prevState => {
			return { isLogin: !prevState.isLogin };
		});
	};

	render() {
		return (
			<React.Fragment>
				{this.state.isLogin ? <AdminMain /> : <Login setLogin={this.setLogin} isLogin={this.state.isLogin} />}
			</React.Fragment>
		);
	}
}

export default Admin;
