import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';

import FullScreenLoader from '../../../components/FullScreenLoader/FullScreenLoader';
import logo from '../../../assets/img/logo_transparent_3.png';
import { login } from '../../../store/actions/authActions';
import { setAlert } from '../../../store/actions/alert';
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
    validateFields((error, credential) => {
      if (error) return;

      this.props.login(credential);
    });

    resetFields();
  };

  render() {
    const {
      state: { isPressed },
      props: { auth, form, isAuthenticated },
      handleSubmit
    } = this;
    const { getFieldDecorator } = form;

    // if (!auth.uid && isPressed) return <FullScreenLoader />;
    if (isAuthenticated) {
      return <Redirect to='/admin' />;
    } else {
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
            })(<Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='Password' />)}
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
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

const mapStateToProps = state => {
  return {
    // auth: state.firebase.auth
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // signIn: credential => dispatch(signIn(credential))
  };
};

export default connect(mapStateToProps, { login, setAlert })(LoginForm);
