import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTeamplate from "./templates/HomeTemplate/HomeTeamplate";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";

import UncontrolledExample from "./pages/Demo/demo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTeamplate />}>
          <Route index element={<Home />}></Route>
          <Route path="demo" element={<UncontrolledExample />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
