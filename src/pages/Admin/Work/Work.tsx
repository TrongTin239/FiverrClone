import React,{Fragment, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { Table,Input,Button } from 'antd';
import {SearchOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons'
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useSelector,useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/configStore';
import {getWorkApi, deleteWorkApi, editWorkApi } from '../../../redux/reducers/workReducer'
import { history } from '../../../index';

type Props = {}
interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}
export default function Work({}: Props) {
  const {arrWork}=useSelector((state: RootState) => state.workReducer);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {

    //call api = action thunk
    const actionApi = getWorkApi();
    dispatch(actionApi);
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: 'id',
      dataIndex:'id',
      sortDirections:['descend','ascend'],
      // sortOrder:'descend'
      width:'15%'
    },
    {
      title: 'tenCongViec ',
      dataIndex: 'tenCongViec',
      width:'20%'
    },
    {
      title: 'giaTien ',
      dataIndex: 'giaTien',
      width:'20%'
    },
    {
      title: 'danhGia',
      dataIndex: 'danhGia',
      width:'20%'
    },
    {
      title: '',
      dataIndex: '',
      render:(text,object:any)=>{return <Fragment>
        <NavLink key={1} className=' mx-2 fs-3' to={`/admin/work/edit/${object.id}`} style={{color:'blue'}} onClick={() => {
                dispatch(editWorkApi(object.id))}}><EditOutlined></EditOutlined></NavLink>
        <Button key={2} className='fs-3' onClick={() => {
                dispatch(deleteWorkApi(object.id))
                console.log('id',object.id)
              }} style={{color:'red',border:'none'}}><DeleteOutlined></DeleteOutlined>
        </Button>
      </Fragment>
    },
    width:'25%'
  }

  ];
  
  const data: DataType[] = arrWork;
  
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const onSearch = (value: string) => console.log(value);
  const { Search } = Input;
 

  return (
    <div className="card-body  container">
      <Button className='mt-5'onClick={()=>{
        history.push('/admin/service/addwork')
        }}>Them cong viec</Button>
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