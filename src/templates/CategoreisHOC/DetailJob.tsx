import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getStore, getStoreJson } from "../../util/tool";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import {
  changeComponentFromDetail,
  getJobCateApi,
  getJobFromDetailApi,
  JobListDetail,
  JobListModel,
} from "../../redux/reducers/jobReducers";
import { useDispatch } from "react-redux";
import Detail from "../../pages/Detail/Detail";

type Props = {};
const jobCatego = getStoreJson("jobCate");

export default function DetailJob({}: Props) {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobCate, Component } = useSelector(
    (state: RootState) => state.jobReducers
  );

  // console.log(jobCate[0].dsNhomChiTietLoai);
  // console.log(jobCatego[0].dsNhomChiTietLoai);
  let li = document.querySelector(".li-job");
  // console.log(li);
  // let banner = document.querySelector(".banner")
  const a = document.querySelector(".header-job");

  // render
  // console.log(jobCate[0].dsNhomChiTietLoai);
  let { id } = params;
  useEffect(() => {
   
    renderJobCategories();
    getJobCateApi(Number(id));

 
  }, [params.id]);

  const getJobFromDetail = (id: number) => {
    const action: any = getJobFromDetailApi(id);
    // console.log(action)
    dispatch(action);
  };

  const renderNameJob = () => {
    if (jobCate.length === 1) {
      
      return <h2> {jobCate[0]?.tenLoaiCongViec} </h2>;
    } 
  };

  const renderJobCategories = () => {
    if (jobCate.length === 1) {
      return jobCate[0]?.dsNhomChiTietLoai?.map((job: JobListDetail) => {
        return (
          <div className="col-3" key={job.id}>
                <div className="img">
                  <img
                    src={
                      job.id === 28
                        ? "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/5d6a6b5b12ca229dcadc1f2e71f8a1f9-1627195918477/Music%20Production%20_%20Writing_2x.png"
                        : job.hinhAnh
                    }
                    alt=""
                  />
                </div>

                <div className="more-details">
                  <div className="group-name">
                    <h3>{job.tenNhom}</h3>
                  </div>
                  <div className="details-job">
                    <ul>
                      {job.dsChiTietLoai?.map((item, index) => {
                        return (
                          <li
                            id="li-tag"
                            className="li-job"
                            key={index}
                            onClick={() => {
                              getJobFromDetail(item.id);
                              dispatch(changeComponentFromDetail());
                              navigate(`/categories/${item.id}`);
                            }}
                          >
                            <p>{item.tenChiTiet}</p>
                            <i className="fa-solid fa-arrow-right"></i>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
        );
      });
    }
    
  };
  

  return (
    <div className="container">
      {/* banner */}
      <div className="job-categories">
        {renderNameJob()}
      <div className="row">
      {renderJobCategories()}

      </div>
      </div>
      
    </div>
  );
}
