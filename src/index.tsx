import React from "react";
import ReactDOM from "react-dom/client";
import 'antd/dist/antd.css'
import { BrowserRouter, Route, Routes,unstable_HistoryRouter as HistoryRouter, } from "react-router-dom";
import HomeTeamplate from "./templates/HomeTemplate/HomeTeamplate";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserHistory } from 'history';
// import Demo from "./pages/Demo/Demo";
import HomeMain from "./templates/HomeMain/HomeMain";
import Detail from "./pages/Detail/Detail";
import "./assets/scss/style.scss";
import Categories from "./pages/Categories/Categories";
import JobFromDetail from "./templates/HomeTemplate/JobFromDetail";
import JobDetail from "./pages/JobDetail/JobDetail";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import Page404 from "./pages/Page404/Page404";
import User from "./pages/Admin/User/User";
import Service from "./pages/Admin/Service/Service";
import Work from "./pages/Admin/Work/Work";
import TypeWork from "./pages/Admin/TypeWork.tsx/TypeWork";
import { Switch } from "antd";
import AdminTemplate from './templates/AdminTemplate/AdminTemplate'
import ResponsiveItem from "./HOC/ResponsiveItem/ResponsiveItem";
import AddUser from "./pages/Admin/User/AddUser";
import AddService from "./pages/Admin/Service/AddService";
import AddWork from "./pages/Admin/Work/AddWork";
import AddTypeWork from "./pages/Admin/TypeWork.tsx/AddTypeWork";
import UpdateUser from "./pages/Admin/User/UpdateUser";
import UpdateSerivce from "./pages/Admin/Service/UpdateSerivce";
import UpdateTypeWork from "./pages/Admin/TypeWork.tsx/UpdateTypeWork";
import UpdateWork from "./pages/Admin/Work/UpdateWork";

export const history = createBrowserHistory({ window });
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <HistoryRouter history={history}>
        
          <Routes>
            <Route path="" element={<HomeTeamplate />}>
              <Route path="home" element={<Home />}>
              <Route path='*' element={<Page404 />}></Route>
              </Route>
              {/* <Route path="demo" element={<Demo />}></Route> */}
            </Route>
            <Route path="detail" element={<HomeMain />}>
              <Route path=":keysearch" element={<Detail />}></Route>
              {/* <Route path="categories" element={<Categories />}>
              <Route path=":id" />
            </Route> */}
            </Route>
            <Route path="categories" element={<HomeMain />}>
              <Route path=":id" element={<Categories />}></Route>
            </Route>

            <Route path="jobdetail" element={<HomeMain />}>
              <Route path=":jobID" element={<JobDetail />}></Route>
            </Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="signup" element={<Signup></Signup>}></Route>
          </Routes>
          <Routes>
              <Route path="/admin"element={<ResponsiveItem Component={AdminTemplate} />}>
                <Route index  element={<ResponsiveItem Component={User}></ResponsiveItem>}></Route>
                <Route path="/admin/user" element={<ResponsiveItem Component={User}></ResponsiveItem>}></Route>
                <Route path="/admin/service" element={<ResponsiveItem Component={Service}></ResponsiveItem>}></Route>
                <Route path="/admin/work" element={<ResponsiveItem Component={Work}></ResponsiveItem>}></Route>
                <Route path="/admin/typeWork"element={<ResponsiveItem Component={TypeWork}></ResponsiveItem>}></Route>
                <Route path="/admin/user/adduser" element={<ResponsiveItem Component={AddUser}></ResponsiveItem>}> </Route>
                <Route path="/admin/service/addservice" element={<ResponsiveItem Component={AddService}></ResponsiveItem>}> </Route>
                <Route path="/admin/work/addwork" element={<ResponsiveItem Component={AddWork}></ResponsiveItem>}> </Route>
                <Route path="/admin/typeWork/addtypeWork" element={<ResponsiveItem Component={AddTypeWork}></ResponsiveItem>}> </Route>
                <Route path="/admin/user/edit/:id" element={<ResponsiveItem Component={UpdateUser}></ResponsiveItem>}></Route>
                <Route path="/admin/service/edit/:id" element={<ResponsiveItem Component={UpdateSerivce}></ResponsiveItem>}></Route>
                <Route path="/admin/work/edit/:id" element={<ResponsiveItem Component={UpdateWork}></ResponsiveItem>}></Route>
                <Route path="/admin/typework/edit/:id" element={<ResponsiveItem Component={UpdateTypeWork}></ResponsiveItem>}></Route>
              </Route>
          </Routes>  
      </HistoryRouter>
    </Provider>
  </>
);
