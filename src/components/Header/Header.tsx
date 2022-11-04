import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
// import { Form } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import { useTranslation } from "react-i18next";

// import { Form } from "react-router-dom";

import {
  ACCESS_TOKEN,
  eraseCookie,
  eraseStore,
  getStoreJson,
  USER_LOGIN,
} from "../../util/tool";

import { Select } from "antd";
import {
  getJobList,
  getJobMenu,
  JobListDetail,
  JobModel,
  ListDetailCate,
} from "../../redux/reducers/jobReducers";
import { setStore } from "../../util/tool";
import Slider from "../Slider/Slider";
import "antd/dist/antd.css";
const { Option } = Select;

type Props = {};

export default function Header({}: Props) {
  const { t, i18n } = useTranslation();
  const { jobMenu } = useSelector((state: RootState) => state.jobReducers);
  const userLogin = getStoreJson(USER_LOGIN);
  const dispatch: AppDispatch = useDispatch();
  // console.log(userLogin);
  const [navbar, setNavbar] = useState<boolean>();
  const navigate = useNavigate();
  // Navbar
  const handleChangeLanguage = (value: string) => {
    console.log(`selected ${value}`);
    i18n.changeLanguage(value);
  };
  const renderLoginNavItem = () => {
    if (!userLogin) {
      return (
        <NavLink
          className={navbar ? " signIn linkColor" : "signIn disactiveColor"}
          to={`/login`}
          target={"_parent"}
        >
          {t("signin")}
        </NavLink>
      );
    } else if (userLogin) {
      <NavLink
        className={navbar ? " signIn linkColor" : "signIn disactiveColor"}
        to={`/login`}
        target={"_parent"}
      >
        Hello,
      </NavLink>;
    }
  };
  const renderRegisterNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink
          to={`/signup`}
          target={"_parent"}
          style={{ borderRadius: "8px" }}
        >
          <Button variant="outline-success"> {t("join")} </Button>
        </NavLink>
      );
    }
    return (
      <NavLink
        className="nav-link"
        to="/"
        onClick={() => {
          eraseStore();
          eraseCookie(ACCESS_TOKEN);
        }}
      >
        <Button
          variant="outline-success"
          style={{ backgroundColor: "transparent" }}
        >
          {" "}
          Log out
        </Button>
      </NavLink>
    );
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  // input
  const [key, setKey] = useState("");

  const handleChange = (e: any) => {
    setKey(e.target.value);
  };
  const getKeySearch = () => {
    const action = getJobList(key);
    dispatch(action);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (key) {
      setStore("keysearch", key);
      getKeySearch();
      navigate(`/detail/${key}`);
    }
    if (!key) {
      return;
    }
  };
  return (
    <div className="header">
      <div className={navbar ? "nn active" : "nn"}>
        <Row className="containerh  ">
          <Col className="col1">
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              color={navbar ? "back" : "white"}
              id="barIcon"
            />
            <div className="nm">
              <div className={navbar ? "disactive" : "logo"}>
                <img src="img/logo.png" style={{ width: "100px" }} alt="..." />
                <div className="dot"></div>
                <div></div>
              </div>
              <div className={navbar ? "logo" : "disactive"}>
                <img
                  src="img/black-logo.png"
                  alt=""
                  style={{ width: "100px", height: "40px" }}
                />
              </div>
              <div className={navbar ? "searchBar" : "searchBar searchHiden"}>
                <Form
                  className="d-flex"
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <FormControl
                    type="text"
                    placeholder="Search..."
                    className="mr-lg-8 input"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <button className="btn btn-dark searchLogo">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </Form>
              </div>
            </div>
          </Col>
          <Col>
            <ul className="nvegation">
              <li className="li">
                <a className={navbar ? "linkColor" : "disactiveColor"} href="">
                  Fiverr Business
                </a>
              </li>
              <li className="sli">
                <a className={navbar ? "linkColor" : "disactiveColor"} href="">
                  {t("explore")}
                </a>
              </li>
              <li className="sli">
                <span className={navbar ? "linkColor" : "disactiveColor"}>
                  <span className="global">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      size="2x"
                      color={navbar ? "blak" : "white"}
                      id="searchIcon"
                    />
                  </span>
                  <span>
                    {" "}
                    <Select
                      defaultValue="en"
                      style={{ width: 120, backgroundColor: "transparent" }}
                      onChange={handleChangeLanguage}
                    >
                      <Option value="en">English</Option>

                      <Option value="vi">VietNam</Option>
                    </Select>
                  </span>
                </span>
              </li>
              <li className="tli">
                <a className={navbar ? "linkColor" : "disactiveColor"} href="">
                  {" "}
                  $ USD
                </a>
              </li>
              <li className="tli">
                <a className={navbar ? "linkColor" : "disactiveColor"} href="">
                  {t("Become a seller")}
                </a>
              </li>
              <li className="bli">
                {/* <NavLink
                  className={
                    navbar ? " signIn linkColor" : "signIn disactiveColor"
                  }
                  to={`/login`}
                  target={"_parent"}
                >
                  
                  {t('signin')}
                </NavLink> */}
                {renderLoginNavItem()}
              </li>

              <li className="lli">
                {/* <NavLink to={`/signup`}  target={"_parent"}>
                  <Button variant="outline-success" > {t('join')} </Button>
                </NavLink> */}
                {renderRegisterNavItem()}
              </li>
            </ul>
          </Col>
        </Row>
      </div>

      <div>
        <Slider />
      </div>
    </div>
  );
}
