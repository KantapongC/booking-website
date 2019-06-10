import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const navStyle = {
	float: 'right',
	lineHeight: '64px'
};

const Navbar = () => {
	return (
		<Layout className='layout'>
			<Header>
				{/* <div className='logo' /> */}
				<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={navStyle}>
					<Menu.Item key='1'>
						<Link to='/'>Home</Link>
					</Menu.Item>
					<Menu.Item key='2'>
						<Link to='/about'>About</Link>
					</Menu.Item>
					<Menu.Item key='3'>
						<Link to='/pricelist'>Price List</Link>
					</Menu.Item>
					<Menu.Item key='4'>
						<Link to='/booking'>Book Online</Link>
					</Menu.Item>
				</Menu>
			</Header>
		</Layout>
	);
};

export default Navbar;
