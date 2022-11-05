import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getStore, getStoreJson } from "../../util/tool";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { JobListDetail, JobListModel } from "../../redux/reducers/jobReducers";

type Props = {};

export default function Categories({}: Props) {
  const params = useParams();
  const jobCatego = getStoreJson("jobCate");
  const navigate = useNavigate();
  const { jobCate,Component } = useSelector((state: RootState) => state.jobReducers);

  // console.log(jobCatego[0].dsNhomChiTietLoai);
  let li = document.querySelector(".li-job");
  // console.log(li);
  // let banner = document.querySelector(".banner")
  const a = document.querySelector(".header-job");


  // render
  let { id } = params;

  // const renderJobCategories = () => {
  //   return jobCatego[0].dsNhomChiTietLoai.map((job: JobListDetail) => {
  //     return (
  //       <div className="col-3" key={job.id}>
  //         <div className="img">
  //           <img
  //             src={
  //               job.id === 28
  //                 ? "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/5d6a6b5b12ca229dcadc1f2e71f8a1f9-1627195918477/Music%20Production%20_%20Writing_2x.png"
  //                 : job.hinhAnh
  //             }
  //             alt=""
  //           />
  //         </div>

  //         <div className="more-details">
  //           <div className="group-name">
  //             <h3>{job.tenNhom}</h3>
  //           </div>
  //           <div className="details-job">
  //             <ul>
  //               {job.dsChiTietLoai.map((item, index) => {
  //                 return (
  //                   <li
  //                     id="li-tag"
  //                     className="li-job"
  //                     key={index}
  //                     onClick={() => {
  //                       navigate(`/categories/${item.id}`);
  //                     }}
  //                   >
  //                     <p>{item.tenChiTiet}</p>
  //                     <i className="fa-solid fa-arrow-right"></i>
  //                   </li>
  //                 );
  //               })}
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // };
  useEffect(() => {


    // console.log(id);
  }, [params.id]);
  return (
    <div className="container">
      {/* banner */}
      <div className="JobDetail">
        <div className="banner">
          {/* <img src="/img/bg-cate.webp" alt="" /> */}
          <div className="banner-text">
            <div className="title">
           
              <h3>Graphics and Desgin</h3>
              <p>Design to make you stand out.</p>
              <button className="btn-work">
                <i className="fa-solid fa-circle-play"></i>
                <span>How Fiverr Works</span>
              </button>
            </div>
          </div>
        </div>
        <div className="popular">
          <h4>Most popular in Graphics & Design</h4>
          <ul>
            <li>
              <div className="img">
              {/* logo-design.webp */}
                <img src={require("../../assets/img/Logo-design.webp")} alt="..." />
              </div>
              <div className="text">
                <span>Minimalist Logo Design</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </li>

            <li>
              <div className="img">
                <img src="/img/logo-design2.webp" alt="..." />
              </div>
              <div className="text">
                <span>Architecture & Interior Design</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </li>

            <li>
              <div className="img">
                <img src="/img/logo-design3.webp" alt="..." />
              </div>
              <div className="text">
                <span>Image Editing</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </li>

            <li>
              <div className="img">
                <img src="/img/nft.webp" alt="..." />
              </div>
              <div className="text">
                <span>NFT Art</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </li>

            <li>
              <div className="img">
                <img src="/img/t-shirts .webp" alt="..." />
              </div>
              <div className="text">
                <span>T-Shirts & Merchandise</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </li>
          </ul>
        </div>
        {/* content */}
      {/* <div className="job-categories">
          <h2>{jobCatego[0].tenLoaiCongViec}</h2>
          <div className="row">{renderJobCategories()}</div>
        </div>  */}
      {Component}

     </div>
    

       {/* {testValid()}  */}

      

      <div className="services">
        <h3>Services Related To Graphics & Design</h3>

        <ul>
          <span>
            <a href="">Minimalist logo design</a>
          </span>

          <span>
            <a href="">Signature logo design</a>
          </span>

          <span>
            <a href="">Mascot logo design</a>
          </span>
          <span>
            <a href="">3d logo design</a>
          </span>

          <span>
            <a href="">Hand drawn logo design</a>
          </span>

          <span>
            <a href="">Vintage logo design</a>
          </span>

          <span>
            <a href="">Remove background</a>
          </span>

          <span>
            <a href="">Photo restoration</a>
          </span>

          <span>
            <a href="">Photo retouching</a>
          </span>

          <span>
            <a href="">Image resize</a>
          </span>

          <span>
            <a href="">Product label design</a>
          </span>

          <span>
            <a href="">Custom twitch overlay</a>
          </span>

          <span>
            <a href="">Custom twitch emotes</a>
          </span>

          <span>
            <a href="">Gaming logo</a>
          </span>
          <span>
            <a href="">Children book illustration</a>
          </span>

          <span>
            <a href="">Instagram design</a>
          </span>

          <span>
            <a href="">Movie poster design</a>
          </span>

          <span>
            <a href="">Box design</a>
          </span>

          <span>
            <a href="">Logo maker</a>
          </span>

          <span>
            <a href="">Logo ideas</a>
          </span>
        </ul>
      </div>
    </div>
  );
}
