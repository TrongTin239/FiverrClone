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
import React, { useState,useEffect } from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { AppDispatch, RootState } from '../../../redux/configStore';
import {useSelector,useDispatch} from 'react-redux'
import moment from 'moment';
import { useParams } from 'react-router-dom';
import {updatUsereApi,editUserApi} from '../../../redux/reducers/adminReducer'

type Props = {}
type SizeType = Parameters<typeof Form>[0]['size'];

export default function UpdateService({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const params = useParams();
  const {editUser} = useSelector((state: RootState) => state.adminReducer);
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
  setComponentSize(size);
  }
  useEffect(() => {
    const { id } = params;
    dispatch(editUserApi(id));
  }, []);


  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
      id:editUser.id,
      email:editUser.email,
      name:editUser.name,
      phone:editUser.phone,
      gender:editUser.gender,
      role:editUser.role,
      birthday:editUser.birthday
      },
      onSubmit: (values:any) => {
        const id = params.id as string;
        const data={id,value:{...values}}
          dispatch(updatUsereApi(data))
      }
  },
)
const handleChangeDatePicker=(value:any)=>{
  let ngayThue=moment(value);
  formik.setFieldValue('ngayThue',ngayThue)
}

return (
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
    <Form.Item label="ID"rules={[{ required: true, message: 'Please input your id number!' },]}>
      <Input name='id' onChange={formik.handleChange} value={editUser.id}  />
    </Form.Item>
    <Form.Item label="name"rules={[{ required: true, message: 'Please input your name number!' },]}>
      <Input name='name'onChange={formik.handleChange} value={formik.values.name} />
    </Form.Item>
    <Form.Item label="email"rules={[{ required: true, message: 'Please input your email number!' },]}>
      <Input name='email'onChange={formik.handleChange} value={formik.values.email} />
    </Form.Item>
    <Form.Item label="phone" rules={[{ required: true, message: 'Please input your phone number!' },]}>
      <Input name='phone' onChange={formik.handleChange}value={formik.values.phone} />
    </Form.Item>
    
    <Form.Item label="Birthday">
      <DatePicker name='birthday' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} value={moment(formik.values.birthday)}/>
    </Form.Item>
    <Form.Item label="Gender">
        <Radio.Group name='gender'onChange={formik.handleChange}value={formik.values.gender}  >
          <Radio value={true}> Male </Radio>
          <Radio value={false}> Female</Radio>
        </Radio.Group>
    </Form.Item>
    <Form.Item label="Role">
        <Radio.Group name='role'onChange={formik.handleChange}value={formik.values.role}  >
          <Radio value='ADMIN'> ADMIN </Radio>
          <Radio value='USER'> USER</Radio>
        </Radio.Group>
    </Form.Item>
    <Form.Item label=":">
      <button type='submit'className='btn btn-success'>Update User</button>
    </Form.Item>
  </Form>
);
}