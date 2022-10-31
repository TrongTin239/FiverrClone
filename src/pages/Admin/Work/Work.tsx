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
export default function Work({}: Props) {
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
      title: 'maCongViec ',
      dataIndex: 'maCongViec',
      // sorter: {
      //   compare: (a, b) => a.chinese - b.chinese,
      //   multiple: 3,
      // },
      width:'20%'
    },
    {
      title: 'maNguoiThue ',
      dataIndex: 'maNguoiThue',
      // sorter: {
      //   compare: (a, b) => a.math - b.math,
      //   multiple: 2,
      // },
      width:'20%'
    },
    {
      title: 'ngayThue',
      dataIndex: 'ngayThue',
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
    width:'25%'
  }

  ];
  
  const data: DataType[] = arrAdmin;
  
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const onSearch = (value: string) => console.log(value);
  const { Search } = Input;
 

  return (
    <div className='container'>
      <div>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Fiverr</a>
          <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
          </button>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">Sign out</a>
            </li>
          </ul>
        </nav>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user">Quan ly nguoi dung</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link' to='/work'>quan ly cong viec</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link' to='/typework'>quan ly loai cong viec</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link' to='/service'> quan ly dich vu</NavLink>
                </li>         
              </ul>
            </div>
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <nav className="my-3" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="./index.html">Them quan tri vien</a></li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body  container">
                    <Button className='mt-5'onClick={()=>{
                      history.push('/admin/service/addservice')
                    }}>Them cong viec</Button>
                    <Search
                      placeholder="input search text"
                      enterButton={<SearchOutlined />}
                      size="large"
                      onSearch={onSearch}
                    />
                      <Table columns={columns} dataSource={data} onChange={onChange} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
  )
}