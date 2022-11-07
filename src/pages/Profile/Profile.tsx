import {
    GoogleOutlined,
    EnvironmentOutlined,
    UserOutlined,
    FacebookOutlined,
    EditOutlined,
    DribbbleOutlined,
    PlusOutlined,
    GithubOutlined,
    TwitterOutlined
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Breadcrumb, Layout, Menu,Avatar,Image } from 'antd';
  import React, { useState } from 'react';
  import { NavLink } from 'react-router-dom';
  import { AppDispatch, RootState } from '../../redux/configStore';
  import { useSelector,useDispatch } from 'react-redux';
  const { Header, Content, Footer, Sider } = Layout;

type Props = {}

export default function Profile({}: Props) {
    const {userLogin} = useSelector((state: RootState) => state.userReducer);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider className="site-layout-background" width={300}>
          <div className='nav-avatar text-center mt-4 border-bottom border-light pb-3'>
            <Avatar size={100}src={<Image src="https://joeschmoe.io/api/v1/random"  />} />
            <h3 className='text-light pt-2'>{userLogin.name}</h3>
            <NavLink className='text-light pt-2' to={`/updateprofile/edit/${userLogin.id}`}><EditOutlined /></NavLink>
          </div>
          <div className='d-flex justify-content-around text-center pt-4 border-bottom border-light'>
            <div className='text-light '>
                <div className='from d-flex'>
                    <EnvironmentOutlined />
                    <p className='px-2'>From</p>
                </div>
                <div className='mentor d-flex '>
                    <UserOutlined />
                    <p className='px-2'>Menber</p>
                </div>
            </div>
            <div className='text-light'>
                <p>Viet Nam</p>
                <p>May 2022</p>
            </div>
          </div>
          <div className='d-flex justify-content-around pt-4 border-bottom border-light'>
            <div className='text-light '>
                <div className='language'>
                    <h5 className='text-light'>Languages</h5>
                    <p>English-Basic</p>
                </div>
            </div>
            <div className='text-light'>
                <h6 className='text-light'>Add New</h6>
            </div>
          </div>
          <div className='d-flex justify-content-around text-center pt-4 border-bottom border-light'>
            <div className='text-light '>
                <div className='from d-flex'>
                    <FacebookOutlined />
                    <p className='px-2'>Facebook</p>
                </div>
                <div className='mentor d-flex '>
                    <GoogleOutlined />
                    <p className='px-2'>Google</p>
                </div>
                <div className='mentor d-flex '>
                    <DribbbleOutlined />
                    <p className='px-2'>Dribbble</p>
                </div>
                <div className='mentor d-flex '>
                    <PlusOutlined />
                    <p className='px-2'>Stack Overflow</p>
                </div>
                <div className='mentor d-flex '>
                    <GithubOutlined />
                    <p className='px-2'>GitHub</p>
                </div>
                <div className='mentor d-flex '>
                    <PlusOutlined />
                    <p className='px-2'>Vimeo</p>
                </div>
                <div className='mentor d-flex '>
                    <TwitterOutlined />
                    <p className='px-2'>Twtter</p>
                </div>
            </div>
            <div className='text-light'>   
            </div>
          </div>
          <div className='d-flex justify-content-around pt-4 border-bottom border-light'>
            <div className='text-light '>
                <div className='language'>
                    <h5 className='text-light'>Skins</h5>
                    <p>Add your skins</p>
                </div>
            </div>
            <div className='text-light'>
                <h6 className='text-light'>Add New</h6>
            </div>
          </div>
          <div className='d-flex justify-content-around pt-4 border-bottom border-light'>
            <div className='text-light '>
                <div className='language'>
                    <h5 className='text-light'>certification</h5>
                    <p>Add your certification</p>
                </div>
            </div>
            <div className='text-light'>
                <h6 className='text-light'>Add New</h6>
            </div>
          </div>
          <div className='d-flex justify-content-around pt-4 border-bottom border-light'>
            <div className='text-light '>
                <div className='language'>
                    <h5 className='text-light'>BookingJob</h5>
                    <p>Add your bookingJob</p>
                </div>
            </div>
            <div className='text-light'>
                <h6 className='text-light'>Add New</h6>
            </div>
          </div>
        </Sider>
        <Layout className="site-layout">
          
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  };
