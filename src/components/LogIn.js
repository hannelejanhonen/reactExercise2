import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import '../styles/index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LogIn = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (  
  <div className = 'container'>              
    <Form
      name="normal_login"
      className="login-form bg-white"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
    <p><b>Log in to your account</b></p> 
       
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        <Link to="./cards">Log In</Link>
        </Button>
      </Form.Item>
    </Form>  
  </div>   
   );
};


export default LogIn;


  
  