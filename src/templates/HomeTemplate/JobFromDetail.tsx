import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  CongViec,
  getCommentApi,
  getDetailJobApi,
  JobListModel,
} from "../../redux/reducers/jobReducers";
import {
  getStore,
  getStoreJson,
  setStore,
  setStoreJson,
} from "../../util/tool";

type Props = {};

export default function JobFromDetail({}: Props) {
  let keySearch = getStore("keysearch");
  const params = useParams();
  let { keysearch } = params;
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const jobList = getStoreJson("jobFromDetail");

  // console.log(jobList);

  const getDetailJob = (id: number) => {
    const action = getDetailJobApi(id);
    dispatch(action);
  };
  const getComment = (id: number) => {
    const action = getCommentApi(id);
    dispatch(action);
  };
  const renderListJob = () => {
    return jobList?.map((job: JobListModel, index: number) => {
      return (
        <div className="col-3" key={index}>
          <div className="card">
            <NavLink to={`/jobdetail/${job.id}`} target={"_blank"}>
              <img
                src={job.congViec.hinhAnh}
                alt=""
                onClick={() => {
                  getDetailJob(job.id);
                  getComment(job.id);
                }}
              />
            </NavLink>
            <div className="card-body">
              <div className="info">
                <div className="avt">
                  <img src={job.avatar} alt="" />
                </div>
                <div className="name-lvl">
                  <a href="">{job.tenNguoiTao}</a>
                  <span>lvl2</span>
                </div>
              </div>
              <div className="desc">
                <NavLink to={`/jobdetail/${job.id}`} target={"_blank"}>
                  {" "}
                  <p>{job.congViec.tenCongViec}</p>
                </NavLink>
                <div className="star">
                  <i className="fa-solid fa-star"></i>{" "}
                  {job.congViec.saoCongViec}
                  <span className="rate-text">({job.congViec.danhGia})</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="heart">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="price">
                <span>STARTING AT</span> ${job.congViec.giaTien}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    // console.log("first");
    // renderListJob()
  }, [keySearch]);

  return (
    <div className="detail">
      <div className="container">
        {/* title detail */}
        {/* <div className="header-detail">
          <div className="details-select">
            <details>
              <summary>Category</summary>
              <ul>
                <li>All categories</li>
                <li>T-shirts & Merchandse </li>
                <li>Logo Design</li>
                <li>WordPress</li>
              </ul>
            </details>
            <details>
              <summary>Seller Details</summary>
              <ul>
                <li>All categories</li>
                <li>T-shirts & Merchandse </li>
                <li>Logo Design</li>
                <li>WordPress</li>
              </ul>
            </details>
            <details>
              <summary>Budget</summary>
              <ul>
                <li>All categories</li>
                <li>T-shirts & Merchandse </li>
                <li>Logo Design</li>
                <li>WordPress</li>
              </ul>
            </details>
            <details>
              <summary>Delivery Time</summary>
              <ul>
                <li>All categories</li>
                <li>T-shirts & Merchandse </li>
                <li>Logo Design</li>
                <li>WordPress</li>
              </ul>
            </details>
          </div>
          <div className="checkbox">
            <div className="check">
              <input type="checkbox" name="pro" id="" />
              <label htmlFor="pro">Pro services</label>

              <input type="checkbox" name="pro" id="" />
              <label htmlFor="pro">Local sellers</label>

              <input type="checkbox" name="pro" id="" />
              <label htmlFor="pro">Online sellers</label>
            </div>
          </div>
        </div> */}
        {/* Main content */}
        <div className="detail-main">
          <div className="row">{renderListJob()}</div>
        </div>
      </div>
    </div>
  );
}
