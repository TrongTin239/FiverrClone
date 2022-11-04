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
import { AppDispatch, RootState } from '../../../redux/configStore';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { addServiceApi } from '../../../redux/reducers/serviceReducer';

type Props = {}
type SizeType = Parameters<typeof Form>[0]['size'];

export default function AddTypeWork({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
  setComponentSize(size);
  }
  const formik=useFormik({
    initialValues:{
      id:'',
      tenNhom:'',
      maLoaiCongviec:'',
      // ngayThue:'',
      dsChiTietLoai:''
      },
      onSubmit: (values:any) => {
          console.log(values);
          dispatch(addServiceApi(values))
      }
  },
)

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
    <Form.Item label="ID">
      <Input name='id' onChange={formik.handleChange} />
    </Form.Item>
    <Form.Item label="tenNhom">
      <Input name='tenNhom'onChange={formik.handleChange}/>
    </Form.Item>
    <Form.Item label="maLoaiCongviec">
      <Input name='maLoaiCongviec' onChange={formik.handleChange}/>
    </Form.Item>
    {/* <Form.Item label="Cong viec">
        <Radio.Group name='hoanThanh'onChange={formik.handleChange}>
          <Radio value={true}> Hoan thanh </Radio>
          <Radio value={false}> Chua hoan thanh </Radio>
        </Radio.Group>
    </Form.Item> */}
    <Form.Item label="">
      <button type='submit'className='btn btn-success'>add TypeWork</button>
    </Form.Item>
  </Form>
);
}