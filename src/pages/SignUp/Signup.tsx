import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
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

type Props = {}
type SizeType = Parameters<typeof Form>[0]['size'];


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
    <div className='container'>
      <div className="row d-flex align-items-cente">
        <div className="col-6">
            <img src='./img/login.jpg' alt='...' className='w-100'/>
        </div>
        <div className="col-5">
          <h3 className='text-center'>Dang ki</h3>
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
        <Form.Item label="Email">
          <Input name='email' onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="password">
          <Input name='password'onChange={formik.handleChange}/>
        </Form.Item>
        <Form.Item label="setPassword">
          <Input name='setPassword' onChange={formik.handleChange}/>
        </Form.Item>
        <Form.Item label="Phone">
          <Input name='phone' onChange={formik.handleChange}/>
        </Form.Item>
        <Form.Item label="birthday">
          <DatePicker name='birthday' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker}/>
        </Form.Item>
        <Form.Item label="Gender">
            <Radio.Group name='gender'onChange={formik.handleChange}>
              <Radio value={true}> Male </Radio>
              <Radio value={false}> female</Radio>
            </Radio.Group>
        </Form.Item>
        <Form.Item label="Nghiep vu">
          <button type='submit'className='btn btn-success'>Sign In</button>
          <button className='btn btn-warning'><NavLink to='/login'>Login</NavLink> </button>
        </Form.Item>
      </Form>
        </div>
      </div>
    </div>
  )
}