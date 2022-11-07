import React, { useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
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
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { AppDispatch, RootState } from '../../redux/configStore';
import moment from 'moment';
import { updateProfileApi,getProfileApi } from '../../redux/reducers/userReducer';
import { useParams } from 'react-router-dom';
import {useFormik} from 'formik'
import * as Yup from 'yup';

type Props = {}
type SizeType = Parameters<typeof Form>[0]['size'];

export default function UpdateProfile({}: Props) {
  const {arrUser} = useSelector((state: RootState) => state.userReducer);
  const dispatch: AppDispatch = useDispatch(); 
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
  setComponentSize(size);
  }
  const params = useParams();
  const onFinish = (values: any) => {
    const id = params.id as string;
    const data={id,value:{...values}}
    const actionThunk = updateProfileApi(data);
    console.log(values)
    dispatch(actionThunk);
  };
  useEffect(() => {
    const { id } = params;
    dispatch(getProfileApi(id));
  }, []);
  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
      id:arrUser.id,
      email:arrUser.email,
      name:arrUser.name,
      phone:arrUser.phone,
      gender:arrUser.gender,
      role:arrUser.role,
      birthday:arrUser.birthday
      },
      onSubmit: (values:any) => {
        const id = params.id as string;
        const data={id,value:{...values}}
          dispatch(updateProfileApi(data))
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
      <Input name='id' disabled onChange={formik.handleChange} value={formik.values.id}  />
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
    <Form.Item label=":">
      <button type='submit'className='btn btn-success'>Update User</button>
    </Form.Item>
  </Form>
  )
}