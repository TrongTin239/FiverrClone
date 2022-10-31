import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
  

type Props = {
    title?:string
}
const { Header, Content, Footer, Sider } = Layout;
  
// type MenuItem = Required<MenuProps>['items'][number];
  
export default function AdminHeader(props: Props) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}><NavLink to='/admin/user'>User</NavLink></Menu.Item>
            <Menu.Item key="2"icon={<UserOutlined />}><NavLink to='/admin/service'>Service</NavLink></Menu.Item>
            <Menu.Item key="3"icon={<UserOutlined />}> <NavLink to='/admin/work'>Work</NavLink></Menu.Item>
            <Menu.Item key="4"icon={<UserOutlined />}><NavLink to='/admin/typeWork'>TypeWork</NavLink></Menu.Item>    
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* Bill is a cat. */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
);
};
