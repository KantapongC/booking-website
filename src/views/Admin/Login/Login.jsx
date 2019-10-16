import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import FullScreenLoader from '../../../components/FullScreenLoader/FullScreenLoader';
import logo from '../../../assets/img/logo_transparent_3.png';
import { signIn } from '../../../store/actions/authActions';
import { connect } from 'react-redux';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isPressed: false
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ isPressed: !this.state.isPressed });

		const { form } = this.props;
		const { validateFields, resetFields } = form;
		validateFields((err, credential) => {
			if (err) return;

			this.props.signIn(credential);
		});

		resetFields();
	};

	render() {
		const {
			state: { isPressed },
			props: { auth, form },
			handleSubmit
		} = this;
		const { getFieldDecorator } = form;

		if (!auth.uid && isPressed) return <FullScreenLoader />;
		return (
			<Form onSubmit={handleSubmit} className='login-form'>
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

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signIn: credential => dispatch(signIn(credential))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);
