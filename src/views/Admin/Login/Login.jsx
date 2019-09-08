import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import FullScreenLoader from '../../../components/FullScreenLoader/FullScreenLoader';
import './Login.css';
import logo from '../../../assets/img/logo_transparent_3.png';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isPressed: false
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});

		this.setState({ isPressed: !this.state.isPressed });
		setTimeout(() => {
			this.props.setLogin();
		}, 1000);
	};

	render() {
		const { getFieldDecorator } = this.props.form;

		if (!this.props.isLogin && this.state.isPressed) return <FullScreenLoader />;
		return (
			<Form onSubmit={this.handleSubmit} className='login-form'>
				<Form.Item>
					<div className='login-logo'>
						<img src={logo} alt='Logo' />
						Established in 1989
					</div>
				</Form.Item>
				<Form.Item className='form-item'>
					<p>Username</p>
					{getFieldDecorator('username', {
						rules: [{ required: true, message: 'Please input your username' }]
					})(<Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Username' />)}
				</Form.Item>
				<Form.Item className='form-item'>
					<p>Password</p>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password' }]
					})(
						<Input
							prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
							type='password'
							placeholder='Password'
						/>
					)}
				</Form.Item>
				<Form.Item className='form-item-login'>
					<Button type='primary' htmlType='submit' className='login-form-button'>
						Log in
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

export default LoginForm;
