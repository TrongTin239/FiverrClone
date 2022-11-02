// import {
//     DesktopOutlined,
//     FileOutlined,
//     PieChartOutlined,
//     TeamOutlined,
//     UserOutlined,
//   } from '@ant-design/icons';
// import { display } from '@mui/system';
//   import type { MenuProps } from 'antd';
//   import { Breadcrumb, Layout, Menu } from 'antd';
// import { Components } from 'antd/lib/date-picker/generatePicker';
//   import React, { useState } from 'react';
// import { NavLink, Route, useNavigate, useNavigation } from 'react-router-dom';
  

// type Props = {
//     title?:string
// }
// const { Header, Content, Footer, Sider } = Layout;
  
// // type MenuItem = Required<MenuProps>['items'][number];
  
// export default function AdminHeader(children:Props) {
//     const items = [
//         { label: 'User', key: '/admin/user',icon:<UserOutlined />}, // remember to pass the key prop
//         { label: 'Service', key: '/admin/service',icon:<UserOutlined /> }, // which is required
//         {label: 'Work', key: '/admin/work',icon:<UserOutlined />
//         //   children: [{ label: 'item 3', key: 'submenu-item-1' }],
//         },
//         { label: 'TypeWork', key: '/admin/typeWork',icon:<UserOutlined /> },
//       ];
//     const navigate=useNavigate()
//     const [collapsed, setCollapsed] = useState(false);
//     // const toggleCollapsed = () => {
//     //     setCollapsed(!collapsed);
//     //   };
//     return (
//         <div style={{ display:'flex',flexDirection:'row' }}>
//             {/* <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}> */}
//                 <div className="logo" />
//                 <Menu theme="dark" onClick={({key})=>{
//                     navigate(key)
//                 }} items={items}>
//                     {/* <Menu.Item key="1" icon={<UserOutlined />}><NavLink to='/admin/user'>User</NavLink></Menu.Item>
//                     <Menu.Item key="2"icon={<UserOutlined />}><NavLink to='/admin/service'>Service</NavLink></Menu.Item>
//                     <Menu.Item key="3"icon={<UserOutlined />}> <NavLink to='/admin/work'>Work</NavLink></Menu.Item>
//                     <Menu.Item key="4"icon={<UserOutlined />}><NavLink to='/admin/typeWork'>TypeWork</NavLink></Menu.Item>     */}
//                 </Menu>
//             <Content />
//         </div>
// );
// };

import React, { useState } from 'react';
import {
  EnvironmentOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  InfoCircleOutlined,
  KeyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
type Props = {
  children?: JSX.Element;
};

const { Header, Sider } = Layout;


const MenuSider = [
  {
    key: '/admin/user',
    icon: <UserOutlined />,
    label: 'User',
  },
  {
    key: '/admin/service',
    icon: <EnvironmentOutlined />,
    label: 'Service',
  },
  {
    key: '/admin/work',
    icon: <InfoCircleOutlined />,
    label: 'Work',
  },
  {
    key: '/admin/typeWork',
    icon: <KeyOutlined />,
    label: 'TypeWork',
  },
];

const MenuDropdown = [
  {
    key: '1',
    label: <a href='/'>Cập nhật thông tin</a>,
    className: 'nav-link',
  },
  {
    key: '2',
    label: <a href='/'>Đăng xuất</a>,
    className: 'nav-link',
  },
];

export default function AdminHeader({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <Sider trigger={true} collapsible collapsed={collapsed} width={230}>
          {collapsed ? (
            <div className='logo' />
          ) : (
            <div className='brand'>Dashboard</div>
          )}
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['management-user']}
            onSelect={(e) => {
              navigate(e.key)
            }}
            items={MenuSider}
          />
        </Sider>
        <Layout className='site-layout'>
          <Header
            className='site-header site-layout-background'
            style={{ padding: 0 }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div className='userLogin'>
              <span className='label-user'>ADMIN</span>
              <Dropdown
                overlay={<Menu items={MenuDropdown} />}
                placement='bottomRight'
                trigger={['click']}
                overlayClassName='site-header__userLogin-dropdown'
              >
                <Avatar
                  src='https://joeschmoe.io/api/v1/random'
                  size={{ xs: 24, sm: 32, md: 40 }}
                  icon={<UserOutlined />}
                  className='avatar'
                ></Avatar>
              </Dropdown>
            </div>
          </Header>
          <Outlet/>
        </Layout>
      </Layout>
    </>
  );
}
