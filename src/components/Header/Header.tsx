import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import { Form } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import { ACCESS_TOKEN, eraseCookie, eraseStore } from '../../util/tool';

import {
  getJobMenu,
  JobListDetail,
  JobModel,
  ListDetailCate,
} from "../../redux/reducers/jobReducers";
import Slider from "../Slider/Slider";
type Props = {};

export default function Header({}: Props) {
  const { jobMenu } = useSelector((state: RootState) => state.jobReducers);
  const { userLogin } = useSelector((state:RootState) => state.userReducer);
  const dispatch: AppDispatch = useDispatch();
  const [navbar, setNavbar] = useState<boolean>();

  // Navbar
  const renderLoginNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink className='nav-link' to='/login'>
          Login
        </NavLink>
      );
    }
    // return (
    //   <NavLink className='nav-link active' to='/profile'>
    //     Hello {userLogin.name}
    //   </NavLink>
    // );
  };
  const renderRegisterNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink className='nav-link' to='/signup'>
          Register
        </NavLink>
      );
    }
    return (
      <a
        className='nav-link'
        href='/login'
        onClick={() => {
          eraseStore();
          eraseCookie(ACCESS_TOKEN);
        }}
      >
        Logout
      </a>
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
                <Form className="d-flex">
                  <FormControl
                    type="text"
                    placeholder="Search..."
                    className="mr-lg-8 input"
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
                  Explore
                </a>
              </li>
              <li className="sli">
                <a className={navbar ? "linkColor" : "disactiveColor"} href="">
                  <span className="global">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      size="2x"
                      color={navbar ? "blak" : "white"}
                      id="searchIcon"
                    />
                  </span>
                  <span> English</span>
                </a>
              </li>
              <li className="tli">
                <a className={navbar ? "linkColor" : "disactiveColor"} href="">
                  {" "}
                  $ USD
                </a>
              </li>
              <li className="tli">
                <a className={navbar ? "linkColor" : "disactiveColor"} href="">
                  {" "}
                  Become a Seller
                </a>
              </li>
              <li className='tli'>{renderLoginNavItem()}</li>
              <li className='tli'>{renderRegisterNavItem()}</li>
              <li className="tli"><NavLink to='admin'>admin</NavLink></li>
              <li className="lli">
                <a href="">
                  <Button variant="outline-success"> Join</Button>
                </a>
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
