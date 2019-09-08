import React from 'react';
import { Icon, Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo_transparent_3.png';
import salonSpinnerlogo from '../../assets/img/logo_transparent_spinner.png';

const Sidebar = ({ collapsed, onCollapse }) => {
	return (
		<Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse} width='300' breakpoint='lg'>
			<div className='sidebar-logo'>
				<img className={!collapsed ? 'sidebar-logo-img' : null} src={collapsed ? salonSpinnerlogo : logo} alt='Logo' />
			</div>
			<Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
				<Menu.Item key='1'>
					<Link to='/admin/dashboard'>
						<Icon type='line-chart' />
						<span>สรุปรายการ</span>
					</Link>
				</Menu.Item>
				<Menu.Item key='2'>
					<Link to='/admin/service'>
						<Icon type='file' />
						<span>รายการวันนี่้</span>
					</Link>
				</Menu.Item>
				<Menu.Item key='3'>
					<Link to='/admin/employee'>
						<Icon type='team' />
						<span>พนักงาน</span>
					</Link>
				</Menu.Item>
				<Menu.SubMenu
					key='setting-submenu'
					title={
						<span>
							<Icon type='setting' />
							<span>การตั้งต่า</span>
						</span>
					}>
					<Menu.Item key='4'>
						<Link to='/admin/setting/service'>รายการ</Link>
					</Menu.Item>
					<Menu.Item key='5'>
						<Link to='/admin/setting/employee'>พนักงาน</Link>
					</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		</Layout.Sider>
	);
};

export default Sidebar;
