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
import {editServiceApi, updateServiceApi} from '../../../redux/reducers/serviceReducer'

type Props = {}
type SizeType = Parameters<typeof Form>[0]['size'];

export default function UpdateTypeWork({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const params = useParams();
  const {editTypeWork} = useSelector((state: RootState) => state.typeworkReducer);
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
  setComponentSize(size);
  }
  useEffect(() => {
    const { id } = params;
    dispatch(editServiceApi(id));
  }, []);


  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
      id:editTypeWork.id,
      tenNhom:editTypeWork.tenNhom,
      maLoaiCongviec:editTypeWork.maLoaiCongviec,
      },
      onSubmit: (values:any) => {
        // const id = params.id as string;
        // const data={id,value:{...values}}
        console.log(values);
          dispatch(updateServiceApi(values))
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
    <Form.Item label="ID"rules={[{ required: true, message: 'Please input your maLoaiCongviec number!' },]}>
      <Input name='id' onChange={formik.handleChange} value={editTypeWork.id}  />
      
    </Form.Item>
    <Form.Item label="tenNhom"rules={[{ required: true, message: 'Please input your tenNhom number!' },]}>
      <InputNumber name='tenNhom'onChange={formik.handleChange} value={formik.values.tenNhom} />
    </Form.Item>
    <Form.Item label="maLoaiCongviec" rules={[{ required: true, message: 'Please input your maLoaiCongviec number!' },]}>
      <InputNumber name='maLoaiCongviec' onChange={formik.handleChange}value={formik.values.maLoaiCongviec} />
    </Form.Item>
    
    {/* <Form.Item label="ngayThue">
      <DatePicker name='ngayThue' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} value={moment(formik.values.ngayThue)}/>
    </Form.Item> */}
    <Form.Item label=":">
      <button type='submit'className='btn btn-success'>Update Service</button>
    </Form.Item>
  </Form>
);
}