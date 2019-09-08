import React from 'react';
import { Icon, Menu, Layout } from 'antd';

const Sidebar = ({ collapsed, onCollapse }) => {
	return (
		<Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
			<div className='sidebar-logo' />
			<Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
				<Menu.Item key='1'>
					<Icon type='line-chart' />
					<span>สรุปรายการ</span>
				</Menu.Item>
				<Menu.Item key='2'>
					<Icon type='file' />
					<span>รายการวันนี่้</span>
				</Menu.Item>
				<Menu.Item key='3'>
					<Icon type='team' />
					<span>พนักงาน</span>
				</Menu.Item>
				<Menu.SubMenu
					key='setting-submenu'
					title={
						<span>
							<Icon type='setting' />
							<span>การตั้งต่า</span>
						</span>
					}>
					<Menu.Item key='4'>รายการ</Menu.Item>
					<Menu.Item key='5'>พนักงาน</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		</Layout.Sider>
	);
};

export default Sidebar;
