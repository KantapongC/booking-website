import React, { Component } from 'react';
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import logo from '../../assets/img/logo_transparent_3.png';
import './Navbar.css';

class MainNavbar extends Component {
	state = {
		current: 'home',
		visible: false
	};

	showDrawer = () => {
		this.setState({
			visible: !this.state.visible
		});
	};

	render() {
		return (
			<nav className='menuBar'>
				<div className='logo'>
					<Link to='/'>
						<img src={logo} alt='Logo' />
					</Link>
				</div>
				<div className='menuCon'>
					<MenuItems horizontal />
					<Button className='barsMenu' type='primary' onClick={this.showDrawer}>
						<span className='barsBtn' />
					</Button>
					<Drawer placement='right' closable={false} onClose={this.showDrawer} visible={this.state.visible}>
						<MenuItems showDrawer={this.showDrawer} />
					</Drawer>
				</div>
			</nav>
		);
	}
}
export default MainNavbar;
