import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTeamplate from "./templates/HomeTemplate/HomeTeamplate";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

// import Demo from "./pages/Demo/Demo";
import HomeMain from "./templates/HomeMain/HomeMain";
import Detail from "./pages/Detail/Detail";
import "./assets/scss/style.scss";
import Categories from "./pages/Categories/Categories";
import JobFromDetail from "./templates/HomeTemplate/JobFromDetail";
import JobDetail from "./pages/JobDetail/JobDetail";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTeamplate />}>
            <Route index element={<Home />}></Route>
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
        </Routes>

     
      </BrowserRouter>
    </Provider>
  </>
);
