import {
  Button,
  Typography,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Col,
  Row,
  Card,
} from 'antd';
import type { RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { AppDispatch, RootState } from '../../redux/configStore';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { signupApi } from '../../redux/reducers/userReducer';
import { NavLink } from 'react-router-dom';
import { margin } from '@mui/system';

type Props = {}
type SizeType = Parameters<typeof Form>[0]['size'];
const { Title } = Typography;
const { Meta } = Card;

export default function Signup({}: Props) {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {setComponentSize(size);}
  const dispatch: AppDispatch = useDispatch();
  const formik=useFormik({
    initialValues: { //Dữ liệu ban đầu mặc định của form
        email: "",
        password: "",
        setPassword:'',
        name:"",
        phone:"",
        gender:true
    },
    onSubmit: (values:any) => {
        console.log(values);
        dispatch(signupApi(values))
    }
})
const handleChangeDatePicker=(value:any)=>{
  let ngayThue=moment(value).format('DD/MM/YYYY');
  formik.setFieldValue('ngayThue',ngayThue)
}

  return (
    <div className='register-container'>
      <Title style={{ textAlign: "center" }}>Login</Title>
			<Row
				style={{
					width: "70%",
					margin: "0 auto ",
					background: "#fff",
					borderRadius: "10px",
					overflow: "hidden",
          display:'flex',
          alignItems:'center',
          marginLeft:'400px'
				}}
			>
				<Col>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </Col>
				<Col span={12} style={{ padding: "40px 40px", margin: "auto 0" }}>
            <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Email"rules={[{ type:"email", required: true, message: 'The input is not valid E-mail!',}]}>
          <Input name='email'type='email' onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="name"rules={[{  required: true, message: 'The input is not valid Name',}]}>
          <Input name='name'onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="password" rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}>
          <Input name='password'type='password' onChange={formik.handleChange}/>
        </Form.Item>
        <Form.Item label="setPassword">
          <Input name='setPassword'type='password' onChange={formik.handleChange}/>
        </Form.Item>
        <Form.Item label="Phone" rules={[
              {
                required: true,
                message: 'Please input your phone!',
              },
            ]}>
          <Input name='phone' type='phone' onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="birthday" rules={[{required: true,},]}>
          <DatePicker name='birthday' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker}/>
        </Form.Item>
        <Form.Item label="Gender"rules={[{required: true,},]}>
            <Radio.Group name='gender'onChange={formik.handleChange}>
              <Radio value={true}> Male </Radio>
              <Radio value={false}> female</Radio>
            </Radio.Group>
        </Form.Item>
        <Form.Item label="">
          <button type='submit'className='btn btn-success mx-2'>Sign In</button>
          <button className='btn btn-warning text-white'><NavLink to='/login'>Login</NavLink> </button>
        </Form.Item>
      </Form>
       </Col>
       </Row>
    </div>
    );
}