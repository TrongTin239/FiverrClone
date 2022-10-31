import React,{Fragment, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { Table,Input,Button } from 'antd';
import {SearchOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons'
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useSelector,useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/configStore';
import {getadmintApi,updateApi } from '../../../redux/reducers/adminReducer'
import { history } from '../../../index';

type Props = {}
interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}
export default function User({}: Props) {
  const {arrAdmin}=useSelector((state: RootState) => state.adminReducer);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {

    //call api = action thunk
    const actionApi = getadmintApi();
    dispatch(actionApi);
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: 'id',
      dataIndex:'id',
      // sorter: {
      //   compare: (a, b) => a.id - b.id,
      //   multiple: 1,
      // },
      sortDirections:['descend','ascend'],
      // sortOrder:'descend'
      width:'15%'
    },
    {
      title: 'name ',
      dataIndex: 'name',
      // sorter: {
      //   compare: (a, b) => a.chinese - b.chinese,
      //   multiple: 3,
      // },
      width:'15%'
    },
    {
      title: 'phone ',
      dataIndex: 'phne',
      // sorter: {
      //   compare: (a, b) => a.math - b.math,
      //   multiple: 2,
      // },
      width:'15%'
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
      width:'15%'
    },
    {
      title: 'role',
      dataIndex: 'role',
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
      width:'20%'
    },
    {
      title: '',
      dataIndex: '',
      render:(text,object:any)=>{return <Fragment>
        <NavLink key={1} className=' mx-2 fs-3' to={`/admin/service/edit/${object.id}`} style={{color:'blue'}} onClick={() => {
                dispatch(updateApi(object.id))}}><EditOutlined></EditOutlined></NavLink>
        <NavLink key={2} className='fs-3' to='/' style={{color:'red'}}><DeleteOutlined></DeleteOutlined></NavLink>
      </Fragment>
    },
    width:'20%'
  }

  ];
  
  const data: DataType[] = arrAdmin;
  
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const onSearch = (value: string) => console.log(value);
  const { Search } = Input;
 

  return (
      <div className="card-body  container">
        <Button className='mt-5'onClick={()=>{
          history.push('/admin/user/addAdmin')
        }}>Add Admin</Button>
        <Search
          placeholder="input search text"
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={onSearch}
          />
          <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
                
  )
}
