import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
// import { Form } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";

import {
  getJobCateApi,
  getJobList,
  getJobMenu,
  JobListDetail,
  JobModel,
  ListDetailCate,
} from "../../redux/reducers/jobReducers";

import { getStore, setStore } from "../../util/tool";
import Slider from "../Slider/Slider";
type Props = {};

export default function Header({}: Props) {
  const { jobMenu } = useSelector((state: RootState) => state.jobReducers);
  const dispatch: AppDispatch = useDispatch();
  const [navbar, setNavbar] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams("keysearch");
  const navigate = useNavigate();

  let keysearch: string | null = getStore("keysearch");
  // console.log(keysearch);

  const [key, setKey] = useState("keysearch");

  const handleChange = (e: any) => {
    setKey(e.target.value);
  };
  const getKeySearch = () => {
    const action = getJobList(keysearch);
    dispatch(action);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStore("keysearch", key);
    getKeySearch();
    navigate(`/detail/${key}`);
    // window.location.reload();
  };
  const getJobCate = (id: number) => {
    dispatch(getJobCateApi(id));
  };
  const renderCategories = () => {
    return jobMenu?.map((job: JobModel, index: number) => {
      // console.log(job)
      return (
        <ul key={job.id}>
          <li>
            <a
              onClick={() => {
                getJobCate(job.id)
                navigate(`/categories/${job.id}`);
              }}
            >
              {" "}
              {job.tenLoaiCongViec === "string" ? "" : job.tenLoaiCongViec}{" "}
            </a>

            <div
              className={
                job.tenLoaiCongViec === "Music & Audio"
                  ? " detail-job music"
                  : "detail-job"
              }
            >
              {job.dsNhomChiTietLoai?.map((item: JobListDetail) => {
                // console.log(item.dsChiTietLoai)
                return (
                  <ul className="moreDetailCate" key={item.id}>
                    <h5> {item.tenNhom} </h5>
                    {item.dsChiTietLoai.map((i: ListDetailCate) => {
                      return <li key={i.id}>{i.tenChiTiet}</li>;
                    })}
                  </ul>
                );
              })}
            </div>
          </li>
        </ul>
      );
    });
  };

  useEffect(() => {
    const action = getJobMenu();
    dispatch(action);
    getKeySearch();
  }, [keysearch]);

  useEffect(() => {}, []);
  return (
    <div className="header-main">
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
              <div className={navbar ? "logo" : "disactive"}>
                <img
                  src={require("../../assets/img/black-logo.png")}
                  alt=""
                  style={{ width: "100px", height: "40px" }}
                  onClick={() =>{
                    navigate("/")
                  }}
                />
              </div>
              <div className={navbar ? "searchBar" : "searchBar searchHiden"}>
                <Form className="d-flex" onSubmit={handleSubmit}>
                  <FormControl
                    type="text"
                    placeholder="Search..."
                    className="mr-lg-8 input"
                    onChange={handleChange}
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
              <li className="bli">
                <a
                  className={
                    navbar ? " signIn linkColor" : "signIn disactiveColor"
                  }
                  href=""
                >
                  {" "}
                  Sign in{" "}
                </a>
              </li>
              <li className="lli">
                <a href="">
                  <Button variant="outline-success"> Join</Button>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="categoriesMenu">
        <div className="container">
          <div className="categories">{renderCategories()}</div>
        </div>
      </div>
    </div>
  );
}
