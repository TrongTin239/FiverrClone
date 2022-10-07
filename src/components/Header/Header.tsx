import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
// import { Form } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";

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
  const dispatch: AppDispatch = useDispatch();
  const [navbar, setNavbar] = useState<boolean>();

  // Navbar

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  //   console.log(jobMenu);

  // const renderCategories = () => {
  //   return jobMenu?.map((job: JobModel, index: number) => {
  //     // console.log(job)
  //     return (
  //       <ul key={job.id}>
  //         <li>
  //           <a href="">
  //             {" "}
  //             {job.tenLoaiCongViec === "string" ? "" : job.tenLoaiCongViec}{" "}
  //           </a>

  //           {job.dsNhomChiTietLoai?.map((item: JobListDetail) => {
  //             // console.log(item.dsChiTietLoai)
  //             return (
  //               <ul className="moreDetailCate" key={item.id}>
  //                 <h5> {item.tenNhom} </h5>
  //                 {item.dsChiTietLoai.map((i: ListDetailCate) => {
  //                   return <li key={i.id}>{i.tenChiTiet}</li>;
  //                 })}
  //               </ul>
  //             );
  //           })}
  //         </li>
  //       </ul>
  //     );
  //   });
  // };

  // useEffect(() => {
  //   const action = getJobMenu();
  //   dispatch(action);
  // }, []);

  return (
    // <div className="homeMenu">
    //   <div className="home-main">
    //     <div className="container content-header">
    //       <nav className="navbar navbar-expand-sm navbar-light bg-transparent">
    //         <a className="navbar-brand  " href="#">
    //           fiverr
    //         </a>
    //         <button
    //           className="navbar-toggler d-lg-none"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapsibleNavId"
    //           aria-controls="collapsibleNavId"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         />
    //         <div className="collapse navbar-collapse " id="collapsibleNavId">
    //           <form className=" search-form d-flex my-2 my-lg-0">
    //             <input
    //               className="form-control me-sm-2"
    //               type="text"
    //               placeholder="Search"
    //             />
    //             <button
    //               className="btn btn-outline-success my-2 my-sm-0"
    //               type="submit"
    //             >
    //               Search
    //             </button>
    //           </form>
    //           <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">
    //             <li className="nav-item">
    //               <a className="nav-link active" href="#" aria-current="page">
    //                 Become a Seller<span className="visually-hidden "></span>
    //               </a>
    //             </li>
    //             <li className="nav-item ">
    //               <a className="nav-link active" href="#">
    //                 Sign in
    //               </a>
    //             </li>
    //             <li className="nav-item ">
    //               <a className="nav-link active join-btn " href="#">
    //                 Join
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </nav>
    //     </div>
    //     {/* CategoriesMenu */}
    //     {/* <div className="categoriesMenu">
    //       <div className="container">
    //         <div className="categories">{renderCategories()}</div>
    //       </div>
    //     </div> */}
    //     {/* <div className="main-content">
    //       <div className="container">
    //         <div className="find-job">
    //           <h1 className="title">
    //             <span>
    //               Find the perfect freelance services for your business
    //             </span>
    //           </h1>

    //           <form className="search-form">
    //             <span>
    //               <i className="fa-solid fa-magnifying-glass"></i>
    //             </span>
    //             <input type="text" placeholder="Try building mobile app" />
    //             <button>Search</button>
    //           </form>
    //         </div>
    //         <div className="popular">
    //           <p>Popular:</p>
    //           <ul>
    //             <li>Website Desgin</li>
    //             <li>WordPress</li>
    //             <li>Logo Design</li>
    //             <li>Video Editing</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div> */}
    //   </div>
    // </div>

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

      <div>
        <Slider />
      </div>
    </div>
  );
}
