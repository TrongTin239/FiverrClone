import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { RentJob } from "../../Model/RentJob";
import { RootState } from "../../redux/configStore";
import { JobListModel } from "../../redux/reducers/jobReducers";
import {
  getStore,
  getStoreJson,
  setStore,
  setStoreJson,
} from "../../util/tool";
import CommentComponent from "./Comment";
import Comment from "./Comment";
import CommentLogin from "./CommentLogin";

type Props = {};

export default function JobDetail({}: Props) {
  const { DetailJob } = useSelector((state: RootState) => state.jobReducers);
  const userLogin = getStore("userLogin");
  const job = getStoreJson("detailJob");
  const params = useParams();
const navigate  = useNavigate()
  const data = new RentJob();
  const dt = new Date();
  const day = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
  const newData = {
    ...data,
    maCongViec: params.jobID,
    maNguoiThue: 1221,
    ngayThue: day,
    hoanThanh: true,
  };
  // HandleRent

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const RentJobApi = async () => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/thue-cong-viec",
        method: "post",
        data: newData,
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMjEiLCJlbWFpbCI6InRyb25ndGluMzMxMUBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsIm5iZiI6MTY2Njc2NzI0MCwiZXhwIjoxNjY3MzcyMDQwfQ.B1mxG-R0zdPE_UKTXSCOZkww0rixL3uIR1n7Bhimw8U",
          tokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMCIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NjU5MjAwMDAwMCIsIm5iZiI6MTY0ODIyNzYwMCwiZXhwIjoxNjc2NzM5NjAwfQ.aK-3RvHXQyu6H2-FFiafeSKR4UMCcRmnuDbTT-XIcUU",
        },
      });
      alert("Confirm Requirements");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const show = document.querySelector(".services-show");
    const hide = document.querySelector(".services-hide");
    const show2 = document.querySelector(".important-show");
    const hide2 = document.querySelector(".important-hide");
    const show3 = document.querySelector(".trade-show");
    const hide3 = document.querySelector(".trade-hide");
    show?.addEventListener("click", () => {
      hide?.classList.toggle("active");
    });

    show2?.addEventListener("click", () => {
      hide2?.classList.toggle("active");
    });

    show3?.addEventListener("click", () => {
      hide3?.classList.toggle("active");
    });
  }, []);
  // console.log(job);
  const renderJobPrice = () => {
    return job?.map((item: JobListModel, index: number) => {
      return (
        <div className="content" key={index}>
          <div className="header-content">
            <div className="title">Medium Brand Story</div>
            <div className="price">${item.congViec.giaTien}</div>
          </div>
          <div className="text">
            <p>Around 250 words of professional content about your brand</p>
          </div>
          <div className="short-desc">
            <div className="header-desc">
              <ul>
                <li>
                  <span className="icon">
                    <i className="fa-regular fa-clock"></i>
                    <span className="day">4 Days Delivery</span>
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <i className="fa-solid fa-rotate-right"></i>
                  </span>
                  <span className="text">3 Revisions</span>
                </li>
              </ul>
            </div>
            <div className="main-desc">
              {/* <ul>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>Mission & vision statement</span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>Mission & vision statement</span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>Mission & vision statement</span>
              </li>
            </ul> */}
              {item.congViec.moTaNgan}
            </div>
            <div className="form">
              <form action="">
                <Button variant="primary" onClick={handleShow}>
                  Continue (${item.congViec.giaTien})
                </Button>
                {userLogin ? (
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure for take this job?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleClose();
                          RentJobApi();
                        }}
                      >
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                ) : (
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Notice</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Login for continue</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                         navigate("/login")
                        }}
                      >
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                )}
              </form>
            </div>
            <div className="compare">
              <p>Compare Packages</p>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderJobInfo = () => {
    return job?.map((item: JobListModel, index: number) => {
      //   console.log(item.congViec.moTaNgan);
      return (
        <div key={item.id}>
          <div className="joblist">
            <ul key={item.id}>
              <li>
                <a className="job-name" href="">
                  <span className="job-name">{item.tenLoaiCongViec}</span>
                </a>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>

              <li>
                <a className="job-name" href="">
                  <span className="job-name">{item.tenNhomChiTietLoai}</span>
                </a>
                <span key={index}>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>

              <li>
                <a className="job-name" href="">
                  <span className="job-name">{item.tenChiTietLoai}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="job-detail">
            <h2>{item.congViec.tenCongViec}</h2>
            <div className="seller-info">
              <div className="avt">
                <img src={item.avatar} alt="..." />
              </div>
              <div className="name-level">
                <p className="name">{item.tenNguoiTao}</p>
                <p className="level">lvl 2 seller</p>
              </div>
              <div className="rate">
                <p className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span className="rate-star">{item.congViec.saoCongViec}</span>
                  <span className="danhgia">({item.congViec.danhGia})</span>
                </p>
              </div>
            </div>

            <div className="course-img">
              <div className="cover">
                <img src={item.congViec.hinhAnh} />
              </div>
            </div>
          </div>
          <div className="about">
            <h5>About This Gig</h5>
            <p>Top Rated Seller with all reviews</p>

            <p>{item.congViec.moTa}</p>
          </div>
          <div className="about-seller">
            <h4>About The Seller</h4>
            <div className="seller-info">
              <div className="img">
                <img src={item.avatar} alt="" />
              </div>
              <div className="main">
                <p className="name">{item.tenNguoiTao}</p>

                <p>{item.tenChiTietLoai}</p>
                <div className="rate">
                  <p className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="rate-star">
                      {item.congViec.saoCongViec}
                    </span>
                    <span className="danhgia">({item.congViec.danhGia})</span>
                  </p>
                </div>
                <div className="button">
                  <button>Contact Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="job-info">{renderJobInfo()}</div>
        </div>
        <div className="col-4">
          <div className="job-price">
            <div className="main">
              <div className="row">
                <div className="col-4">Basic</div>
                <div className="col-4 border-col">Standard</div>
                <div className="col-4">Premium</div>
              </div>

              {renderJobPrice()}
            </div>
          </div>
        </div>
      </div>
      <div className="row row-faq">
        <div className="col-6">
          <div className="faq">
            <h3>FAQ</h3>
            <div className="why">
              <div className="services">
                <div className="services-show">
                  <span>Why should I choose your services?</span>
                  <span className="icon">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
                <div className="services-hide">
                  <p>
                    {" "}
                    It is hard for small and new businesses to pay the heavy fee
                    of attorney and lawyer to handle the trademark process
                    therefore we at Attorney-Online a team of qualified licensed
                    attorneys decided to provide professional yet affordable
                    legal and intellectual property services
                  </p>
                </div>
              </div>
              <div className="important">
                <div className="important-show">
                  <span>Why trademark search is important?</span>
                  <span className="icon">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
                <div className="important-hide">
                  <p>
                    It is hard for small and new businesses to pay the heavy fee
                    of attorney and lawyer to handle the trademark process
                    therefore we at Attorney-Online a team of qualified licensed
                    attorneys decided to provide professional yet affordable
                    legal and intellectual property services
                  </p>
                </div>
              </div>
              <div className="trade">
                <div className="trade-show">
                  <span>Why should I Register My Trademark?</span>
                  <span className="icon">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
                <div className="trade-hide">
                  <p>
                    It is hard for small and new businesses to pay the heavy fee
                    of attorney and lawyer to handle the trademark process
                    therefore we at Attorney-Online a team of qualified licensed
                    attorneys decided to provide professional yet affordable
                    legal and intellectual property services
                  </p>
                </div>
              </div>
            </div>
            <div className="rating">
              <div className="row row-rating">
                <div className="col-6 star-rating">
                  <div className="reviews">
                    <p>
                      <span className="title">234 Reviews</span>
                      <span className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <span>5</span>
                      </span>
                    </p>
                  </div>
                  <div className="review-star">
                    <tbody>
                      <tr className="star">
                        <td>
                          <span className="star-5">5 Stars</span>
                        </td>
                        <td className="volumn">
                          <p className="volumn-color"></p>
                        </td>
                        <td className="star-num">(228)</td>
                      </tr>

                      <tr className="star">
                        <td>
                          <span className="star-4">4 Stars</span>
                        </td>

                        <td className="volumn">
                          <p className="volumn-color4"></p>
                        </td>
                        <td className="star-num">(5)</td>
                      </tr>

                      <tr className="star">
                        <td>
                          <span className="star-3">3 Stars</span>
                        </td>
                        <td className="volumn">
                          <p className="volumn-color3"></p>
                        </td>
                        <td className="star-num">(3)</td>
                      </tr>

                      <tr className="star">
                        <td>
                          <span>2 Stars</span>
                        </td>
                        <td className="volumn">
                          <p className="volumn-color2"></p>
                        </td>
                        <td className="star-num">(0)</td>
                      </tr>

                      <tr className="star">
                        <td>
                          <span>1 Stars</span>
                        </td>
                        <td className="volumn">
                          <p className="volumn-color1"></p>
                        </td>
                        <td className="star-num">(0)</td>
                      </tr>
                    </tbody>
                  </div>
                </div>
                <div className="col-5" style={{ paddingTop: "10px" }}>
                  <div className="relevant">
                    <p className="title">
                      {" "}
                      Sort By{" "}
                      <span>
                        Most relevant
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </p>
                  </div>
                  <div className="break-down">
                    <p className="break-title">Rating Breakdown</p>
                    <div className="detail">
                      <p>
                        <span className="content">
                          Seller communication level
                        </span>
                        <i className="fa-solid fa-star">5</i>
                      </p>

                      <p>
                        <span className="content">Recommend to a friend</span>
                        <i className="fa-solid fa-star">4.9</i>
                      </p>

                      <p>
                        <span className="content">Service as described</span>
                        <i className="fa-solid fa-star">5</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<CommentComponent/>
            {/* {userLogin ? <CommentComponent /> : <CommentLogin />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
