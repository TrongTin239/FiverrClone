import { useSelect } from "@mui/base";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { CommentModel } from "../../Model/CommentModel";
import { AppDispatch, RootState, store } from "../../redux/configStore";
import { Comment, getCommentApi } from "../../redux/reducers/jobReducers";
import {
  getStore,
  getStoreJson,
  http,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/tool";
import CommentLogin from "./CommentLogin";

type Props = {};

export default function CommentComponent({}: Props) {
  const userComment = useRef({ comment: "" });
  const params = useParams();
  const userLogin = getStoreJson(USER_LOGIN);

  const dispatch: AppDispatch = useDispatch();
  const comment = getStoreJson("comment");
  const id = Number(params.jobID);

  useEffect(() => {}, [params.jobID]);
  const handleChange = (e: any) => {
    const text = e.target.value;
    userComment.current = text;
  };

  const getComment = (id: number) => {
    const action = getCommentApi(id);
    dispatch(action);
  };

  const getCommentAsync = (id: number) => {
    const res = getComment(id);
    return res;
  };
  const getCommentFromUser = async () => {
    const data = new CommentModel();
    const dt = new Date();
    const day =
      dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
    const newData = {
      ...data,
      maCongViec: params.jobID,
      maNguoiBinhLuan: userLogin.id,
      ngayBinhLuan: day,
      noiDung: userComment.current,
      saoBinhLuan: 5,
    };
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/binh-luan",
        method: "post",
        data: newData,
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0MTAiLCJlbWFpbCI6InRyb25ndGluQGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwibmJmIjoxNjY3Mjc2MzQ0LCJleHAiOjE2Njc4ODExNDR9.Iahj_7Hw__vxnAfa428Qnd1M-cffcHWGj-YWuz3m6bk",
          tokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMCIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NjU5MjAwMDAwMCIsIm5iZiI6MTY0ODIyNzYwMCwiZXhwIjoxNjc2NzM5NjAwfQ.aK-3RvHXQyu6H2-FFiafeSKR4UMCcRmnuDbTT-XIcUU",
        },
      });
      console.log(result);
      getCommentAsync(id);
      // alert(result.data.message)
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    getCommentFromUser();
  };
  const renderComment = () => {
    return comment?.map((comment: Comment, index: number) => {
      return (
        <div className="row" key={index}>
          <div className="col-2 ava">
            <div className="img">
              <img src={comment.avatar} alt="avt" />
            </div>
          </div>
          <div className="col-8 main-content">
            <div className="name">
              <p>{comment.tenNguoiBinhLuan}</p>
            </div>
            <div className="star-time">
              <ul>
                <li className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span>{comment.saoBinhLuan}</span>
                </li>
                <li className="line"></li>
                <li>{comment.ngayBinhLuan}</li>
              </ul>
            </div>
            <div className="comment-text">
              <span>{comment.noiDung}</span>
            </div>
            <div className="helpful">
              <p>
                <span> Helpful? </span>
                <span>
                  <i className="fa-sharp fa-solid fa-thumbs-up"></i>
                  <i className="fa-solid fa-thumbs-down"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="comment">
      <div className="comment-content">{renderComment()}</div>
      <div className="add-comment">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {userLogin ? (
            <div className="input-area">
              <div className="img">
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c8cd50126f0b2073911e0adfb27ab0ce-1660135389451/45828900-ecc1-4d32-a7a1-d74fdda4e2e8.jpg"
                  alt="avt-cmt"
                />
              </div>
              <div className="input">
                <input
                  id="text"
                  type="text-area"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <button type="submit">Add Comment</button>
              </div>
            </div>
          ) : (
            <CommentLogin />
          )}
       
        </form>
      </div>
    </div>
  );
}
