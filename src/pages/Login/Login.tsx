import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginApi } from '../../redux/reducers/userReducer';
import { AppDispatch, RootState } from '../../redux/configStore';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

type Props = {}

export default function Login({}: Props) {
    const dispatch: AppDispatch = useDispatch();
    const frm = useFormik({
        initialValues: {
        email: '',
        password: '',
        },
        onSubmit: (values:any) => {
            console.log(values);
            dispatch(loginApi(values))
        }
    })

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className='container' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onSubmitCapture={frm.handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input onChange={frm.handleChange} name="email"/>
      </Form.Item>

      <Form.Item
        label="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password onChange={frm.handleChange} name="password"/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Button type="primary" danger htmlType="submit">
          <NavLink to='/signup'>Register</NavLink>
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}