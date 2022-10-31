import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginApi } from '../../redux/reducers/userReducer';
import { AppDispatch, RootState } from '../../redux/configStore';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';


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
    <div className='container row'>
        <div className='col-6 '>
            <img src='../img/avt.webp' style={{width:'200px'}} alt="..."></img>
        </div>
        <div className='col-6'>
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
    </div>
  );
}