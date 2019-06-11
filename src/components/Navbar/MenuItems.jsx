import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const MenuItems = ({ horizontal, showDrawer }) => {
	return (
		<Menu mode={horizontal ? 'horizontal' : 'vertical'}>
			<Menu.Item key='home'>
				<Link to='/' onClick={showDrawer}>
					Home
				</Link>
			</Menu.Item>
			<Menu.Item key='about'>
				<Link to='/about' onClick={showDrawer}>
					About
				</Link>
			</Menu.Item>
			<Menu.Item key='price'>
				<Link to='/pricelist' onClick={showDrawer}>
					Price List
				</Link>
			</Menu.Item>
			<Menu.Item key='staff'>
				<Link to='/staff' onClick={showDrawer}>
					Staff
				</Link>
			</Menu.Item>
			<Menu.Item key='contact'>
				<Link to='/contact' onClick={showDrawer}>
					Contact
				</Link>
			</Menu.Item>
			<Menu.Item key='book'>
				<Link to='/booking' onClick={showDrawer}>
					Book Online
				</Link>
			</Menu.Item>
		</Menu>
	);
};

export default MenuItems;
