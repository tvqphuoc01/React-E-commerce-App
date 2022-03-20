import { Form, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor() {
        super();
        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
    }

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
      return (
        <Form
            name="basic"
            labelCol={{
                span: 10,
            }}
            wrapperCol={{
                span: 20,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            
            <Form.Item
                label="Re-type Password"
                name="retye-password"
                rules={[
                    {
                        required: true,
                        message: 'Please Re-type your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Email"
                name="Email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Button type="danger" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
  }
};

export default RegisterForm;