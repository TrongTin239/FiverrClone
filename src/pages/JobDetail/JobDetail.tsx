import React, { useEffect } from "react";
import { useSelector } from "react-redux";
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

type Props = {};

export default function JobDetail({}: Props) {
  const { DetailJob } = useSelector((state: RootState) => state.jobReducers);
  const job = getStoreJson("detailJob");
  // console.log(job);

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
              <div className="row">
                <div className="col-6">
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
                <div className="col-6">
                  <div className="relevant">
                    <p className="title">
                      {" "}
                      Sort By{" "}
                      <span>
                        Most relevant{" "}
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
          </div>
        </div>
        <div className="col-4">
          <div className="job-price"></div>
        </div>
      </div>
    </div>
  );
}
