import React, { Component } from 'react';
import { Icon, Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo_transparent_3.png';
import salonSpinnerlogo from '../../assets/img/logo_transparent_spinner.png';

class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedKey: window.location.href.slice(window.location.href.indexOf('admin'))
		};
	}

	onSelect = ({ key }) => {
		this.setState({ selectedKey: key });
	};

	render() {
		const { collapsed, onCollapse } = this.props;
		return (
			<Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse} width='300' breakpoint='lg'>
				<div className='sidebar-logo'>
					<img
						className={!collapsed ? 'sidebar-logo-img' : null}
						src={collapsed ? salonSpinnerlogo : logo}
						alt='Logo'
					/>
				</div>
				<Menu
					theme='dark'
					defaultSelectedKeys={['admin/dashboard']}
					selectedKeys={[this.state.selectedKey]}
					mode='inline'
					onSelect={this.onSelect}>
					<Menu.Item key='admin/dashboard'>
						<Link to='/admin/dashboard'>
							<Icon type='line-chart' />
							<span>สรุปรายการ</span>
						</Link>
					</Menu.Item>
					<Menu.Item key='admin/service'>
						<Link to='/admin/service'>
							<Icon type='file' />
							<span>รายการวันนี่้</span>
						</Link>
					</Menu.Item>
					<Menu.Item key='admin/employee'>
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
						<Menu.Item key='admin/setting/service'>
							<Link to='/admin/setting/service'>รายการ</Link>
						</Menu.Item>
						<Menu.Item key='admin/setting/employee'>
							<Link to='/admin/setting/employee'>พนักงาน</Link>
						</Menu.Item>
					</Menu.SubMenu>
				</Menu>
			</Layout.Sider>
		);
	}
}

export default Sidebar;
